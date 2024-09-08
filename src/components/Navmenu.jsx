import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/dummyData';
import { useDispatch } from 'react-redux';


export default function Navmenu() {

  const dispatch = useDispatch();

    const [hoveredCategory, setHoveredCategory] = useState(null); 
  return (
    <div className="flex relative space-x-8 ">
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
                <div className="fixed bg-white rounded-lg p-4 -translate-x-10 " onMouseEnter={() => setHoveredCategory(index)} >
                  {ele.subcategories.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={`/collections/${ele.category}`}
                      className="block px-4 py-2 hover:text-gray-500  h-full hover:text-opacity-95 "
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
