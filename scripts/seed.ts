import { db } from '../src/lib/db';
import { products } from '../src/lib/db/schema';

const nikeProducts = [
  {
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    price: '119.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-90-mens-shoes-6n7J06.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 50,
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best.',
    price: '109.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 75,
  },
  {
    name: 'Nike Dri-FIT T-Shirt',
    description: 'Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.',
    price: '29.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/dri-fit-mens-fitness-t-shirt-HPFTlH.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 100,
  },
  {
    name: 'Nike React Infinity Run',
    description: 'The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run.',
    price: '159.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8439f823-86cf-4086-81d2-4f9ff9a66866/react-infinity-run-flyknit-3-mens-road-running-shoes-QBvZvM.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 30,
  },
  {
    name: 'Nike Sportswear Hoodie',
    description: 'The Nike Sportswear Club Fleece Hoodie is made with soft fleece fabric for all-day comfort.',
    price: '59.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/178b2a46-3ee4-492b-882e-f71efdd53a36/sportswear-club-fleece-mens-pullover-hoodie-LcSw5q.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 60,
  },
  {
    name: 'Nike Air Jordan 1',
    description: 'The Air Jordan 1 Retro High OG brings back the classic silhouette with premium materials and iconic colorways.',
    price: '169.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6da41fa-1be4-4ce5-9be8-0f7b7d0b7b1a/air-jordan-1-retro-high-og-mens-shoes-Pz8n5Q.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 25,
  },
];

async function seed() {
  try {
    console.log('Seeding database...');
    
    // Insert Nike products
    await db.insert(products).values(nikeProducts);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();