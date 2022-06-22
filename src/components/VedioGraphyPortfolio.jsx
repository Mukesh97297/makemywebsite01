import React from 'react';
import vedio from '../images/yesyesindiansuper-market-video-portfolio.jpg'
import vedio1 from '../images/unitedtools_video-portfolio.jpg'
import aos from 'aos';
import 'aos/dist/aos.css'
aos.init();


function VedioGraphyPortfolio() {
  return (
    <div>
      <div className="container-fluid" id="about-container">
        <div className="row paragraph1">
          <div className="col-md-6 paragraph">
            <h1 >
              Video Portfolio
              <hr className='hr'></hr>
            </h1>
            <h2>
            Our Finest Pieces Of Work Right <br /> Here
            </h2>
          </div>
        </div>
      </div>
      <div className='container py-5'>
        <div className='row'>
             <div className='col-md-4' >
               <a href="https://www.youtube.com/watch?v=xmKsJp1Y2Is">
               <img src={vedio} alt="" className='img-fluid'/>
               </a>
             </div>
             <div className='col-md-4 vedio-portfolio' >
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