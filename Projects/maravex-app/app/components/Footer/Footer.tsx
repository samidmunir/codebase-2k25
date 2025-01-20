import { AiOutlineRuby } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='main-footer w-full bg-slate-950 text-zinc-50 p-4 flex justify-center gap-8'>
            <div className='main-footer-col p-4'>
                <h1 className='ml-4 text-2xl flex align-middle font-bold'><AiOutlineRuby className='mr-2' />Maravex</h1>
                <p className='ml-4 text-sm opacity-75'>Maravex Industries Ltd.</p>
                <p className='ml-4 text-sm opacity-75'>Providing premium apparel since 1992.</p>
            </div>
            <div className='main-footer-col p-4'>
                <h2 className='ml-4 text-xl font-semibold'>Services</h2>
                <p className='ml-4 text-sm'>Branding</p>
                <p className='ml-4 text-sm'>Design</p>
                <p className='ml-4 text-sm'>Marketing</p>
                <p className='ml-4 text-sm'>Advertisement</p>
            </div>
            <div className='main-footer-col p-4'>
                <h2 className='ml-4 text-xl font-semibold'>Company</h2>
                <p className='ml-4 text-sm'>About us</p>
                <p className='ml-4 text-sm'>Contact</p>
                <p className='ml-4 text-sm'>Jobs</p>
                <p className='ml-4 text-sm'>Product kit</p>
            </div>
            <div className='main-footer-col p-4'>
                <h2 className='ml-4 text-xl font-semibold'>Legal</h2>
                <p className='ml-4 text-sm'>Terms of use</p>
                <p className='ml-4 text-sm'>Privacy policy</p>
                <p className='ml-4 text-sm'>Cookie policy</p>
            </div>
        </footer>
    )
}

export default Footer