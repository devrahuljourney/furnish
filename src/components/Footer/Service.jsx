import React from 'react';
import customization from "../../assets/Customization.avif";

export default function Service() {
  return (
    <div className='flex flex-col md:flex-row justify-between w-full p-5 md:p-[5%] items-center gap-6 md:gap-0'>
      <div className='flex justify-center items-center flex-col gap-2'>
        <img className='w-[60px] h-[51px]' src={customization} alt='customization' />
        <p className='text-center'>Customization Available</p>
      </div>
      
      <div className='flex justify-center items-center flex-col gap-2'>
        <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1.4" width="52" className="icon icon-picto-customer-support block" viewBox="0 0 24 24">
          <path d="M12.75 15.75h3v4.5l4.5-4.5h1.494c.832 0 1.506-.674 1.506-1.506V2.25a1.5 1.5 0 0 0-1.5-1.5h-12a1.5 1.5 0 0 0-1.5 1.5v4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M19.875 7.875a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75m-7.5 0a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75m3.75 0a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path clipRule="evenodd" d="M6.75 16.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12.75 23.25a6.054 6.054 0 0 0-12 0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <p className='text-center'>24/7 Support</p>
      </div>

      <div className='flex justify-center items-center flex-col gap-2'>
        <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1.4" width="52" className="icon icon-picto-delivery-truck block" viewBox="0 0 24 24">
          <path d="M23.25 13.5V6a1.5 1.5 0 0 0-1.5-1.5h-12A1.5 1.5 0 0 0 8.25 6v6m0 0V6h-3a4.5 4.5 0 0 0-4.5 4.5v6a1.5 1.5 0 0 0 1.5 1.5H3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M.75 12h3a1.5 1.5 0 0 0 1.5-1.5V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path clipRule="evenodd" d="M7.5 19.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm12 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12 18h3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <p className='text-center'>Free Shipping</p>
      </div>

      <div className='flex justify-center items-center flex-col gap-2'>
        <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1.4" width="52" className="icon icon-picto-return block" viewBox="0 0 24 24">
          <path d="m1.25 15.08 2.207-3.384 3.385 2.206" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M13.13 2.5a9.525 9.525 0 1 1 0 19.049 9.68 9.68 0 0 1-9.673-9.853" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <p className='text-center'>Easy Return & Refund</p>
      </div>

      <div className='flex justify-center items-center flex-col gap-2'>
        <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1.4" width="52" className="icon icon-picto-lock block" viewBox="0 0 24 24">
          <path clipRule="evenodd" d="M3.75 11.25a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-10.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M6.75 9.75V6a5.25 5.25 0 0 1 10.5 0v3.75M12 15v3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <p className='text-center'>Secure CCAvenue Payments</p>
      </div>
    </div>
  )
}
