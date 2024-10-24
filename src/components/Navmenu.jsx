import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoCartOutline } from "react-icons/io5";
import { openCart } from '../slices/cartSlice';
import { CiUser } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { searchAllProduct } from '../services/operations/searchAPI';
import { CiSearch } from "react-icons/ci";

export default function Navmenu({ data }) {
  const dispatch = useDispatch();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 

  const { loading } = useSelector((state) => state.category);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  const [searchData, setSearchData] = useState([]);
  

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchData}`)
  };

  return (
    <nav className="relative">
      {/* Hamburger Menu Button for Mobile */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX style={{ width: '25px', height: '25px' }} className="text-2xl" /> : <HiMenu style={{ width: '25px', height: '25px' }} className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`fixed top-0 left-0 w-2/3 bg-white h-full p-6 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl">
          <HiX style={{ width: '25px', height: '25px' }} />
        </button>
        <ul className="space-y-4">
          <div className="flex w-full justify-start gap-5">
            {token === null ? (
              <Link onClick={() => setMenuOpen(false)} to="/auth">
                <CiUser style={{ width: '25px', height: '25px' }} />
              </Link>
            ) : (
              <Link onClick={() => setMenuOpen(false)}  to="/profile">
                <CgProfile style={{ width: '25px', height: '25px' }} />
              </Link>
            )}
            <button onClick={() => {
              dispatch(openCart())
              setMenuOpen(false)

            }}>
              <IoCartOutline style={{ width: '25px', height: '25px' }} />
            </button>
          </div>

          <form onSubmit={submitHandler} className=' md:flex flex-row justify-between items-center py-1 border-2 border-black rounded-lg px-4 w-[80%]'>
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
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/" className="block py-2 hover:text-gray-700" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          {/* Loading indicator */}
          {loading ? (
            <li className="py-2">Loading categories...</li>
          ) : (
            data.map((ele, index) => (
              <li key={index}>
                <p className="cursor-pointer py-2 hover:text-gray-700" onClick={() => setHoveredCategory(hoveredCategory === index ? null : index)}>
                  {ele.name.charAt(0).toUpperCase() + ele.name.slice(1).toLowerCase()}
                </p>
                {hoveredCategory === index && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {ele.subcategories.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link onClick={() => setMenuOpen(false)} key={subIndex} to={`/collections/${sub.name}/${sub._id}`} className="block px-4 py-1 hover:text-gray-500">
                          {sub.name.charAt(0).toUpperCase() + sub.name.slice(1).toLowerCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 p-4">
        <Link to="/" className="hover:text-gray-700">
          Home
        </Link>

        {/* Categories with hover effect */}
        {loading ? (
          <p>Loading categories...</p>
        ) : (
          data.map((ele, index) => (
            <div key={index} className="relative group" onMouseEnter={() => setHoveredCategory(index)} onMouseLeave={() => setHoveredCategory(null)}>
              <p className="hover:text-gray-700 cursor-pointer">{ele.name.charAt(0).toUpperCase() + ele.name.slice(1).toLowerCase()}</p>

              {/* Subcategories on hover for desktop */}
              {hoveredCategory === index && (
                <div>
                  <div className="bg-red-500 h-[10px] z-10 opacity-0"></div>
                  <div className="fixed transition-all -translate-y-3 duration-1000 bg-white rounded-lg p-4 shadow-lg mt-2">
                    {ele.subcategories.map((sub, subIndex) => (
                      <Link key={subIndex} to={`/collections/${sub.name}/${sub._id}`} className="block px-4 py-1 hover:text-gray-500">
                        {sub.name.charAt(0).toUpperCase() + sub.name.slice(1).toLowerCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </nav>
  );
}
