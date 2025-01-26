'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ResetPswdButton from './ResetPswdButton'
import { resetPassword } from '@/actions/auth'

const ResetPassword = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await resetPassword(formData, searchParams.get('code') as string);

        if (result.status === 'success') {
            router.push('/');
        } else {
            setError(result.status);
        }

        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className='w-[350px] mx-auto p-8 bg-zinc-900 flex flex-col justify-center align-middle content-center'>
            <div className='mx-auto'>
                <div className='flex justify-between'>
                    <label className='text-zinc-100 font-semibold text-2xl'>New Password</label>
                </div>
                <input 
                    type='password'
                    id='password_1'
                    name='password_1'
                    placeholder='New password'
                    className='mt-4 h-[30px] py-1 px-2 bg-zinc-800 text-zinc-100 border-b-2 border-zinc-100 focus:outline-none placeholder-sky-500'
                />
                <div className='flex justify-between mt-4'>
                    <label className='text-zinc-100 font-semibold text-2xl'>Confirm Password</label>
                </div>
                <input 
                    type='password'
                    id='password_2'
                    name='password_2'
                    placeholder='Confirm password'
                    className='mt-4 h-[30px] py-1 px-2 bg-zinc-800 text-zinc-100 border-b-2 border-zinc-100 focus:outline-none placeholder-sky-500'
                />
                <div className='mx-auto mt-8 flex justify-center'>
                    <ResetPswdButton loading={loading} />
                </div>
            </div>
            {error && <p className='text-red-500 font-bold'>{error}</p>}
        </form>
    )
}

export default ResetPassword