import React from 'react';

export default function Product({ product }) {
  const { images, title, price, size, woodFinish } = product;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${title} - view ${index + 1}`} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
      <p>Price: ₹{price}</p>
      <p>Available Sizes: {size.join(', ')}</p>
      <p>Wood Finishes: {woodFinish.join(', ')}</p>
    </div>
  );
}
