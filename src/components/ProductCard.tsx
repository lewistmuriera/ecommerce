'use client';

import { Product } from '@/lib/db/schema';
import { useStore } from '@/lib/store';
import Image from 'next/image';

interface ProductCardProps {
  product: Product & { badge?: string };
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative">
      {product.badge && (
        <div className={`absolute top-4 left-4 px-3 py-1 text-sm font-medium rounded z-10 ${
          product.badge === 'Best Seller' ? 'bg-red-500 text-white' :
          product.badge.includes('Extra') ? 'bg-green-600 text-white' :
          'bg-gray-800 text-white'
        }`}>
          {product.badge}
        </div>
      )}
      <div className="relative h-64 w-full bg-gray-50">
        <Image
          src={product.image || '/placeholder-product.jpg'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">
            {product.stock} Colour
          </span>
        </div>
        <button
          onClick={() => addToCart(product)}
          disabled={!product.stock || product.stock === 0}
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {product.stock && product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
