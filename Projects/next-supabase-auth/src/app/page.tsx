'use client'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [loggedInFlag, setLoggedInFlag] = useState<boolean>(false);
  
  const [data, setData] = useState<{
    email: string,
    password: string,
  }>({
    email: '',
    password: '',
  });

  const router = useRouter();

  const validateUserSession = async () => {
    const {data: {user}} = await supabase
      .auth
      .getUser();
    if (user) {
      setLoggedInFlag(true);
    } else {
      setLoggedInFlag(false);
    }
  }

  const login = async () => {
    try {
      const {data: dataUser, error} = await supabase
        .auth
        .signInWithPassword({
          email: data.email,
          password: data.password,
        });
      if (dataUser) {
        const user = dataUser.user;
        if (user) {
          console.log(user);
          router.push('/home');
        } else {
          alert('Invalid credentials!');
        }
      } else {
        console.log('1. Error logging in');
        console.log(error);
      }
    } catch (error) {
      console.log('2. Error logging in')
      console.log(error);
    }
  }

  const signup = async () => {
    try {
      const {data: dataUser, error} = await supabase
        .auth
        .signUp({
          email: data.email,
          password: data.password,
        });
      if (dataUser) {
        const user = dataUser.user;
        if (user) {
          console.log(user);
          alert('PLEASE CHECK UR FUCKING EMAIL');
          // router.push('/home');
        } else {
          alert('Failed to sign up')
        }
      } else {
        console.log('1. Error signing up')
        console.log(error);
      }
    } catch (error) {
      console.log('2. Error signing up');
      console.log(error);
    }
  }

  const signout = async () => {
    try {
      const {error} = await supabase
        .auth
        .signOut();
      if (error) {
        alert('Failed to sign out!');
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const {name, value} = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  validateUserSession();

  return (
    <main className='bg-zinc-900 text-zinc-100 w-full h-[500px] p-4'>
      <div className='mt-4'>
        <h1 className='text-4xl text-center'>Supabase Authentication with NextJS</h1>
        <h2 className='text-2xl text-center opacity-75'>Using Email & Password</h2>
      </div>
      {loggedInFlag ? (
        <div>
          <h1 className='text-6xl text-center text-sky-500 font-semibold mt-8'>You are logged in!</h1>
          <div className='mx-auto text-center mt-8'>
            <button
                className='border-2 border-zinc-100 py-2 px-3 font-semibold hover:bg-zinc-100 hover:text-zinc-900 transition-all cursor-default'
              onClick={signout}
            >Signout</button>
          </div>
        </div>
      ) : (
        <div className='bg-zinc-800 w-[300px] p-4 mx-auto mt-8'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email'>Email</label>
            <input 
              name='email'
              type='email'
              placeholder='Email'
              value={data?.email}
              onChange={handleChange}
              className='bg-zinc-900 py-2 px-3 text-zinc-100 placeholder-zinc-500'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='password'>Password</label>
            <input 
              name='password'
              type='password'
              placeholder='Password'
              value={data?.password}
              onChange={handleChange}
              className='bg-zinc-900 py-2 px-3 text-zinc-100 placeholder-zinc-500'
            />
          </div>
          <div className='flex justify-center gap-4'>
            <button
              className='border-2 border-zinc-100 py-2 px-3 font-semibold hover:bg-zinc-100 hover:text-zinc-900 transition-all cursor-default'
              onClick={login}
            >Login</button>
            <button
              className='border-2 border-zinc-100 py-2 px-3 font-semibold hover:bg-zinc-100 hover:text-zinc-900 transition-all cursor-default'
              onClick={signup}
            >Signup</button>
          </div>
        </div>
      )
      }
    </main>
  )
}