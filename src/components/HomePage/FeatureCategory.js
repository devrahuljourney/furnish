import React from 'react'
import { Link } from 'react-router-dom'
import { subcategoryData } from '../../data/dummyData'

export default function FeatureCategory() {
  return (
    <div className='mt-10 w-full flex flex-col justify-center items-center gap-5 ' >
        <p className='font-bold text-[22px]  ' >Featured Categories</p>
        <div className='w-full' >
            <div className='w-full flex  md:flex-row flex-coljustify-center items-center' >
                {
                    subcategoryData.map((data, index) => (
                        <Link to={`/products/${data.subcategory}`} className=' gap-5 flex flex-col justify-center items-center md:w-[400px] md:h-[400px] w-[300px] h-[300px] '  >
                        <img src={data.thumbnail} alt='Thumbnail'  />
                        <p> { data.subcategory } </p>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
