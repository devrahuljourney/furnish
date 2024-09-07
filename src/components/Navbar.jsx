import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { data } from '../data/dummyData';
import logo from "../assets/logo.avif"; 
import Navmenu from './Navmenu';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
export default function Navbar() {
  const bannerData = ["5 year warranty", "Customization Available", "Free Delivery", "Return & Refund"];
  const [currIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [searchData, setSearchData] = useState([]);


  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
        setIsAnimating(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [bannerData.length]);

  

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Search data", searchData)

  }

  return (
    <div className={`w-full fixed z-10  `}>
      {/* Offer banner */}
      <div className="flex   bg-nav-banner-color px-[20%] justify-evenly items-center p-2 w-[100%] ">
        <button
          onClick={() => setCurrentIndex((currIndex - 1 + bannerData.length) % bannerData.length)}
          className="mr-4 text-2xl"
        >
          <IoIosArrowBack style={{ width: "18px" }} />
        </button>
        <p
          className={`text-xl text-[13px] transition-all duration-500 ${
            isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {bannerData[currIndex]}
        </p>
        <button
          onClick={() => setCurrentIndex((currIndex + 1) % bannerData.length)}
          className="ml-4 text-2xl"
        >
          <IoIosArrowForward style={{ width: "18px" }} />
        </button>
      </div>

      {/* Navbar with categories */}
      <div className={`w-[100%] bg-transparent hover:bg-[#F6F0ED]   flex justify-between items-center py-4 px-[5%] ${prevScrollPos === 0 ? "bg-transparent" : "bg-[#F6F0ED]" }  ${visible ? "top-0  " : " absolute -top-[200px] "  }`}>
        {/* Logo */}
        <div className="w-[20%] flex  ">
          <img src={logo} alt="Logo" width="200px" height="400px" />
        </div>

        {/* Navigation links */}
        <div className='w-[60%]  gap-3 flex flex-col justify-center items-center ' >
          <form onSubmit={submitHandler} className='flex  flex-row justify-between items-center  py-1 border-2 border-black rounded-lg px-4 w-[80%]' >
            <input onChange={(e) => setSearchData(e.target.value)} name="search" value={searchData} placeholder='Find your Design' className='w-[80%] hover:bg-[#F6F0ED] bg-transparent focus:outline-none ' />
            <button type='submit' className='w-[20%] flex justify-center items-center '  > <CiSearch /> </button>
          </form>
          <Navmenu/>
        </div>

        <div className='flex w-[20%] justify-evenly p-9  ' >
          <Link to={"/login"} > <CiUser style={{width:"22px", height:"22px"}} /> </Link>
          <Link to="/cart" > <IoCartOutline style={{width:"22px", height:"22px"}} /> </Link>
        </div>
        
      </div>
    </div>
  );
}
