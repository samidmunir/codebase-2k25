'use client'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
    const [userEmail, setUserEmail] = useState<string>('');

    const router = useRouter();

    const getUser = async () => {
        try {
            const {data: {user}} = await supabase
                .auth
                .getUser();
            setUserEmail(user?.email);
        } catch (error) {
            console.log('2. Error retrieving User')
            console.log(error);
        }
    }

    const signout = async () => {
        try {
            const {error} = await supabase
                .auth
                .signOut();
            
            if (error) {
                console.log('Error:', error);
            } else {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        }   
    }

    getUser();

    return (
        <main className='bg-zinc-900 text-zinc-100 w-full h-[700px]'>
            <h1 className='text-4xl font-bold text-center pt-8'>Next-Supabase Authentication</h1>
            <div>
                <p className='text-xl font-semibold text-center pt-4'>You are now logged in.</p>
                <p className='text-lg font-bold text-center text-sky-500 pt-4'>{userEmail}</p>
            </div>
            <div className='w-full flex justify-center'>
                <button className='border-2 border-zinc-100 py-2 px-3 mt-8 hover:bg-zinc-100 hover:text-zinc-900 transition-all cursor-default' onClick={signout}>Signout</button>
            </div>
        </main>
    )
}