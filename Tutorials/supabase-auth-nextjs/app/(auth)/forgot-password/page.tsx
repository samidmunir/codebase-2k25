import { SiNextdotjs } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import ForgotPassword from '@/components/ForgotPassword'

export default function ForgotPasswordPage() {
    return (
        <main className='h-[600px] bg-zinc-800 p-4'>
            <div className='text-zinc-100 flex justify-center font-bold mt-4'>
                <SiNextdotjs className='text-4xl' />
                <h1 className='text-3xl ml-4'>Supabase Authentication NextJS</h1>
            </div>
            <div className='text-zinc-100 flex justify-center align-middle content-center mt-4'>
                <h2 className='text-2xl font-semibold'>Please enter your email</h2>
                <MdEmail className='text-3xl ml-4' />
            </div>
            <section className='mt-4'>
                <ForgotPassword />
            </section>
        </main>
    )
}