import 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai'

const Navbar = () => {
    const links = [
        {label: 'Home', href: '/'},
        {label: 'Traces', href: '/traces'},
        {label: 'Users', href: '/users'},
    ]

    return (
        <nav className='p-4 flex'>
            <div className='p-4 flex gap-1 text-sky-500'>
                <AiFillBug className='text-4xl font-bold' />
                <h1 className='text-3xl font-bold'>Trace</h1>
            </div>
            <ul className='p-4 flex mt-1.5 gap-12 ml-4'>
                {
                    links.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            className='text-lg font-semibold'
                        >{link.label}</Link>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar