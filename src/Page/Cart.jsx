import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from "react-icons/ai";
import { openCart, removeFromCart } from '../slices/cartSlice';

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price dynamically
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <aside className='flex w-full flex-col justify-center items-center ' >
      <div  className=' flex flex-row justify-between px-3 border-b-2 border-gray-500 w-full '>
        <p className='font-bold text-[20px]  ' >Cart</p>
        <button onClick={() => dispatch(openCart())}>
          <AiOutlineClose style={{width:"25px", height:"25px"}}  />
        </button>
      </div>

      <div className='flex flex-col w-full justify-center items-center' >
        {cart.length === 0 ? (
          <p className='font-bold text-[20px]  '>Your cart is empty</p>
        ) : (
          cart.map((data) => {
            const image = data.images && data.images.length > 0 ? data.images[0] : 'fallback_image_url';
            return (
              <article className='flex flex-row py-5 gap-3  justify-between w-full items-center ' key={data._id}>
                <div className=' w-[150px] h-[150px] ' >
                  <img className=' h-full w-full object-contain ' src={image} alt={data.title} />
                </div>
                <div className=' w-[60%] flex gap-2 flex-col justify-center items-start ' >
                  <p className=' text-[13px] text-gray-500 '  >RAJWADA FURNISH</p>
                  <h3 className=' font-bold text-[18px]  ' >{data.title}</h3>
                  <p className=' font-bold text-gray-500 ' >₹ {data.price}</p>
                  <p className=' text-[13px] text-gray-500 ' >{data.selectedSize || 'Size not selected'} / {data.selectedWood || 'Wood finish not selected'}</p>
                  <button className=' underline texxt-[13px] ' onClick={() => dispatch(removeFromCart(data))}>Remove</button>
                </div>
                
              </article>
            );
          })
        )}
      </div>

      <div>
        
        <button className='button-48' >Checkout - ₹ {calculateTotalPrice().toFixed(2)} </button>
      </div>
    </aside>
  );
}
