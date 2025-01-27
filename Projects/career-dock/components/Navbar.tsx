import Link from 'next/link'
import { BsFillGrid1X2Fill, BsFillHouseFill, BsDisplayFill, BsFillQuestionSquareFill, BsPersonFill } from 'react-icons/bs'
import NavbarLink from './NavbarLink'

interface NavLink {
    id: number;
    icon: React.ReactNode;
    href: string;
    label: string;
}

const Navbar = async () => {
    const navLinks: NavLink[] = [
        {
            id: 1,
            icon: <BsFillHouseFill />,
            href: '/',
            label: 'Home'
        },
        {
            id: 2,
            icon: <BsDisplayFill />,
            href: '/featured',
            label: 'Featured',
        },
        {
            id: 3,
            icon: <BsFillQuestionSquareFill />,
            href: '/about',
            label: 'About',
        },
        {
            id: 4,
            icon: <BsPersonFill />,
            href: '/login',
            label: 'Login',
        },
    ];

    return (
        <nav className='bg-zinc-900 flex justify-between px-16 py-4 align-middle content-center shadow-xl'>
            <div className='text-stone-500 flex my-auto transition-all hover:text-stone-100'>
                <BsFillGrid1X2Fill className='text-4xl' />
                <Link href='/' className='text-3xl ml-4 font-bold cursor-default'>Career Dock</Link>
            </div>
            <div className='text-stone-500 text-sm my-auto cursor-none'>
                <p className='cursor-none'>example@email.com</p>
            </div>
            <div className='text-xl flex gap-16 my-auto'>
                {navLinks.map((navLink) => <NavbarLink key={navLink.id} icon={navLink.icon} href={navLink.href} label={navLink.label} />)}
            </div>
        </nav>
    );
}

export default Navbar