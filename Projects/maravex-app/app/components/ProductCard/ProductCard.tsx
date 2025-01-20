import Image from 'next/image';
import './ProductCard.css'

type Props = {
    created_at: string;
    title: string;
    price: number;
    description: string;
    images: string[];
    creation_at: string;
    updatedAt: string;
    categoryName: string;
    category_image: string;
}

const ProductCard = (props: Props) => {
    return (
        <section className='product-card bg-slate-950'>
            <div className='product-card-image-div'>
                <Image 
                    alt={props.title} 
                    src={props.images[0]}
                    width={250}
                    height={150}
                />
            </div>
            <div className='product-card-info-div p-4'>
                <h1 className='text-zinc-50 text-xl'>{props.title.slice(0, 40)}</h1>
                <h2 className='text-zinc-50 text-lg'>${props.price}</h2>
                <p className='text-zinc-50 text-sm opacity-75'>{props.description.slice(0, 50)}...</p>
            </div>
            <div>
                <p className='text-sm text-slate-950 p-1 bg-zinc-50 text-center'>{props.categoryName}</p>
            </div>
            <div>
                <p className='text-sm text-zinc-50 p-1 text-center'>Last Updated: {props.updatedAt.slice(11, 16)}</p>
            </div>
        </section>
    )
}

export default ProductCard