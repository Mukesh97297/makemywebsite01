import React from 'react'
import "../Rgland.css"
import img1 from "../images/project-Rgland-m-1536x1024.jpeg"
import img2 from "../images/project-rgland-laptop.jpeg"
import img3 from "../images/project-rgland-tab-b.jpeg"
import img4 from "../images/fg2.jpg"
import Lottie from "lottie-react";
import rgland from "../animation/Website-Glope.json"
function RgLand() {
  return (
    <div>
      <section className='main-rgland-section'>
        <div className='rgland-ovelay'></div>
        <div className='container rgland-container-1'>
          <div className='row justify-content-center'>
            <div className='rgland-h1'>
              <h1>RG Land</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='united-tool-section-2'>
        <div className='container'>
          <section>
            <div>
              <div className='the-united-tool'>
                <h2>A group of companies pioneering progress in the field of land development.</h2>
                RG Land is a Geelong-based land development company that provides end-to-end solutions to transform developable sites into thriving residential communities. <br /><br />
                They actively source, capitalise, develop and manage master-planned residential communities in the existing growth areas in and around Geelong. They also offer a comprehensive range of development and project management services to our clients and joint venture partners. <br /><br />
                We are thrilled to be their IT partners to cater for them for a range of services including, web design, content writing, photography, and videography.
                <div className='row justify-content-center'>
                  <div className='d-flex'>
                    <Lottie animationData={rgland} loop={true} autoplay={true} className="website-globe" />
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

export default RgLand