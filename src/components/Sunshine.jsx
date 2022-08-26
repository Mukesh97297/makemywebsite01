import React from 'react'
import "../Sunshine.css"
import img1 from "../images/sc1.jpg"
import img2 from "../images/sc4.jpg"
import img3 from "../images/sc3.jpg"
import img4 from "../images/sc2.jpg"
import Lottie from "lottie-react";
import sunshine from "../animation/Website-Glope.json"
function Sunshine() {
  return (
    <div>
      <section className='main-sunshine-section'>
        <div className='sunshine-ovelay'></div>
        <div className='container sunshine-container-1'>
          <div className='row justify-content-center'>
            <div className='sunshine-h1'>
              <h1>Sunshine Collectables</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='united-tool-section-2'>
        <div className='container'>
          <section>
            <div>
              <div className='the-united-tool'>
                <h2>Wide range of Pop Culture items</h2>
                Sunshine Collectables is an online and a standalone store based in Braybrook VIC, offering a range of pop vinyl, gaming, sports products and more.
                <br /><br />
                We designed a full-fledged, customised e-commerce website to boost their online sales. From adding the E-commerce functionality, and integrating the payment gateway to making the website user-friendly, we catered to it all.
                <div className='row justify-content-center'>
                  <div className='d-flex'>
                    <Lottie animationData={sunshine} loop={true} autoplay={true} className="website-globe" />
                    <p className='visit-website-globe'><a href="/">Visit Website</a></p></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className='unitedtool-section-3'>
        <div className='container'>
          <section>
            <div>
              <img src={img1} alt="" className='img-fluid' />
            </div>
          </section>
          <section>
            <div className='row'>
              <div className='col-md-6'>
                <div> <img src={img2} alt="" className='img-fluid' /></div>
                <div><img src={img3} alt="" className='img-fluid' /></div>
              </div>

              <div className='col-md-6'>
                <div><img src={img4} alt="" className='img-fluid' /></div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className='unitedtool-section-4'>
        <div className='overlay-section-united'></div>
        <div className='container'>
          <div className=''>
            <div className='background-attechment-div'>
              <section>
                <div className='overlay-section-united1'> </div>
                <div className='container container-padding'>
                  <div className='overlay-section-text'>
                    <div className=' relate'>
                      <div className='headings'>
                        Team of experts who is willing to work your way to help you succeed online.
                      </div>
                      <div className='title'>
                        <h3> Have a project in mind?
                          <br />
                          Let's talk now.</h3>
                      </div>
                      <div className='button'>
                        <div>
                          <div>
                            <a href="/" className='united-quite' role="button">
                              <span>
                                <span>Get A Quote</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sunshine