import React from 'react';
import vedio from '../images/yesyesindiansuper-market-video-portfolio.jpg'
import vedio1 from '../images/unitedtools_video-portfolio.jpg'

function VedioGraphyPortfolio() {
  return (
    <div>
      <div className="container-fluid pl-5 pt-3" id="about-container">
        <div className="row pt-5">
          <div className="col-md-12 pt-5 pl-5 webDesignDevelopment">
            <h1 className='pl-4 pt-3'>
              Video Portfolio
              <hr className='hr'></hr>
            </h1>
            <h2 className='pl-4 mb-2'>
            Our Finest Pieces Of Work Right <br /> Here
            </h2>
            <div id="about-main-elemontor">
              <div id="about-rcircle">
                <div id="about-welcome-shape-1"></div>
                <div id="about-welcome-shape-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container py-5'>
        <div className='row'>
             <div className='col-md-4 '>
               <a href="https://www.youtube.com/watch?v=xmKsJp1Y2Is">
               <img src={vedio} alt="" className='img-fluid'/>
               </a>
             </div>
             <div className='col-md-4 vedio-portfolio'>
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