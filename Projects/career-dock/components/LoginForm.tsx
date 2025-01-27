'use client'
import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { BsEnvelopeFill, BsShieldLockFill } from 'react-icons/bs'
import LoginButton from './LoginButton'

const LoginForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className='bg-zinc-900 w-[400px] mx-auto py-8 px-4 mt-8 flex flex-col shadow-xl'>
            <div className='mx-auto'>
                <div className='flex justify-between'>
                    <label className='text-2xl font-semibold text-neutral-100'>Email</label>
                    <BsEnvelopeFill className='text-3xl my-auto text-neutral-100' />
                </div>
                <input 
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Your email'
                    className='py-1 px-2 w-[250px] mt-2 focus:outline-none shadow-xl bg-stone-400 text-zinc-900 placeholder:text-zinc-900 border-b-2 border-stone-100'
                />
            </div>
            <div className='mt-4 mx-auto'>
                <div className='flex justify-between'>
                    <label className='text-2xl font-semibold text-neutral-100'>Password</label>
                    <BsShieldLockFill className='text-3xl my-auto text-neutral-100' />
                </div>
                <input 
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Password'
                    className='py-1 px-2 w-[250px] mt-2 focus:outline-none shadow-xl bg-stone-400 text-zinc-900 placeholder:text-zinc-900 border-b-2 border-stone-100'
                />
            </div>
            <div className='mx-auto mt-8'>
                <LoginButton loading={loading} />
            </div>
            {error && <p className='text-red-500 font-bold'>{error}</p>}
        </form>
    );
}

export default LoginForm