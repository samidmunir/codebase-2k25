const Footer = () => {
    return (
        <footer className='w-full bg-zinc-900 text-zinc-100 border-t-4 border-zinc-100 p-4 flex justify-center gap-64 h-[186px]'>
            <div>
                <h2 className='text-2xl'>Services</h2>
                <p className='text-sm mt-2 text-opacity-75'>Branding</p>
                <p className='text-sm mt-2 text-opacity-75'>Design</p>
                <p className='text-sm mt-2 text-opacity-75'>Marketing</p>
                <p className='text-sm mt-2 text-opacity-75'>Advertisement</p>
            </div>
            <div>
                <h2 className='text-2xl'>Company</h2>
                <p className='text-sm mt-2 text-opacity-75'>About us</p>
                <p className='text-sm mt-2 text-opacity-75'>Contact</p>
                <p className='text-sm mt-2 text-opacity-75'>Jobs</p>
                <p className='text-sm mt-2 text-opacity-75'>Press kit</p>
            </div>
            <div>
                <h2 className='text-2xl'>Legal</h2>
                <p className='text-sm mt-2 text-opacity-75'>Terms of use</p>
                <p className='text-sm mt-2 text-opacity-75'>Privacy policy</p>
                <p className='text-sm mt-2 text-opacity-75'>Cookie policy</p>
            </div>
        </footer>
    )
}

export default Footer