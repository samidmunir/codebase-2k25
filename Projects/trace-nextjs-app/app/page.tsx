import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='p-4'>
      <h1 className='text-4xl'>Home</h1>
      <Link
        className='text-xl text-blue-700 font-semibold block'
        href='/dashboard'
      >
        Dashboard
      </Link>
      <Link
        className='text-xl text-blue-700 font-semibold block'
        href='/users'
      >
        Users
      </Link>
      <Link
        className='text-xl text-blue-700 font-semibold block'
        href='/traces'
      >
        Traces
      </Link>
    </div>
  )
}

export default Home