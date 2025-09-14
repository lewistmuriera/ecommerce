'use client';

import { useStore } from '@/lib/store';
import Link from 'next/link';

export default function Header() {
  const cart = useStore((state) => state.cart);
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <svg width="80" height="29" viewBox="0 0 80 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
              <path fillRule="evenodd" clipRule="evenodd" d="M79.7143 0L21.418 25.1469C16.5644 27.2409 12.4814 28.2857 9.19105 28.2857C5.48886 28.2857 2.79193 26.9572 1.13569 24.3047C-1.01212 20.8822 -0.0732836 15.379 3.6112 9.56968C5.79885 6.17413 8.57993 3.05779 11.2901 0.0765583C10.6524 1.13035 5.02387 10.655 11.1794 15.1404C12.3973 16.041 14.1288 16.4824 16.2589 16.4824C17.9683 16.4824 19.9301 16.1986 22.0867 15.6267L79.7143 0Z" fill="currentColor"/>
            </svg>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link href="/men" className="text-gray-700 hover:text-gray-900">
              Men
            </Link>
            <Link href="/women" className="text-gray-700 hover:text-gray-900">
              Women
            </Link>
            <Link href="/kids" className="text-gray-700 hover:text-gray-900">
              Kids
            </Link>
            <Link href="/collections" className="text-gray-700 hover:text-gray-900">
              Collections
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <div className="flex items-center space-x-6">
              <button className="text-gray-700 hover:text-gray-900">
                Search
              </button>
              <Link href="/cart" className="text-gray-700 hover:text-gray-900 flex items-center relative">
                My Cart ({cartItemsCount})
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
