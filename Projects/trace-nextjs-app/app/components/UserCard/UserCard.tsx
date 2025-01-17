import 'react'
import Image from 'next/image'
import './UserCard.css'

interface Props {
    id: number;
    name: string;
    username: string;
    email: string;
    city: string;
    company: string
}

const UserCard = (props: Props) => {
    function generate_random_number() {
        return Math.floor(Math.random() * 101);
    }

    const random_number = generate_random_number();

    return (
        <main className='border-2 mt-4'>
            <figure className='p-4 flex align-middle'>
                <Image
                    className='inline-block'
                    src={`https://randomuser.me/api/portraits/men/${props.id}.jpg`}
                    alt='User'
                    width={75}
                    height={100}
                />
                <h2 className='text-2xl mt-6 ml-4'>{props.name}</h2>
                <p className='text-xl mt-6 ml-4 text-zinc-500'>[{props.company}]</p>
            </figure>
            <div className=''>
                <p className='mt-1 ml-4 text-lg'>{props.username} | {props.email}</p>
                <p className='mt-1 ml-4 text-lg'>{props.city}</p>
                <div className='flex'>
                    <button className='view-user-btn'>View</button>
                    <button className='contact-user-btn'>Contact</button>
                    <button className='view-trace-btn'>Recent traces</button>
                    <label className='ml-20 mr-4 mt-10 w-36 font-bold'>Number of Traces:</label>
                    <progress className='progress w-48 mt-12 text-indigo-500 bg-slate-100' value={random_number} max='100'></progress>
                </div>
            </div>
        </main>
    )
}

export default UserCard