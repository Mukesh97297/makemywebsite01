import React from 'react'
import Customer from './Customer'
import MmwFront from './MmwFront'
import Service from './Service'
import ServiceDelivery from './ServiceDelivery'
import WebDesign from './WebDesign'
import Works from './Works'
function Home() {
  return (
    <div style={{background:"black"}}>
      <div className='home.main-div'>
        <video className='home-vedio' autoPlay muted loop  src="https://makemywebsiteaustralia.com.au/mmw/wp-content/uploads/2021/01/banner-07-01-2021_1.mp4" type="video/mp4">
        </video>
      </div>
      <WebDesign />
      <Service />
      <Works />
      <MmwFront />
      <Customer />
      <ServiceDelivery />
    </div>
  )
}
export default Home