import 'react'
import './TraceAccordian.css'

const TraceAccordian = (props) => {
    return (
        <main className='cursor-default p-4 w-4/5 mx-auto trace-accordian text-slate-100 collapse collapse-arrow border-b-4 rounded-none mt-4 transition-all'>
            <input type='radio' name='my-accordion-2' defaultChecked />
            <div className='collapse-title text-xl font-bold'>{props.title}</div>
            <div className='collapse-content opacity-85'>
                <p>{props.description}</p>
                <button className='view-trace-btn'>View Trace</button>
            </div>
        </main>
    )
}

export default TraceAccordian