'use client'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import SendEmailButton from './SendEmailButton'
import { forgotPassword } from '@/actions/auth'

const ForgotPassword = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await forgotPassword(formData);

        if (result.status === 'success') {
            alert('Password reset link sent to your email.');
        } else {
            setError(result.status);
        }

        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className='w-[350px] mx-auto p-8 bg-zinc-900 flex flex-col justify-center align-middle content-center'>
            <div className='mx-auto'>
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
                <div className='mx-auto mt-8 flex justify-center'>
                    <SendEmailButton loading={loading} />
                </div>
            </div>
            {error && <p className='text-red-500 font-bold'>{error}</p>}
        </form>
    )
}

export default ForgotPassword