'use client'
import Image from 'next/image'
import supabase from '@/app/client/supabase'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import './page.css'

type Product = {
    id: number;
    created_at: string;
    title: string;
    price: number;
    description: string;
    images: string[];
    creation_at: string;
    updated_at: string;
    category_name: string;
    category_image: string;
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const {data, error} = await supabase
                .from('products')
                .select('*')
                .order('id');
            
            if (error) {
                console.error('Error fetching products:', error.message);
            } else if (data) {
                console.log(data);
                setProducts(data);
            }
            setLoading(false);
        }
        fetchProducts();
    }, [])

    return (
        <main className='main p-4 bg-zinc-50 overflow-y-scroll'>
            <h1 className='text-3xl text-center my-4'>Products</h1>
            {loading && <p>Loading products...</p>}

            {!loading && products.length === 0 && (
                <p>No products found.</p>
            )}

            <div className=' w-4/5 mx-auto flex gap-8 flex-wrap justify-center'>
                {
                    products.map((product: Product) => (
                        <ProductCard key={product.id} title={product.title} images={product.images} price={product.price} description={product.description} categoryName={product.category_name} updatedAt={product.updated_at} />
                    ))
                }
            </div>
        </main>
    )
}

export default Products