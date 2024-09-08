import React from 'react';
import { Link } from 'react-router-dom';
import { subcategoryData } from '../../data/dummyData';

export default function FeatureCategory() {
  return (
    <div className='mt-10 w-full flex flex-col justify-center items-center gap-5'>
      <p className='font-bold text-[22px]'>Featured Categories</p>
      
      {/* Container for categories */}
      <div className='w-full flex flex-wrap justify-between p-2 md:p-[2%] gap-2'>
        {subcategoryData.map((data, index) => (
          <Link 
            key={index} 
            to={`/products/${data.subcategory}`} 
            className='flex flex-col items-center w-full sm:w-[300px] md:w-[400px] gap-3'
          >
            
            <div className='w-full h-[200px] sm:h-[250px] md:h-[300px]'>
              <img 
                src={data.thumbnail} 
                alt={data.subcategory} 
                className='w-full h-full object-cover' 
              />
            </div>
            {/* Subcategory Name */}
            <p className='text-center font-medium'>{data.subcategory}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
