'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineRuby, AiFillHome, AiFillProduct, AiFillContainer, AiFillShopping } from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
    const links = [
        {id: 1, icon: <AiFillHome />, label: 'Home', href: '/'},
        {id: 2, icon: <AiFillProduct />, label: 'Products', href: '/products'},
        {id: 3, icon: <AiFillContainer />, label: 'Categories', href: '/categories'},
        {id: 4, icon: <AiFillShopping />, label: 'Cart', href: '/cart'},
    ]
    const currentPath = usePathname();

    return (
        <nav className='main-navbar w-full bg-slate-950 flex content-center justify-between'>
            <div className='main-navbar-title text-zinc-100 text-4xl font-bold p-4 flex my-auto ml-4'>
                <AiOutlineRuby className='mr-4' />
                <h1>Maravex</h1>
            </div>
            <div className='main-navbar-nav p-4 flex gap-12 mr-4 my-auto'>
                {
                    links.map((link) => (
                        <Link 
                            key={link.id} 
                            href={link.href}
                            className={`${currentPath === link.href ? 'main-navbar-link-active' : 'main-navbar-link'}`}
                        >{link.icon}{link.label}</Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar