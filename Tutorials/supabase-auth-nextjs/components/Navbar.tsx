import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { SiNextdotjs } from 'react-icons/si'
import Logout from './Logout'

const Navbar = async () => {
    const supabase = await createClient();
    const {data: {user}} = await supabase
        .auth
        .getUser();

    return (
        <nav className='bg-zinc-900 text-zinc-100 py-4 px-16 flex align-middle justify-between'>
            <div className='flex align-middle content-center hover:text-sky-500 transition-all cursor-default'>
                <SiNextdotjs className='text-3xl' />
                <p className='text-2xl font-bold ml-4'>Supabase-Auth-NextJS</p>
            </div>
            <div className='flex gap-8 text-lg font-semibold'>
                <Link href='/private' className='border-b-2 border-zinc-900 hover:border-zinc-100 hover:text-sky-500 transition-all cursor-default'>Private</Link>
                {!user ? (
                    <Link href='/login' className='border-b-2 border-zinc-900 hover:border-zinc-100 hover:text-sky-500 transition-all cursor-default'>Login</Link>
                ) : (
                    <>
                        <div>{user?.email}</div>
                        <Logout />
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar