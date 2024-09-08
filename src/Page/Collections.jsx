import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { searchByCategory } from '../data/dummyData';
import Footer from './Footer';

export default function Collections() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch or filter logic could be added here if needed
    setData(searchByCategory.products);  // Set the products array from searchByCategory
  }, []);

  return (
    <div className='flex w-full mt-[35%] md:mt-[11%] flex-col gap-4'>
      <div className=' w-full flex md:flex-row flex-col item-center  justify-center  gap-4 p-4'>
        {data.map((product, index) => (
          <Link 
            className='w-[100%] md:w-[30%] lg:w-[23%] h-auto' 
            key={index} 
            to={`/product/${product.title}/${product._id}`}>
            <img 
              className='w-full h-full object-cover rounded-lg shadow-lg' 
              src={product.images[0]} 
              alt={product.title} 
            />
          </Link>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}
