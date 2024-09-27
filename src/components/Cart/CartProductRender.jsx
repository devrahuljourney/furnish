import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../slices/cartSlice';
import { Site_name } from '../../data/dummyData';
import { Link } from 'react-router-dom';
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
              <Link to={`/product/${data.title}/${data._id}`}  className='flex hover:shadow-gray-400 hover:bg-gray-100 rounded-xl hover:shadow-lg flex-row py-5 gap-3  justify-between w-full items-center ' key={data._id}>
                <div className=' w-[150px] h-[150px] ' >
                  <img className=' h-full w-full object-contain ' src={image} alt={data.title} />
                </div>
                <div className=' w-[60%] flex gap-2 flex-col justify-center items-start ' >
                  <p className=' text-[13px] text-gray-500 '  >{Site_name}</p>
                  <h3 className=' font-bold text-[18px]  ' >{data.name}</h3>
                  <p className=' font-bold text-gray-500 ' >₹ {data.price}</p>
                  <p className=' text-[13px] text-gray-500 ' > {data.selectedWood || 'Wood finish not selected'}</p>
                  <button className=' underline texxt-[13px] ' onClick={() => dispatch(removeFromCart(data))}>Remove</button>
                  <div className='border-b-2 w-full h-[2px] border-gray-300' ></div>
                </div>

                
                
                
              </Link>
            );
          })
        )}
    </div>
  )
}
