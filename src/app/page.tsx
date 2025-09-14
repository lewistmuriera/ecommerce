import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';

const sampleProducts = [
  {
    id: '1',
    brand: 'Nike',
    name: 'Nike Air Force 1 Mid \'07',
    description: 'Men\'s Shoes',
    price: '115',
    stock: 6,
    image: '/shoes/shoe-1.jpg',
    category: 'Men\'s Shoes',
    createdAt: new Date(),
    updatedAt: new Date(),
    badge: 'Best Seller'
  },
  {
    id: '2',
    brand: 'Nike',
    name: 'Nike Court Vision Low Next Nature',
    description: 'Men\'s Shoes',
    price: '65',
    stock: 4,
    image: '/shoes/shoe-2.jpg',
    category: 'Men\'s Shoes',
    createdAt: new Date(),
    updatedAt: new Date(),
    badge: 'Extra 20% off'
  },
  {
    id: '3',
    brand: 'Nike',
    name: 'Nike Dunk Low Retro',
    description: 'Men\'s Shoes',
    price: '110',
    stock: 6,
    image: '/shoes/shoe-3.jpg',
    category: 'Men\'s Shoes',
    createdAt: new Date(),
    updatedAt: new Date(),
    badge: 'Extra 10% off'
  }
];

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-heading-1 font-jost mb-4">Best of Air Max</h1>
                </div>
                <ProductGrid products={sampleProducts} />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
