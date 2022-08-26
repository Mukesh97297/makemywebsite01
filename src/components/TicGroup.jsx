import React from 'react'
import "../TicGroup.css"
import img1 from "../images/tic1.jpg"
import img2 from "../images/tic4.jpg"
import img3 from "../images/tic3.jpg"
import img4 from "../images/tic2.jpg"
import Lottie from "lottie-react";
import ticgroup from "../animation/Website-Glope.json"
function TicGroup() {
  return (
    <div>
      <section className='main-tic-section'>
        <div className='tic-ovelay'></div>
        <div className='container tic-container-1'>
          <div className='row justify-content-center'>
            <div className='tic-h1'>
              <h1>TIC Group</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='united-tool-section-2'>
        <div className='container'>
          <section>
            <div>
              <div className='the-united-tool'>
                <h2>TIC Group With 15 locations worldwide</h2>
                TIC Group Marketing Solutions works within the retail industry to aggregate, consolidate and project manage the distribution of marketing requirements, fixtures and fittings, and consumables to ensure a more efficient business model.
                <br /><br />
                Their technology and warehouse solutions provide shoppers with a seamless post-purchase experience and enables retailers a cost-effective and environment friendly way to manage returns. Our association with them includes creating a high-end website that is much more user-friendly and serves the purpose of the business, along with photography, and a high-quality animation video.
                <div className='row justify-content-center'>
                  <div className='d-flex'>
                    <Lottie animationData={ticgroup} loop={true} autoplay={true} className="website-globe" />
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

export default TicGroup