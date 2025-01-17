import React from 'react'
import './page.css'
import UserCard from '../components/UserCard/UserCard'

interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        city: string
    }
    company: {
        name: string
    }
}

const Users = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: [User] = await response.json()
    // console.log(users)

  return (
    <main className='bg-black text-white overflow-scroll'>
        <section className='users-section p-4 w-3/5 mx-auto'>
            <h1 className='text-4xl text-center font-bold mt-4'>Users</h1>
            <div className='users-flex'>
                {
                    users.map((user: User) => (
                        <UserCard key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} city={user.address.city} company={user.company.name} />
                    ))
                }
            </div>
        </section>
    </main>
  )
}

export default Users