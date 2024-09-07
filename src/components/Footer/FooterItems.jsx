import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

export default function FooterItems() {
  return (
    <div className=' w-full flex flex-col gap-4 justify-center items-start  bg-nav-banner-color md:p-[5%] p-2 ' >
        <div className=' flex w-full gap-4 md:flex-row items-start flex-col justify-center md:justify-between md:p-5 p-1 '>
            <div className='flex md:w-[25%] w-full flex-col item-start gap-2 justify-center' >
                <p className='text-[13px] '>About Us</p>
                <div className=' flex flex-col gap-7 ' >
                    <div className='flex flex-col item-start justify-center' >
                    <p className=' font-semibold uppercase text-[19px] ' >SHEKHAWATI ART EXPORT </p>
                    <p className=' text-gray-500 text-[14px] ' >GSTIN:08BOHPJ1399M1ZC</p>
                    <p className=' text-gray-500 text-[14px] '>G-1 C-85C Road NO-05 RICCO Industrial Area,</p>
                    <p className=' text-gray-500 text-[14px] '>Churu (Raj.) 331001</p>
                    </div>

                    <div className='flex flex-col item-start gap-3 justify-center' >
                        <input className=' bg-transparent border-2 p-2 border-gray-400 ' type='text' name = "emaiL" placeholder="E-mail"  />
                        <button className='button-48 w-[50%] ' >Subscribe</button>
                    </div>

                    <div className='flex flex-row gap-5 item-start justify-start' >
                            <a href='#'> <CiFacebook style={{width:"30px", height:"30px"}} /> </a>
                            <a href='#' > <FaInstagram  style={{width:"30px", height:"30px"}}  /> </a>
                    </div>
                </div>
            </div>
            <div className='flex md:w-[25%] gap-2 w-full flex-col item-start justify-center'>
                <p className=' text-[13px] ' >Contact Us for any assistance</p>
                <div className='flex flex-col item-start justify-center' >
                    <p className=' text-[14px] text-gray-400 ' >+91 70231-68022</p>
                    <p className=' text-[14px] text-gray-400 '>support@rajwadafurnish.com</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 md:w-[25%] w-full item-start justify-center'>
                <p className=' text-[13px] '>Shop By Room</p>
                <div className='flex flex-col item-start justify-center' >
                    <p className=' text-[14px] text-gray-400 '>Bedroom</p>
                    <p className=' text-[14px] text-gray-400 '>Dining</p>
                </div>
            </div>
            <div className='flex md:w-[25%] gap-2 w-full flex-col item-start justify-center'>
                <p className=' text-[13px] '>Quick Links</p>
                <div className='flex flex-col item-start justify-center' >
                    <a href='#' className=' text-[14px] text-gray-400 '> About Us </a>
                    <a href='#' className=' text-[14px] text-gray-400 '> Contact Us </a>
                    <a href='#' className=' text-[14px] text-gray-400 '> Legal Business </a>
                    <a href='#' className=' text-[14px] text-gray-400 '> Privacy policy </a>
                    <a href='#' className=' text-[14px] text-gray-400 '> Refund Policy </a>
                    <a href='#' className=' text-[14px] text-gray-400 '> Shipping Policy </a>
                    <a href='#' className=' text-[14px] text-gray-400 '> Canellation </a>

                </div>
            </div>
        </div>
        <div className=' w-full gap-4 flex flex-col justify-center items-center ' >

            <p className=' text-[25px] font-bold ' >Online Furniture In Popular City</p>

            <p className="text-center text-gray-500 text-sm overflow-hidden text-ellipsis whitespace-normal">
  Bengaluru, Hyderabad, Chennai, Chandigarh, Vadodara, Navi Mumbai, Mumbai, Delhi, Pune, Nashik, Ahmedabad, Ludhiana, 
  Patna, Gurgaon, Kolkata, Goa, Ghaziabad, Faridabad, Lucknow, Jaipur, Noida, Kochi, Nagpur, Thiruvananthapuram, Indore, 
  Mysore, Bhopal, Surat, Jalandhar, Madurai, Visakhapatnam, Kanpur, Aurangabad
</p>

            
        </div>
    </div>
  )
}
