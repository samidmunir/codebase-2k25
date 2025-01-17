import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-4 fixed w-full'>
      <div className='flex justify-evenly'>
        <div className='p-4'>
          <h2 className='text-2xl font-bold'>Services</h2>
          <ul className='cursor-default'>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Branding</li>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Design</li>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Marketing</li>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Advertisement</li>
          </ul>
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-bold'>Company</h2>
          <ul className='cursor-default'>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>About Us</li>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Contact</li>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Jobs</li>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Trace Kit</li>
          </ul>
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-bold'>Legal</h2>
          <ul className='cursor-default'>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Terms of use</li>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Privacy policy</li>
            <li className='text-lg text-slate-500 hover:text-indigo-500 transition-all mt-1'>Cookie policy</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer