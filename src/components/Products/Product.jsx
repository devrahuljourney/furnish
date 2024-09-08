import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import wood1 from "../../assets/wood1.avif";
import wood2 from "../../assets/wood2.avif";
import wood3 from "../../assets/wood4.avif"; // Ensure this filename is correct
import Instructions from '../Instruction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, openCart } from '../../slices/cartSlice';
import Cart from '../../Page/Cart';

export default function Product({ product }) {
  const { images, title, price, size, woodFinish } = product;

  const [currImageIndex, setCurrImageIndex] = useState(0);
  const [currWood, setCurrWood] = useState(0);
  const [currSize, setCurrSize] = useState(size[0]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, cartOpen } = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    const productWithSelectedOptions = {
      ...product,
      selectedSize: currSize,
      selectedWood: woodFinish[currWood],
      price: product.price,
    };
    dispatch(addToCart(productWithSelectedOptions));
    console.log('Current Cart:', cart);
    dispatch(openCart());
  };

  const handleNext = () => {
    setCurrImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 10,
  });

  return (
    <div className='relative  md:mt-[12%] mt-[50%] flex flex-col md:flex-row md:gap-6'>
      {/* Image Section */}
      <div className='flex flex-col md:flex-row md:w-2/3 gap-4 md:gap-6'>
        {/* Thumbnail Image Buttons */}
        <div className='flex flex-row md:flex-col gap-2 md:gap-4 md:w-1/4'>
          {images.map((image, index) => (
            <button
              key={index}
              className={`border-2 md:w-[150px]  md:h-[150px] ${currImageIndex === index ? 'border-blue-500' : 'border-transparent'}   p-1`}
              onClick={() => setCurrImageIndex(index)}
            >
              <img className=' w-full h-full object-contain ' src={image} alt={`image ${index}`} />
            </button>
          ))}
        </div>

        {/* Current Image Display */}
        <div {...handlers} className='flex-grow w-full p-2 md:w-3/4'>
          <img src={images[currImageIndex]} className='w-full h-auto object-contain' alt='Selected' />
        </div>
      </div>

      {/* Product Details */}
      <div className='flex flex-col justify-start gap-4 md:w-1/3 p-4'>
        <p className='text-xl md:text-2xl font-bold'>{title}</p>
        <p className='text-lg text-gray-500 font-semibold'>₹ {price}</p>

        {/* Size Selection */}
        <div className='flex flex-col gap-2'>
          <p className='text-sm'>Select Your Size</p>
          <div className='flex flex-wrap gap-2'>
            {size.map((data) => (
              <button 
                key={data} 
                onClick={() => setCurrSize(data)} 
                className={`border-2 p-2 rounded ${data === currSize ? 'border-blue-500' : 'border-gray-500'}`}
              >
                {data}
              </button>
            ))}
          </div>
        </div>

        {/* Wood Finish Selection */}
        <div>
          <p>Select Wood Finish: {woodFinish[currWood]}</p>
          <div className='flex flex-wrap gap-2'>
            <button onClick={() => setCurrWood(0)}>
              <img src={wood1} alt="Wood 1" className={`w-12 h-12 ${currWood === 0 ? 'border border-blue-500' : ''}`} />
            </button>
            <button onClick={() => setCurrWood(1)}>
              <img src={wood2} alt="Wood 2" className={`w-12 h-12 ${currWood === 1 ? 'border border-blue-500' : ''}`} />
            </button>
            <button onClick={() => setCurrWood(2)}>
              <img src={wood3} alt="Wood 3" className={`w-12 h-12 ${currWood === 2 ? 'border border-blue-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex flex-col gap-2'>
          <button onClick={handleAddToCart} className='button-48 cart'>ADD TO CART</button>
          <button className='button-48 buy'>BUY IT NOW</button>
        </div>
        <Instructions />
      </div>

      <div className={`absolute top-0 right-0 p-4 bg-nav-banner-color transition-transform duration-250 ease-in ${cartOpen ? 'translate-x-0' : 'translate-x-full'} md:w-1/4 w-full h-full`}>
        <Cart />
      </div>
    </div>
  );
}
