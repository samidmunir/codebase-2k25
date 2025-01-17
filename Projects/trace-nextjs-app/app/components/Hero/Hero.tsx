import 'react'
import Link from 'next/link'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-section p-4'>
      <h1 className='text-4xl text-center font-bold mt-4'>Trace Your Issues, Own Your Solutions</h1>
      <p className='text-2xl text-center mt-4'>
        Centralize every incoming request in one streamlined hub. Empower your team to spot, manage, and fix issues faster.
      </p>
      <button className='get-started-btn'><Link href='/traces'>Get Started</Link></button>
      <div className='ml-28'>
        <h2 className='text-3xl'>Why Trace?</h2>
        <p className='text-2xl mt-4'>
          Trace is designed to help teams of all sizes track and resolve system or software issues with confidence. Our intuitive dashboard provides real-time updates, so you will never miss a thing.
        </p>
      </div>
    </section>
  )
}

export default Hero