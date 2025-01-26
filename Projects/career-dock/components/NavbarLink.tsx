import Link from 'next/link'

interface Props {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const NavbarLink = (props: Props) => {
    return (
        <div className='flex align-middle font-semibold transition-all hover:text-neutral-100'>
            <Link href={props.href} className='mr-2 my-auto text-lg cursor-default'>{props.label}</Link>
            <span className='text-xl my-auto'>{props.icon}</span>
        </div>
    );
}

export default NavbarLink