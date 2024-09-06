import React from 'react'
import Banner from '../components/HomePage/Banner'
import FeatureCategory from '../components/HomePage/FeatureCategory'
import ShopByRoom from '../components/HomePage/ShopByRoom'

export default function HomePage() {
  return (
    <div className='w-full h-full'>
        <Banner/>
        <FeatureCategory/>
        <ShopByRoom/>
    </div>
  )
}
