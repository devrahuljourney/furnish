import React from 'react'
import Service from '../components/Footer/Service'
import FooterItems from '../components/Footer/FooterItems'

export default function Footer() {
  return (
    <div className='w-[100%] flex justify-center items-center flex-col ' >
        <Service/>
        <FooterItems/>
    </div>
  )
}
