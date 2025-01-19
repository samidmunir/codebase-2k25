'use client'

type Product = {
    id: number;
    name: string;
    price: number;
}

type Props = {
    products: Product[];
    onDelete: (id: number) => void;
    onEdit: (product: Product) => void;
}

const ProductList = ({products, onDelete, onEdit}: Props) => {
    return (
        <ul className='space-y-2 mt-4'>
            {products.map((product) => (
                <li
                    key={product.id}
                    className='flex items-center justify-between'
                >
                    <span>
                        <strong>{product.name}</strong> - ${product.price}
                    </span>
                    <div>
                        <button
                            onClick={() => onEdit(product)}
                            className='mr-4 text-blue-600'
                        >Edit</button>
                        <button
                            onClick={() => onDelete(product.id)}
                            className='text-red-600'
                        >Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ProductList