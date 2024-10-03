import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchtopSubcategories } from '../../services/operations/subCategoryAPI';

export default function FeatureCategory() {
  const [data, setData] = useState([]); 
  const params = useParams();
  const id = params.id;

  const { categoriesData } = useSelector((state) => state.category);

  const fetchData = async () => {
    try {
      const response = await fetchtopSubcategories();
      setData(response || []);  // Fallback to empty array if response is null
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);  

  return (
    <div className='mt-10 w-full flex flex-col justify-center items-center gap-5'>
      <p className='font-bold text-[22px]'>Featured Categories</p>
      

      <div className='w-full flex flex-wrap justify-between p-2 md:p-[2%] gap-2'>
        {data?.length > 0 ? (
          data.map((item, index) => (  
            <Link 
              key={index} 
              to={`/collections/${item?.name || 'subcategory'}/${item?._id || 'default-id'}`} 
              className='flex flex-col items-center w-full sm:w-[300px] md:w-[400px] gap-3'
            >
              <div className='w-full h-[200px] sm:h-[250px] md:h-[300px]'>
                <img  loading='lazy'
                  src={item?.products?.[0]?.images?.[0]?.url || "https://via.placeholder.com/400"}  
                  alt={item?.name || 'Subcategory Image'} 
                  className='w-full h-full object-cover' 
                />
              </div>
              {/* Subcategory Name */}
              <p className='text-center font-medium'>{item?.name || "No Name Available"}</p>
            </Link>
          ))
        ) : (
          <p>No subcategories available at the moment.</p>
        )}
      </div>
    </div>
  );
}
