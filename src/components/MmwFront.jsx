import React from 'react'
import google from '../images/google-partner-licon.png'
import shopify from '../images/Shopify-licon.png'
import commerce from '../images/woocommerce-licon.png'
import wordpress from '../images/wordpress-licon.png'
import magento from '../images/Magento-licon.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Popup from './Popup'
function MmwFront() {
  const [model, setModel] = useState(false)
  const toggleModel = () => {
    setModel(!model)
  }
  return (
    <div className='front-banner'>
      <div className='container-fluid front-banner1'>
        <div className='row mmw-row-1'  >
          <div className='col-xl-6 col-md-12 mmw-col-1'>
            <div className='project'>
              <span className='mmw-shape-2'></span>
              <span className='mmw-shape-3'></span>
              <div className='heading'>
                <p>Have A Project In Mind?</p>
                <div className='heading-info1'> Want to collaborate and give wings to your dream project?</div>
                <div className='heading-info1'>Let’s talk!</div>
                <div className='heading-button'>
                  <Link to="/" className='btn-link get-quits' onClick={toggleModel} role='button'>
                    <span>
                      <span>Get a Quote</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {
          model && (
            <Popup />
          )
        }
        </div>
       
      </div>
      <div className='container-fluid we-team' style={{ backgroundColor: "#000000D1", padding: "20px 0px 20px 0px" }} >
        <div className='container'>
          <div className='Teams'>
            <div className='row justify-content-center '>
              <div className='Team'>We team up with the leading names of the industry</div>
              <div className='Team1'>We have established a close channel with major technology brands across the world and it enables us to bring the best to every business, every time.	</div>
            </div>
            <div className='row justify-content-center' style={{ padding: "20px 0px 20px 0px" }}>
              <div className='col-lg-3 col-xl-2 col-xs-6 mmw-logos-1' >
                <img src={google} alt="google" className='img-fluid' />
              </div>
              <div className='col-lg-3 col-xl-2 col-xs-6  mmw-logos-1' >
                <img src={shopify} alt="shopify" className='img-fluid' />
              </div>
              <div className='col-lg-2  mmw-logos-1' >
                <img src={commerce} alt="commerce" className='img-fluid' />
              </div>
              <div className='col-xl-2 col-lg-3 col-xs-6  mmw-logos-1' >
                <img src={wordpress} alt="wordpress" className='img-fluid' />
              </div>
              <div className='col-lg-3 col-xl-2 col-xs-6  mmw-logos-1' >
                <img src={magento} alt="magento" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MmwFront