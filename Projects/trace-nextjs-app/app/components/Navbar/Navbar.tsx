'use client'
import 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillBug, AiFillHome, AiFillProject, AiFillContacts, AiFillQuestionCircle } from 'react-icons/ai'

const Navbar = () => {
    const currentPath = usePathname();

    const links = [
        {icon: <AiFillHome className='inline text-2xl mr-2 mb-1' />, label: 'Home', href: '/'},
        {icon: <AiFillProject className='inline text-2xl mr-2 mb-1' />, label: 'Traces', href: '/traces'},
        {icon: <AiFillContacts className='inline text-2xl mr-2 mb-1' />, label: 'Users', href: '/users'},
        {icon: <AiFillQuestionCircle className='inline text-2xl mr-2 mb-1' />, label: 'FAQs', href: '/faqs'},
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
                            className={
                                `${link.href === currentPath ? 'text-indigo-500': 'text-slate-500'} text-lg font-semibold hover:text-indigo-500 transition-all cursor-default`
                            }
                        >{link.icon}{link.label}</Link>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar