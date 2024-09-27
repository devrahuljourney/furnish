import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchAllProduct } from '../services/operations/searchAPI';
import Collection from '../components/Collections/Collection';

export default function Search() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');


  const fetchAllResults = async (q) => {
    try {
      setLoading(true); 
      const response = await searchAllProduct(q);
      if (response) {
        setData(response.products); 
      }
      
      console.log("search category ", response)
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    if (q) {
      fetchAllResults(q);
    }
  }, [q]);

  return (
    <div className=' flex w-full flex-col justify-center items-center mt-[50%] md:mt-[13%] ' >
      <div className=' w-full gap-2 p-2 flex flex-col justify-center items-center  ' >
        <p className=' font-semibold text-[22px]  ' >Search</p>
        <p className=' border-b-2 border-gray-200 w-full h-[2px] ' ></p>
        <p>{data.length} result{data.length !== 1 && 's'} for "{q}"</p>
      </div>

      
      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No results found for "{q}"</p>
      ) : (
        <div>
          <Collection data={data} />
        </div>
      )}
    </div>
  );
}
