import { AiOutlineRuby } from 'react-icons/ai'
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className='hero-section-header'>
                <h1 className='text-5xl text-center flex justify-center'>Maravex <AiOutlineRuby className='ml-4' /></h1>
                <p className='w-2/3 mx-auto mt-4 text-xl'>
                    At Maravex, we connect discerning shoppers with a carefully curated collection of luxurious, one-of-a-kind items. Our commitment to quality and exceptional craftsmanship ensures that every product meets the high standards of our global community.
                </p>
            </div>
            <div className='hero-section-cta w-2/3 mx-auto mt-4 flex gap-4 justify-center'>
                <button className='hero-section-btn text-lg font-semibold'>Shop Categories</button>
                <button className='hero-section-btn text-lg font-semibold'>Shop Products</button>
                <button className='hero-section-btn text-lg font-semibold'>View Cart</button>
            </div>
        </section>
    )
}

export default Hero