import React from 'react';
import vedio from '../images/yesyesindiansuper-market-video-portfolio.jpg'
import vedio1 from '../images/unitedtools_video-portfolio.jpg'
import aos from 'aos';
import 'aos/dist/aos.css'
aos.init();


function VedioGraphyPortfolio() {
  return (
    <div>
      <div className="container-fluid py-4" id="about-container">
        <div className='container'>
        <div className="row pt-5">
          <div className="col-md-12 pt-5  webDesignDevelopment">
            <h1 className='pt-3'  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
              Video Portfolio
              <hr className='hr'></hr>
            </h1>
            <h2 className='mb-2' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
            Our Finest Pieces Of Work Right <br /> Here
            </h2>
          </div>
        </div>
        </div>
      </div>
      <div className='container py-5'>
        <div className='row'>
             <div className='col-md-4' data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
               <a href="https://www.youtube.com/watch?v=xmKsJp1Y2Is">
               <img src={vedio} alt="" className='img-fluid'/>
               </a>
             </div>
             <div className='col-md-4 vedio-portfolio' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
               <a href="https://www.youtube.com/watch?v=dRsnoXG5oKM">
               <img src={vedio1} alt="" className='img-fluid'/>
               </a>
             </div>
        </div>
      </div>
    </div>
  )
}

export default VedioGraphyPortfolio