import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Products/Product';
import FAQ from '../components/FAQ';
import Footer from './Footer';
import { fetchProductById } from '../services/operations/productAPI'; 

export default function Products() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await fetchProductById(id); 
        if (productData) {
          setProduct(productData);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : product ? (
        <Product product={product} />
      ) : (
        <p>Product not found</p>
      )}
      <FAQ/>
      <Footer/>
    </div>
  );
}
