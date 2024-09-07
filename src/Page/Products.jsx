import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Products/Product';

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
  const { id } = useParams(); // Capture ID from URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Simulating fetch with dummy data for now, replace it with actual API call
        setProduct(dummyProduct); // Replace with actual fetched product
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? <Product product={product} /> : <p>Loading...</p>}
    </div>
  );
}
