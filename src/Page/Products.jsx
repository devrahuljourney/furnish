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
    if (!id) {
      setError("Invalid product ID");
      setLoading(false);
      return;
    }

    let isMounted = true;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await fetchProductById(id); 
        if (isMounted) {
          if (productData) {
            setProduct(productData);
            
          } else {
            setError("Product not found");
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        if (isMounted) {
          setError("Failed to fetch product");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
      
    };
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Product product={product} />
      )}
      <FAQ />
      <Footer />
    </div>
  );
}
