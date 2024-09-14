import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import { fetchSubcategoryById } from '../services/operations/subCategoryAPI';
import Collection from '../components/Collections/Collection';

export default function Collections() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [isEmpty, setIsEmpty] = useState(false);     

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const subcategoryData = await fetchSubcategoryById(id);
        if (subcategoryData && subcategoryData.products && subcategoryData.products.length > 0) {
          setData(subcategoryData.products);  
          console.log("fetch subctategory data ", data)
          setIsEmpty(false);
        } else {
          setIsEmpty(true);  
        }
      } catch (error) {
        console.log("Error fetching data", error);
        setIsEmpty(true);  
      } finally {
        setIsLoading(false);  
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='flex w-full mt-[35%] md:mt-[11%] flex-col gap-4'>
      {isLoading ? (
        <p className='text-center'>Loading...</p>  
      ) : isEmpty ? (
        <p className='text-center'>No products available in this category.</p> 
      ) : (
         <Collection data = {data} />
      )}

      <Footer />
    </div>
  );
}
