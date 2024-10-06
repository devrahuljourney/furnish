import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from "react-icons/ai";
import { openCart, removeFromCart } from '../slices/cartSlice';
import CartProductRender from '../components/Cart/CartProductRender';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, cartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartRef = useRef(null);  // Step 1: Create a ref for the cart
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const buyNowHandler = () => {
    dispatch(openCart(false));
    navigate("/checkout", {
      state: {
        productId: null,
        byCart: true,
        selectedWood: cart.selectedWood,
      },
    });
  };

  // Step 2: Close cart when clicking outside
  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      dispatch(openCart(false));  // Close the cart if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    cartOpen && (  // Show cart only when cartOpen is true
      <aside ref={cartRef} className='flex w-full flex-col justify-center items-center z-100'>
        <div className='flex flex-row justify-between px-3 border-b-2 border-gray-500 w-full'>
          <p className='font-bold text-[20px]'>Cart</p>
          <button onClick={() => dispatch(openCart(false))}>  {/* Step 3: Close cart on button click */}
            <AiOutlineClose style={{ width: '25px', height: '25px' }} />
          </button>
        </div>

        <div className='flex flex-col w-full justify-center items-center'>
          <CartProductRender cart={cart} />
        </div>

        <div>
          <button onClick={buyNowHandler} className='button-48'>
            Checkout - ₹ {calculateTotalPrice().toFixed(2)}
          </button>
        </div>
      </aside>
    )
  );
}
