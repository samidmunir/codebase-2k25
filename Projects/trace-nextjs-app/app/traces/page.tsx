import React from 'react'
import './page.css'
import TraceAccordian from '../components/TraceAccordian/TraceAccordian'

interface Trace {
  title: string;
  description: string;
  author: string;
}

const Traces = () => {
  const traces = [
    {title: 'Memory leak in cart before checkout', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante torquent aptent nam; magna facilisis nulla. Ad euismod facilisi ac laoreet nostra ut consequat habitant. Eu nam egestas netus nulla sollicitudin id aliquam hendrerit. Malesuada fames dolor integer class fermentum fames. Adipiscing curabitur ad cursus nascetur mattis malesuada.', author: 'User 1'},
    {title: 'CTA button not working', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante torquent aptent nam; magna facilisis nulla. Ad euismod facilisi ac laoreet nostra ut consequat habitant. Eu nam egestas netus nulla sollicitudin id aliquam hendrerit. Malesuada fames dolor integer class fermentum fames. Adipiscing curabitur ad cursus nascetur mattis malesuada.', author: 'User 2'},
    {title: 'Bug found in Hero component', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante torquent aptent nam; magna facilisis nulla. Ad euismod facilisi ac laoreet nostra ut consequat habitant. Eu nam egestas netus nulla sollicitudin id aliquam hendrerit. Malesuada fames dolor integer class fermentum fames. Adipiscing curabitur ad cursus nascetur mattis malesuada.', author: 'User 3'},
    {title: 'Footer section links are ineffective', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante torquent aptent nam; magna facilisis nulla. Ad euismod facilisi ac laoreet nostra ut consequat habitant. Eu nam egestas netus nulla sollicitudin id aliquam hendrerit. Malesuada fames dolor integer class fermentum fames. Adipiscing curabitur ad cursus nascetur mattis malesuada.', author: 'User 4'},
    {title: 'FAQs page not available', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante torquent aptent nam; magna facilisis nulla. Ad euismod facilisi ac laoreet nostra ut consequat habitant. Eu nam egestas netus nulla sollicitudin id aliquam hendrerit. Malesuada fames dolor integer class fermentum fames. Adipiscing curabitur ad cursus nascetur mattis malesuada.', author: 'User 5'},
    {title: 'Users fetched but not rendered', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante torquent aptent nam; magna facilisis nulla. Ad euismod facilisi ac laoreet nostra ut consequat habitant. Eu nam egestas netus nulla sollicitudin id aliquam hendrerit. Malesuada fames dolor integer class fermentum fames. Adipiscing curabitur ad cursus nascetur mattis malesuada.', author: 'User 6'},
    {title: 'Need functionality to post new Trace', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante torquent aptent nam; magna facilisis nulla. Ad euismod facilisi ac laoreet nostra ut consequat habitant. Eu nam egestas netus nulla sollicitudin id aliquam hendrerit. Malesuada fames dolor integer class fermentum fames. Adipiscing curabitur ad cursus nascetur mattis malesuada.', author: 'User 7'},
    {title: 'Need functionality to create new User', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante torquent aptent nam; magna facilisis nulla. Ad euismod facilisi ac laoreet nostra ut consequat habitant. Eu nam egestas netus nulla sollicitudin id aliquam hendrerit. Malesuada fames dolor integer class fermentum fames. Adipiscing curabitur ad cursus nascetur mattis malesuada.', author: 'User 8'},
    {title: 'Need functionality to delete Trace', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante torquent aptent nam; magna facilisis nulla. Ad euismod facilisi ac laoreet nostra ut consequat habitant. Eu nam egestas netus nulla sollicitudin id aliquam hendrerit. Malesuada fames dolor integer class fermentum fames. Adipiscing curabitur ad cursus nascetur mattis malesuada.', author: 'User 9'},
  ]

  return (
    <main className='bg-black text-white overflow-scroll'>
      <section className='traces-section p-4'>
        <h1 className='text-4xl text-center font-bold mt-4'>Traces Log</h1>
        <div className='traces-flex'>
          {
            traces.map((trace: Trace) => (
              <TraceAccordian key={trace.title} title={trace.title} description={trace.description} author={trace.author} />
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Traces