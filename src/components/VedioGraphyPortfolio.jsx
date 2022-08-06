import React from 'react';
import vedio from '../images/yesyesindiansuper-market-video-portfolio.jpg'
import vedio1 from '../images/unitedtools_video-portfolio.jpg'
function VedioGraphyPortfolio() {
  return (
    <div>
      <div className="container-fluid" id="about-container">
        <div className='row paragraph1 pt-5'>
          <div className="col-md-6 paragraph pt-5">
            <h1 className='pt-5'>
              Video Portfolio
              <hr className='hr'></hr>
            </h1>
            <h2>
              Our Finest Pieces Of Work Right Here
            </h2>
            <span className='shape-about-1'></span>
            <span className='shape-about-2'></span>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginBottom: "100px", marginTop: "100px" }}>
        <div className='row'>
          <div className='col-md-4' >
            <a href="https://www.youtube.com/watch?v=xmKsJp1Y2Is">
              <img src={vedio} alt="" className='img-fluid' />
            </a>
          </div>
          <div className='col-md-4' >
            <a href="https://www.youtube.com/watch?v=dRsnoXG5oKM">
              <img src={vedio1} alt="" className='img-fluid' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VedioGraphyPortfolio