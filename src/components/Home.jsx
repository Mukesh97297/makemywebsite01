import React from 'react'
import Customer from './Customer'
import Service from './Service'
import ServiceDelivery from './ServiceDelivery'
import WebDesign from './WebDesign'
import Works from './Works'
function Home() {
  return (
    <div>
      <div>
        <video autoPlay muted loop style={{ width: "100%", height: "100%" }}>
          <source src="https://makemywebsiteaustralia.com.au/mmw/wp-content/uploads/2021/01/banner-07-01-2021_1.mp4" type="video/mp4"></source>
        </video>
      </div>
      <WebDesign/>
      <Service/>
      <Works/>
      <Customer/>
      <ServiceDelivery/>
    </div>
  )
} 
export default Home