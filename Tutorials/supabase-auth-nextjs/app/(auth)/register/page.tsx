import SignupForm from '@/components/SignupForm'
import { SiNextdotjs } from 'react-icons/si'
import { FaSignInAlt } from 'react-icons/fa'

export default function RegisterPage() {
    return (
        <main className='h-[600px] bg-zinc-800 p-4'>
            <div className='text-zinc-100 flex justify-center font-bold mt-4'>
                <SiNextdotjs className='text-4xl' />
                <h1 className='text-3xl ml-4'>Supabase Authentication NextJS</h1>
            </div>
            <div className='text-zinc-100 flex justify-center align-middle content-center mt-4'>
                <h2 className='text-2xl font-semibold'>Please sign up below</h2>
                <FaSignInAlt className='text-3xl ml-4' />
            </div>
            <section className='mt-4'>
                <SignupForm />
            </section>
        </main>
    );
}