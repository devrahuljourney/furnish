import React from 'react';
import { Link } from 'react-router-dom';
import { Site_name } from '../../data/dummyData';

export default function Collection({ data }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {data.map((product, index) => (
          <Link 
            className="flex flex-col items-center w-full h-auto p-3" 
            key={index} 
            to={`/product/${product.name}/${product._id}`}>
            <img 
              className="w-full h-48 object-cover rounded-lg shadow-lg" 
              src={product.images[0]?.url} 
              alt={product.name} 
            />
            <p className="mt-2 text-center text-sm">{Site_name}</p>
            <p className="text-center text-lg font-bold">{product.name}</p>
            <p className="text-center font-bold text-md text-gray-700">From {product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
