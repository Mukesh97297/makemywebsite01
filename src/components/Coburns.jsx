import React from 'react'
import "../Coburns.css"
import img1 from "../images/cr1-1536x1024.jpg"
import img2 from "../images/cr4.jpg"
import img3 from "../images/cr3.jpg"
import img4 from "../images/cr2.jpg"
import Lottie from "lottie-react";
import coburns from "../animation/Website-Glope.json"
function Coburns() {
  return (
    <div>
      <section className='main-coburns-section'>
        <div className='coburns-ovelay'></div>
        <div className='container coburns-container-1'>
          <div className='row justify-content-center'>
            <div className='coburns-h1'>
              <h1>Coburns Rise</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='united-tool-section-2'>
        <div className='container'>
          <section>
            <div>
              <div className='the-united-tool'>
                <h2>A home is an emotion that forms a significant part of our lives.</h2>
                Coburns Rise is a coveted estate that has been laboriously designed with utmost attention to detail to suit the ultra-modern lifestyles of its future residents, and envisage a calm living for Melbournians. We designed a professional, responsive, and engaging website for Coburns Rise estate to enable homebuyers and investors to stay in the know of the developments. Their website boasts subtlety, ease of navigation, and aligns with their brand presence.
                <div className='row justify-content-center'>
                  <div className='d-flex'>
                    <Lottie animationData={coburns} loop={true} autoplay={true} className="website-globe" />
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

export default Coburns