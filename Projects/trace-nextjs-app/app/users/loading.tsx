import 'react'
import './loading.css'

const Loading = () => {
    return (
        <main className='loading-main bg-black text-white overflow-scroll'>
            <section>
                <h1 className='text-6xl text-center font-bold mt-24'>Loading<span className='loading loading-dots loading-lg ml-4'></span></h1>
            </section>
        </main>
    )
}

export default Loading