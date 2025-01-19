'use client'

import { useEffect, useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

type Product = {
  id: number;
  name: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const handleCreate = async (name: string, price: number) => {
    await fetch('/api/products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, price}),
    });
    await fetchProducts();
  }

  const handleUpdate = async (name: string, price: number) => {
    if (!editingProduct) return;

    await fetch(`/api/products/${editingProduct.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, price}),
    });

    setEditingProduct(null);
    await fetchProducts();
  }

  const handleDelete = async (id: number) => {
    await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
    await fetchProducts();
  }

  const onEditClick = (product: Product) => {
    setEditingProduct(product);
  }

  return (
    <main className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Marketplace-X</h1>
      {editingProduct ? (
        <>
          <h2 className='text-xl'>Edit Product</h2>
          <ProductForm product={editingProduct} onSubmit={handleUpdate} />
        </>
      ) : (
        <>
          <h2 className='text-xl'>Add New Product</h2>
          <ProductForm onSubmit={handleCreate} />
        </>
      )}
      <h2 className='text-xl mt-8'>Product List</h2>
      <ProductList products={products} onDelete={handleDelete} onEdit={onEditClick} />
    </main>
  )
}