import React from 'react';
import Product from '../components/Product';
import { products } from '../utils/data';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 mt-8 pb-12">
      {/* Optional: Add a hero banner image here later */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map((item) => (
          <Product 
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </main>
  );
}