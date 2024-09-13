import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { subcategoryData } from '../../data/dummyData'; 
import { useSwipeable } from 'react-swipeable';
import { useSelector } from 'react-redux';

export default function FeatureCategory() {
  const [data, setData] = useState([]); 
  const params = useParams();
  const id = params.id;

  const {categoriesData} = useSelector((state) => state.category)

  const fetchData = async () => {
    try {
      // Uncomment and complete the fetch request if needed
      // const response = await fetch(`/api/subcategory/${id}`);
      // const result = await response.json();
      setData(subcategoryData); // Using dummyN data for now
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); 

  return (
    <div className='mt-10 w-full flex flex-col justify-center items-center gap-5'>
      <p className='font-bold text-[22px]'>Featured Categories</p>
      
      {/* Container for categories */}
      <div className='w-full flex flex-wrap justify-between p-2 md:p-[2%] gap-2'>
        {data.map((item, index) => (  // Changed variable name from 'data' to 'item' for clarity
          <Link 
            key={index} 
            to={`/product/${item.subcategory}/${item._id}`} 
            className='flex flex-col items-center w-full sm:w-[300px] md:w-[400px] gap-3'
          >
            <div className='w-full h-[200px] sm:h-[250px] md:h-[300px]'>
              <img 
                src={item.thumbnail} 
                alt={item.subcategory} 
                className='w-full h-full object-cover' 
              />
            </div>
            {/* Subcategory Name */}
            <p className='text-center font-medium'>{item.subcategory}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
