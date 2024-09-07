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
    <div  className='flex flex-col gap-2'>
      <div className='mt-[11%] w-full flex md:flex-row flex-col justify-start md:p-[2%] p-2 items-center gap-4'>
      {data.map((product, index) => (
        <Link 
          className='md:w-[400px] md:h-[400px] w-[200px] h-[200px]' 
          key={index} 
          to={`/product/${product.title}/${product._id}`}>
          <img 
            className='w-full h-full object-cover' 
            src={product.images[0]} 
            alt={product.title} 
          />
        </Link>
      ))}
      </div>

      <Footer/>
    </div>
  );
}
