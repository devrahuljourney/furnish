import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import lg from "../assets/lg.png"; 
import Navmenu from './Navmenu';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../slices/cartSlice';
import { fetchAllCategories } from '../services/operations/categoriesAPI';
import { CgProfile } from "react-icons/cg";
import { GiCaptainHatProfile } from 'react-icons/gi';
export default function Navbar() {
  const bannerData = ["5 year warranty", "Customization Available", "Free Delivery", "Return & Refund"];
  const [currIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState(null)

  const dispatch = useDispatch();
  const {categoriesData} = useSelector((state) => state.category);
  const {token} = useSelector((state) => state.auth);
  

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
    console.log("CategoryData ", categoriesData)
    dispatch(fetchAllCategories());
    setData(categoriesData)
  }, [dispatch]);

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

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchData}`)
  };

  return (
    <div className={`w-full overflow-y-hidden fixed z-10`}>
      {/* Offer banner */}
      <div className="flex h-[50px] bg-nav-banner-color px-[20%] justify-evenly items-center p-2 w-[100%]">
        <button
          onClick={() => setCurrentIndex((currIndex - 1 + bannerData.length) % bannerData.length)}
          className="mr-4 text-2xl"
        >
          <IoIosArrowBack style={{ width: "18px" }} />
        </button>
        <p
          className={` text-[13px] transition-all duration-500 ${
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
      <div className={`w-[100%] bg-blur bg-[#F6F0ED] flex justify-between items-center py-4 px-[5%]  ${visible ? "top-0" : "absolute -top-[200px]"}`}>
        {/* Logo */}
        <Link to="/" className="md:w-[20%]  w-[40%] flex">
          <img className=' md:absolute top-[25%] ' src={lg} alt="Logo" width="150px" height="auto" /> {/* Use auto for height to maintain aspect ratio */}
        </Link>

        {/* Navigation links */}
        <div className='md:w-[60%] gap-3 flex md:flex-col flex-row md:justify-center justify-end w-[60%] md:items-center'>
          <form onSubmit={submitHandler} className='flex flex-row justify-between items-center py-1 border-2 border-black rounded-lg px-4 w-[80%]'>
            <input
              onChange={(e) => setSearchData(e.target.value)}
              name="search"
              value={searchData}
              placeholder='Find your Design'
              className='w-[80%] hover:bg-[#F6F0ED] bg-transparent focus:outline-none'
            />
            <button type='submit' className='w-[20%] flex justify-center items-center'>
              <CiSearch />
            </button>
          </form>
          <div className='md:relative absolute right-0 top-[45%]'>
            <Navmenu data={categoriesData} />
          </div>
        </div>

        <div className='flex w-[20%] justify-evenly p-9'>
          {
            token === null ? (<Link to={"/auth"}>
            <CiUser style={{ width: "22px", height: "22px" }} />
          </Link>) : (
            <Link to={"/profile"}>
            <CgProfile style={{ width: "22px", height: "22px" }} />
          </Link>
          )
          }
          <button onClick={() => dispatch(openCart())}>
            <IoCartOutline style={{ width: "22px", height: "22px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
