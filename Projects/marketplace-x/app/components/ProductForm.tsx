'use client'
import { useState } from 'react'

type Props = {
    onSubmit: (name: string, price: number) => Promise<void>;
    product: {
        id: number;
        name: string;
        price: number;
    }
}

const ProductForm = ({onSubmit, product}: Props) => {
    const [name, setName] = useState(product?.name ?? '');
    const [price, setPrice] = useState(product?.price ?? 0.00);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(name, price);
        setName('');
        setPrice(0.00);
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-2'>
            <div>
                <label>Product Name</label>
                <input 
                    className='border p-1 ml-2'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price</label>
                <input 
                    className='border p-1 ml-2'
                    type='number'
                    step='0.01'
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                />
            </div>
            <button type='submit' className='bg-blue-500 text-white p-1'>{product ? 'Update' : 'Add'} Product</button>
        </form>
    )
}

export default ProductForm