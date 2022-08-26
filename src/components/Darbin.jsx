import React from 'react'
import "../Darbin.css"
import img1 from "../images/cg1-1536x1024.jpg"
import img2 from "../images/cg4.jpg"
import img3 from "../images/cg3.jpg"
import img4 from "../images/cg2.jpg"
import Lottie from "lottie-react";
import darbin from "../animation/Website-Glope.json"
function Darbin() {
  return (
    <div>
      <section className='main-darbin-section'>
        <div className='darbin-ovelay'></div>
        <div className='container darbin-container-1'>
          <div className='row justify-content-center'>
            <div className='darbin-h1'>
              <h1>Darebin Gas</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='united-tool-section-2'>
        <div className='container'>
          <section>
            <div>
              <div className='the-united-tool'>
                <h2>The foundation of Darebin Gas was laid with a vision to cater to domestic households, real estate agents, and manufacturers.</h2>
                Darebin Gas is a known name in the gas and hot water industry. They have been doing services, installations, and repairs of gas appliances with efficiency whilst facilitating compliance implementation. They provide provide end-to-end solutions that are backed by modern technology, and expertise.
                <br /><br />
                We provided them with end-to-end services including website design and development, content writing, and photography to come up with a high-quality end product.
                <div className='row justify-content-center'>
                  <div className='d-flex'>
                    <Lottie animationData={darbin} loop={true} autoplay={true} className="website-globe" />
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

export default Darbin