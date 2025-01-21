'use client'
import { useEffect, useState } from 'react'
import Head from 'next/head'

type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    created_at: string;
}

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [editProductId, setEditProductId] = useState<string | null>(null);
    const [editName, setEditName] = useState('');
    const [editPrice, setEditPrice] = useState<number | ''>('');
    const [editImage, setEditImage] = useState('');

    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/products');
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Error fetching products');
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const createProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !price || !image) return;

        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, price, image}),
            })
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Error creating product');

            setName('');
            setPrice('');
            setImage('');
            fetchProducts();
        } catch (error) {
            console.error(error);
        }
    }

    const startEditing = (product: Product) => {
        setEditProductId(product.id);
        setEditName(product.name);
        setEditPrice(product.price);
        setEditImage(product.image);
    }

    const updateProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editProductId || !editName || !editPrice || !editImage) return;

        try {
            const res = await fetch('/api/products', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: editProductId,
                    name: editName,
                    price: editPrice,
                    image: editImage,
                }),
            })
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Error updating product');

            setEditProductId(null);
            setEditName('');
            setEditPrice('');
            setEditImage('');
            fetchProducts();
        } catch (error) {
            console.error(error);
        }
    }

    const deleteProduct = async (id: string) => {
        try {
            const res = await fetch('/api/products', {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id}),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Error deleting product');
            fetchProducts();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{margin: '1rem'}}>
            <Head>
                <title>Supabase CRUD with Next.js</title>
            </Head>
            <h1>Products CRUD</h1>
            <form onSubmit={createProduct}>
                <h2>Create New Product</h2>
                <div>
                    <label className='font-semibold'>Product name</label>
                    <input
                        type='text'
                        placeholder='Product name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='ml-5 mt-4 border-2 border-slate-950'
                    />
                </div>
                <div>
                    <label className='font-semibold'>Product price</label>
                    <input
                        type='number'
                        placeholder='0.00'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='ml-6 mt-4 border-2 border-slate-950'
                    />
                </div>
                <div>
                    <label className='font-semibold'>Product image</label>
                    <input
                        type='text'
                        placeholder='Product image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className='ml-4 mt-4 border-2 border-slate-950'
                    />
                </div>
                <button 
                    type='submit'
                    className='border-2 border-slate-950 p-2 ml-36 mt-4 transition-all hover:bg-slate-300'
                >Create</button>
            </form>
        </div>
    )
}