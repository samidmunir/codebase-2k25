import LoginForm from '@/components/LoginForm'
import Link from 'next/link'

const LoginPage = () => {
    return (
        <main className='bg-stone-500 h-[550px] px-16 py-8 w-full'>
            <section className=''>
                <h1 className='text-5xl font-semibold text-stone-100'>Welcome to Career Dock</h1>
                <h2 className='text-3xl text-stone-100 opacity-75'>Please sign in below to get started</h2>
            </section>
            <section className=''>
                <LoginForm />
            </section>
            <section className='w-[400px] mx-auto bg-zinc-900 pb-8 px-8'>
                <div className='text-md flex gap-4 justify-between w-[310px] mx-auto'>
                    <p className='text-stone-100 opacity-50 cursor-none'>{`Don't have an account?`}</p>
                    <Link 
                        href='/register'
                        className='text-stone-400 font-bold hover:scale-110 transition-all cursor-default'
                    >Sign up</Link>
                </div>
                <div className='text-md flex gap-4 justify-between w-[310px] mx-auto'>
                    <p className='text-stone-100 opacity-50 cursor-none'>Forgot your password?</p>
                    <Link 
                        href='/forgot-password'
                        className='text-stone-400 font-bold hover:scale-110 transition-all  cursor-default'
                    >Reset password</Link>
                </div>
            </section>
        </main>
    );
}

export default LoginPage