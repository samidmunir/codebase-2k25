import React from 'react'
import Link from 'next/link'

interface User {
    id: number
    name: string
    username: string
    email: string
}

const Users = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User = await response.json()
    console.log(users)

  return (
    <div className='p-4'>
        <h1 className='text-4xl'>Users</h1>
        <Link
            className='text-xl text-blue-700 font-semibold block'
            href='/'
        >
            Home
        </Link>
        <div className='p-4'>
        </div>
    </div>
  )
}

export default Users