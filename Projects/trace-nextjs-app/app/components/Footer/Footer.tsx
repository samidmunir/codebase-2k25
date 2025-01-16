import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-5 border-t-2'>
      <div className='flex justify-evenly'>
        <div className='p-4'>
          <h2 className='text-2xl font-bold'>Services</h2>
          <ul>
            <li>Branding</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Advertisement</li>
          </ul>
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-bold'>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Trace Kit</li>
          </ul>
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-bold'>Legal</h2>
          <ul>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer