import React from 'react'
import Banner from '../components/HomePage/Banner'
import FeatureCategory from '../components/HomePage/FeatureCategory'
import ShopByRoom from '../components/HomePage/ShopByRoom'
import Footer from './Footer'
import PaymentComponent from '../test/test'

export default function HomePage() {
  return (
    <div className='w-full h-full mt-[11%]'>
    
        <Banner/>
        <FeatureCategory/>
        <ShopByRoom/>
        <Footer/>
    </div>
  )
}
