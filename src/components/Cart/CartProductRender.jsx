import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../slices/cartSlice';
export default function CartProductRender({cart}) {
    const dispatch = useDispatch();
    
  return (
    <div>
        {cart.length === 0 ? (
          <p className='font-bold text-[20px]  '>Your cart is empty</p>
        ) : (
          cart.map((data) => {
            const image = data.images && data.images.length > 0 ? data.images[0].url : 'fallback_image_url';
            return (
              <article className='flex flex-row py-5 gap-3  justify-between w-full items-center ' key={data._id}>
                <div className=' w-[150px] h-[150px] ' >
                  <img className=' h-full w-full object-contain ' src={image} alt={data.title} />
                </div>
                <div className=' w-[60%] flex gap-2 flex-col justify-center items-start ' >
                  <p className=' text-[13px] text-gray-500 '  >RAJWADA FURNISH</p>
                  <h3 className=' font-bold text-[18px]  ' >{data.name}</h3>
                  <p className=' font-bold text-gray-500 ' >₹ {data.price}</p>
                  <p className=' text-[13px] text-gray-500 ' >{data.selectedSize || 'Size not selected'} / {data.selectedWood || 'Wood finish not selected'}</p>
                  <button className=' underline texxt-[13px] ' onClick={() => dispatch(removeFromCart(data))}>Remove</button>
                </div>
                
              </article>
            );
          })
        )}
    </div>
  )
}
