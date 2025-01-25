import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import { SiNextdotjs } from 'react-icons/si'
import { FaSignInAlt } from 'react-icons/fa'

export default function LoginPage() {
    return (
        <main className='h-[600px] bg-zinc-800 p-4'>
            <div className='text-zinc-100 flex justify-center font-bold mt-4'>
                <SiNextdotjs className='text-4xl' />
                <h1 className='text-3xl ml-4'>Supabase Authentication NextJS</h1>
            </div>
            <div className='text-zinc-100 flex justify-center align-middle content-center mt-4'>
                <h2 className='text-2xl font-semibold'>Please sign in below</h2>
                <FaSignInAlt className='text-3xl ml-4' />
            </div>
            <section className='mt-4'>
                <LoginForm />
            </section>
            <section className='w-[350px] mx-auto bg-zinc-900 p-4 border-t-4 border-zinc-100'>
                <div className='text-md flex gap-4 justify-between'>
                    <p className='text-zinc-100 opacity-50 cursor-none'>{`Don't have an account?`}</p>
                    <Link 
                        href='/register'
                        className='text-sky-500 font-semibold hover:scale-110 transition-all cursor-default'
                    >Sign up</Link>
                </div>
                <div className='text-md flex gap-4 justify-between'>
                    <p className='text-zinc-100 opacity-50 cursor-none'>Forgot your password?</p>
                    <Link 
                        href='/forgot-password'
                        className='text-sky-500 font-semibold hover:scale-110 transition-all  cursor-default'
                    >Reset password</Link>
                </div>
            </section>
        </main>
    );
}