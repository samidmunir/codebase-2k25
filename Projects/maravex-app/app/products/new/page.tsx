'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import './page.css'

const NewProductPage = () => {
    const router = useRouter();
    const [createdAt, setCreatedAt] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState<number | ''>('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState('');
    const [creationAt, setCreationAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!title || !price || price <= 0) {
            setError('Please provide valid title and price.')
            return;
        }
        setCreatedAt(new Date().toUTCString())
        setCreationAt(new Date().toUTCString())
        setUpdatedAt(new Date().toUTCString())

        try {
            const response = await fetch('/products', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({createdAt, title, price, description, images, creationAt, updatedAt, categoryName, categoryImage})
            })

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data?.error || 'Failed to create product');
            }
            console.log(response);
            router.push('/products');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        }
    }
    
    return (
        <main className='main bg-zinc-50 p-4 overflow-scroll'>
            <h1 className='text-3xl text-center'>Add New Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input 
                        className=''
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Product title'
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input 
                        className=''
                        type='number'
                        step='0.01'
                        value={price}
                        onChange={(e) => setPrice(e.target.value ? parseFloat(e.target.value): '')}
                        placeholder='0.00'
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input 
                        className=''
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Product description...'
                        maxLength={2500}
                    />
                </div>
                <div>
                    <label>Product Images</label>
                    <input 
                        className=''
                        type='text'
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                        placeholder='Product images'
                    />
                </div>
                <div>
                    <label>Category Name</label>
                    <input 
                        className=''
                        type='text'
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder='Product category name'
                    />
                </div>
                <div>
                    <label>Product Category Image</label>
                    <input 
                        className=''
                        type='text'
                        value={categoryImage}
                        onChange={(e) => setCategoryImage(e.target.value)}
                        placeholder='Product category image'
                    />
                </div>
                {error && <p>{error}</p>}
                <button type='submit' className='bg-sky-500 p-1 rounded-md'>Create Product</button>
            </form>
        </main>
    )
}

export default NewProductPage