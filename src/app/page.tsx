import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';

export default async function Home() {
  let allProducts = [];
  
  try {
    allProducts = await db.select().from(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Nike Store
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest Nike products featuring cutting-edge technology and iconic designs.
          </p>
        </div>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Products
          </h2>
          <ProductGrid products={allProducts} />
        </section>
      </main>
    </div>
  );
}
