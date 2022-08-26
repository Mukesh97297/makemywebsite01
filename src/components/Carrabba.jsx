import React from 'react'
import "../Carrabba.css"
import img1 from "../images/cg1-1536x1024.jpg"
import img2 from "../images/cg4.jpg"
import img3 from "../images/cg3.jpg"
import img4 from "../images/cg2.jpg"
import Lottie from "lottie-react";
import carrabba from "../animation/Website-Glope.json"
function Carrabba() {
  return (
    <div>
      <section className='main-carrabba-section'>
        <div className='carrabba-ovelay'></div>
        <div className='container carrabba-container-1'>
          <div className='row justify-content-center'>
            <div className='carrabba-h1'>
              <h1>Carrabba’s Group</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='united-tool-section-2'>
        <div className='container'>
          <section>
            <div>
              <div className='the-united-tool'>
                <h2>Carrabba’s Transport Pty Ltd was established in 2004 by Vince and Diana Carrabba with one truck and a dream.</h2>
                Carrabba’s Group is a multi-unit business that specialising in various fields including Carrabba’s Enterprise & Carrabba’s Warehousing and Logistics.
                <br /><br />
                They are one of the best transport companies offering seamless services to all their clients. With over 16 years of experience in the industry, they have catered to numerous clients and have exceeded client expectations in delivering the services. Our association with them included fully-responsive and professional website design, along with developing copyrighted content. We are glad to have contributed to their growth, and wish them the very best for their future endeavours!
                <div className='row justify-content-center'>
                  <div className='d-flex'>
                    <Lottie animationData={carrabba} loop={true} autoplay={true} className="website-globe" />
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

export default Carrabba