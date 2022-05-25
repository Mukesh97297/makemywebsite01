import React from 'react'
import google from '../images/google-partner-licon.png'
import shopify from '../images/Shopify-licon.png'
import commerce from '../images/woocommerce-licon.png'
import wordpress from '../images/wordpress-licon.png'
import magento from '../images/Magento-licon.png'

function MmwFront() {
  return (
    <div className='front-banner'>
      <div className='container-fluid '>
        <div className='container py-5'>
          <div className='row py-5'>
            <div className='col-md-7 py-5'>
              <div className='project'>
                <div className='heading mx-5'>
                  <p className='pt-5'>Have A Project In Mind?</p>
                  <div className='heading-info1 pt-3'> Want to collaborate and give wings to your dream project?</div>
                  <div className='heading-info1 pt-4'>Let’s talk!	</div>
                  <div className='heading-button py-5 mb-5'>
                    <a href="/" className='btn-link get-quits' role='button'>
                      <span>
                        <span>Get a Quote</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{backgroundColor:"#000000D1"}}>
          <div className='container'>
            <div className='row py-5 justify-content-center'>
              <div className='Team py-3'>	We team up with the leading names of the industry</div>
              <div className='Team1'>We have established a close channel with major technology brands across the world and it enables us to bring <br /> the best to every business, every time.	</div>

            </div>
            <div className='row justify-content-center'>
              <div className='col-md-3'>
                <img src={google} alt="google" className='img-fluid'/>
              </div>
              <div className='col-md-3'>
                <img src={shopify} alt="shopify" className='img-fluid'/>
              </div>
              <div className='col-md-3'>
                <img src={commerce} alt="commerce" className='img-fluid'/>
              </div>
              <div className='col-md-3'>
                <img src={wordpress} alt="wordpress" className='img-fluid'/>
              </div>
              <div className='col-md-3'>
                <img src={magento} alt="magento" className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MmwFront