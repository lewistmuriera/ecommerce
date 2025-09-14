'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <svg width="80" height="29" viewBox="0 0 80 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path fillRule="evenodd" clipRule="evenodd" d="M79.7143 0L21.418 25.1469C16.5644 27.2409 12.4814 28.2857 9.19105 28.2857C5.48886 28.2857 2.79193 26.9572 1.13569 24.3047C-1.01212 20.8822 -0.0732836 15.379 3.6112 9.56968C5.79885 6.17413 8.57993 3.05779 11.2901 0.0765583C10.6524 1.13035 5.02387 10.655 11.1794 15.1404C12.3973 16.041 14.1288 16.4824 16.2589 16.4824C17.9683 16.4824 19.9301 16.1986 22.0867 15.6267L79.7143 0Z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Featured</h3>
            <ul className="space-y-2">
              <li><Link href="/air-force-1" className="text-gray-300 hover:text-white">Air Force 1</Link></li>
              <li><Link href="/huarache" className="text-gray-300 hover:text-white">Huarache</Link></li>
              <li><Link href="/air-max-90" className="text-gray-300 hover:text-white">Air Max 90</Link></li>
              <li><Link href="/air-max-95" className="text-gray-300 hover:text-white">Air Max 95</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Shoes</h3>
            <ul className="space-y-2">
              <li><Link href="/shoes" className="text-gray-300 hover:text-white">All Shoes</Link></li>
              <li><Link href="/custom-shoes" className="text-gray-300 hover:text-white">Custom Shoes</Link></li>
              <li><Link href="/jordan-shoes" className="text-gray-300 hover:text-white">Jordan Shoes</Link></li>
              <li><Link href="/running-shoes" className="text-gray-300 hover:text-white">Running Shoes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Clothing</h3>
            <ul className="space-y-2">
              <li><Link href="/clothing" className="text-gray-300 hover:text-white">All Clothing</Link></li>
              <li><Link href="/modest-wear" className="text-gray-300 hover:text-white">Modest Wear</Link></li>
              <li><Link href="/hoodies-pullovers" className="text-gray-300 hover:text-white">Hoodies &amp; Pullovers</Link></li>
              <li><Link href="/shirts-tops" className="text-gray-300 hover:text-white">Shirts &amp; Tops</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Kids</h3>
            <ul className="space-y-2">
              <li><Link href="/infant-toddler-shoes" className="text-gray-300 hover:text-white">Infant &amp; Toddler Shoes</Link></li>
              <li><Link href="/kids-shoes" className="text-gray-300 hover:text-white">Kids Shoes</Link></li>
              <li><Link href="/kids-jordan-shoes" className="text-gray-300 hover:text-white">Kids Jordan Shoes</Link></li>
              <li><Link href="/kids-basketball-shoes" className="text-gray-300 hover:text-white">Kids Basketball Shoes</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-end mt-8 space-x-4">
          <Link href="#" className="text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
