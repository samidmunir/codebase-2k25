import React from 'react'
import Link from 'next/link'

const Traces = () => {
  return (
    <div className='p-4'>
        <h1 className='text-4xl'>Traces</h1>
        <Link
            className='text-xl text-blue-700 font-semibold block'
            href='/'
        >
            Home
        </Link>
    </div>
  )
}

export default Traces