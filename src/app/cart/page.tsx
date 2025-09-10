'use client';

import { useStore } from '@/lib/store';
import Header from '@/components/Header';
import Image from 'next/image';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useStore();
  
  const total = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600">Add some products to get started!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Clear Cart
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b last:border-b-0">
              <div className="relative h-20 w-20 mr-4">
                <Image
                  src={item.image || '/placeholder-product.jpg'}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                  sizes="80px"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              
              <div className="ml-4 text-lg font-semibold text-gray-900">
                ${(parseFloat(item.price) * item.quantity).toFixed(2)}
              </div>
              
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total: ${total.toFixed(2)}</span>
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}