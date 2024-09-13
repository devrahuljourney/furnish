import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoCartOutline } from "react-icons/io5";
import { openCart } from '../slices/cartSlice';

export default function Navmenu({data}) {
  const dispatch = useDispatch();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { loading } = useSelector((state) => state.category); 

  return (
    <nav className="relative">
      {/* Hamburger Menu Button for Mobile */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX style={{width:"25px", height:"25px"}} className="text-2xl" /> : <HiMenu style={{width:"25px", height:"25px"}} className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-2/3 bg-white h-full p-6 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl">
          <HiX style={{width:"25px", height:"25px"}} />
        </button>
        <ul className="space-y-4">
          <button onClick={() => dispatch(openCart())}><IoCartOutline style={{width:"22px", height:"22px"}} /></button>
          <li>
            <Link to="/" className="block py-2 hover:text-gray-700" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          {/* Loading indicator */}
          {loading ? (
            <li className="py-2">Loading categories...</li>
          ) : (
            data.slice(0, 6).map((ele, index) => ( 
              <li key={index}>
                <p
                  className="cursor-pointer py-2 hover:text-gray-700"
                  onClick={() => setHoveredCategory(hoveredCategory === index ? null : index)}
                >
                  {ele.category}
                </p>

                {/* Subcategories (displayed below the category when clicked on mobile) */}
                {hoveredCategory === index && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {ele.subcategories.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={`/collections/${ele.category}`}
                          className="block px-4 py-2 hover:text-gray-500"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.subcategory}
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
        <Link to="/" className="hover:text-gray-700">Home</Link>

        {/* Categories with hover effect */}
        {loading ? (
          <p>Loading categories...</p>
        ) : (
          data.slice(0, 6).map((ele, index) => ( 
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <p className="hover:text-gray-700 cursor-pointer">{ele.name}</p>

              {/* Subcategories on hover for desktop */}
              {hoveredCategory === index && (
                <div className="fixed transition-all -translate-y-1 duration-1000 bg-white rounded-lg p-4 shadow-lg mt-2">
                  {ele.subcategories.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={`/collections/${sub.name}/${sub._id}`}
                      className="block px-4 py-1 hover:text-gray-500"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </nav>
  );
}
