'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BiSolidUserPin } from 'react-icons/bi'
import SignupButton from './SignupButton'
import { signUp } from '@/actions/auth'

const SignupForm = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await signUp(formData);

        if (result.status === 'success') {
            router.push('/login');
        } else {
            setError(result.status);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className='w-[350px] mx-auto p-8 bg-zinc-900 flex flex-col justify-center align-middle content-center'>
            <div className='mx-auto'>
                <div className='flex justify-between'>
                    <label className='text-zinc-100 font-semibold text-2xl'>Username</label>
                    <BiSolidUserPin className='text-zinc-100 text-3xl' />
                </div>
                <input 
                    type='text'
                    id='username'
                    name='username'
                    placeholder='Your username'
                    className='mt-4 h-[30px] py-1 px-2 bg-zinc-800 text-zinc-100 border-b-2 border-zinc-100 focus:outline-none placeholder-sky-500'
                />
            </div>
            <div className='mx-auto mt-4'>
                <div className='flex justify-between'>
                    <label className='text-zinc-100 font-semibold text-2xl'>Email</label>
                    <MdEmail className='text-zinc-100 text-3xl' />
                </div>
                <input 
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your email'
                    className='mt-4 h-[30px] py-1 px-2 bg-zinc-800 text-zinc-100 border-b-2 border-zinc-100 focus:outline-none placeholder-sky-500'
                />
            </div>
            <div className='mx-auto mt-4'>
                <div className='flex justify-between'>
                    <label className='text-zinc-100 font-semibold text-2xl'>Password</label>
                    <RiLockPasswordFill className='text-zinc-100 text-3xl' />
                </div>
                <input 
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    className='mt-4 h-[30px] py-1 px-2 bg-zinc-800 text-zinc-100 border-b-2 border-zinc-100 focus:outline-none placeholder-sky-500'
                />
            </div>
            <div className='mx-auto mt-8'>
                <SignupButton loading={loading} />
            </div>
            {error && <p className='text-red-500 font-bold'>{error}</p>}
        </form>
    );
}

export default SignupForm