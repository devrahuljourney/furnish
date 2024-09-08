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
    <div className='w-full relative mt-[9%] md:p-[2%] h-height flex md:flex-row flex-col justify-between items-start gap-6'>
     
      <div className='w-[70%] flex md:flex-row h-full flex-col-reverse gap-3 justify-start items-start'>
        {/* Thumbnail Image Buttons */}
        <div className='flex flex-col justify-start items-start gap-3 w-[20%]'>
          {images.map((image, index) => (
            <button
              key={index}
              className={`md:w-[100px] md:h-[100px] border-2 ${
                currImageIndex === index ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => setCurrImageIndex(index)}
            >
              <img className='object-cover w-full h-full' src={image} alt={`image ${index}`} />
            </button>
          ))}
        </div>

        {/* Current Image Display */}
        <div {...handlers} className='flex-grow w-[80%]'>
          <img src={images[currImageIndex]} className='w-full h-full object-contain' alt='Selected' />
        </div>
      </div>

      {/* Product Details */}
      <div className='w-[30%] flex flex-col justify-center items-start gap-4'>
        <p className='text-[19px] md:text-[22px] font-bold'>{title}</p>
        <p className='md:text-[20px] text-[17px] text-gray-500 font-semibold'>₹ {price}</p>

        {/* Size Selection */}
        <div className='flex flex-col gap-2 justify-center items-start'>
          <p className='text-[13px]'>Select Your Size</p>
          <div className='flex gap-2'>
            {size.map((data) => (
              <button 
                key={data} 
                onClick={() => setCurrSize(data)} 
                className={`border-2 p-2 ${data === currSize ? 'border-blue-500' : 'border-gray-500'}`}
              >
                {data}
              </button>
            ))}
          </div>
        </div>

        {/* Wood Finish Selection */}
        <div>
          <p>Select Wood Finish: {woodFinish[currWood]}</p>
          <div className='flex gap-2'>
            <button onClick={() => setCurrWood(0)}>
              <img src={wood1} alt="Wood 1" className={`w-[50px] h-[50px] ${currWood === 0 ? 'border border-blue-500' : ''}`} />
            </button>
            <button onClick={() => setCurrWood(1)}>
              <img src={wood2} alt="Wood 2" className={`w-[50px] h-[50px] ${currWood === 1 ? 'border border-blue-500' : ''}`} />
            </button>
            <button onClick={() => setCurrWood(2)}>
              <img src={wood3} alt="Wood 3" className={`w-[50px] h-[50px] ${currWood === 2 ? 'border border-blue-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex flex-col gap-2 w-[60%]'>
          <button onClick={handleAddToCart} className='button-48'>ADD TO CART</button>
          <button className='button-48'>BUY IT NOW</button>
        </div>
        <Instructions/>
      </div>
      <div className= {` p-4 bg-nav-banner-color absolute md:w-[27%] h-screen w-[80%] transition-all duration-250 ease-in  ${cartOpen  ? "right-0" : "-right-[100%]"} `} >
      
         <Cart/>
      
     </div>
    </div>
  );
}
