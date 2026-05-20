import React from 'react';

export default function Product({ title, price, image, rating }) {
  return (
    <div className="bg-white p-6 m-3 flex flex-col items-center justify-between shadow-md rounded-md hover:shadow-xl transition-shadow w-full max-w-sm z-10">
      <div className="w-full mb-4">
        <h3 className="text-lg font-medium leading-tight line-clamp-2">{title}</h3>
        <p className="mt-2 text-xl font-bold">₹{price.toLocaleString('en-IN')}</p>
        
        <div className="flex text-yellow-400 mt-1">
          {Array(rating).fill().map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>

      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-contain mb-6" 
      />

      <button className="bg-yellow-400 w-full py-2 rounded-md font-medium hover:bg-yellow-500 active:bg-yellow-600 transition-colors">
        Add to Basket
      </button>
    </div>
  );
}