import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Products/Product';
import FAQ from '../components/FAQ';
import Footer from './Footer';

const dummyProduct = {
  _id: "2",
  images: [
    "https://www.rajwadafurnish.com/cdn/shop/files/Moscow-Solid-Wood-8-Seater-Dining-Table-Sets-by-rajwada-art.webp?v=1722149741&width=800",
    "https://www.rajwadafurnish.com/cdn/shop/files/Moscow-Solid-Wood-8-Seater-Dining-Table-Sets-by-rajwada-b2b.webp?v=1722149741&width=800",
    "https://www.rajwadafurnish.com/cdn/shop/files/Moscow-Solid-Wood-8-Seater-Dining-Table-Sets-by-rajwada-furnish.webp?v=1722149741&width=800",
    "https://www.rajwadafurnish.com/cdn/shop/files/Moscow-Solid-Wood-8-Seater-Dining-Table-Sets-by-rajwada-in-india.webp?v=1722149741&width=800",
    "https://www.rajwadafurnish.com/cdn/shop/files/Moscow-Solid-Wood-8-Seater-Dining-Table-Sets-by-rajwada-online-furniture.webp?v=1722149741&width=800"
  ],
  title: "Classic Wooden Bed",
  price: 55000,
  size: ["Queen", "King"],
  woodFinish: ["Teak", "Walnut", "Mahogany", "Oak"]
};

export default function Products() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        
        setProduct(dummyProduct); 
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? <Product product={product} /> : <p>Loading...</p>}
      <FAQ/>
      <Footer/>
    </div>
  );
}
