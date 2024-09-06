import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/dummyData';


export default function Navmenu() {

    const [hoveredCategory, setHoveredCategory] = useState(null); 
  return (
    <div className="flex space-x-8 ">
          <Link to="/" className="hover:text-gray-700">Home</Link>

          {/* Categories */}
          {data.map((ele, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(index)} 
              onMouseLeave={() => setHoveredCategory(null)}  
            >
              <p className="hover:text-gray-700 cursor-pointer">{ele.category}</p>

              {/* Subcategories */}
              {hoveredCategory === index && (
                <div className="absolute -translate-x-[40%]  rounded-[5%] min-w-[230px] p-2" onMouseEnter={() => setHoveredCategory(index)} >
                  {ele.subcategories.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={`/products/${sub.subcategory}`}
                      className="block px-4 py-2 bg-gray-200 h-full hover:text-opacity-95 "
                    >
                      {sub.subcategory}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
  )
}
