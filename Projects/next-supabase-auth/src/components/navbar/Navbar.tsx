import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='w-full bg-zinc-900 text-zinc-100 border-b-4 border-zinc-100 p-4 flex justify-between'>
            <div>
                <h1 className='text-2xl font-bold'>Next-Supabase Authentication</h1>
            </div>
            <div className='flex gap-4 my-auto'>
                <Link href='/' className='font-semibold'>Home</Link>
                <Link href='/' className='font-semibold'>Account</Link>
            </div>
        </nav>
    )
}

export default Navbar