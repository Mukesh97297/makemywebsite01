import React from 'react'
import "../Dal.css"
import img4 from "../images/project-Dal-mobileasd.jpeg"
import img1 from "../images/project-Dal123.jpeg"
import img2 from "../images/project-Dal-laptopfsdf.jpeg"
import img3 from "../images/project-Dal-tab-bffdf.jpeg"
import Lottie from "lottie-react";
import dal from "../animation/Website-Glope.json"
function Dal() {
  return (
    <div>
         <section className='main-dal-section'>
                <div className='dal-ovelay'></div>
                <div className='container dal-container-1'>
                    <div className='row justify-content-center'>
                        <div className='dal-h1'>
                            <h1>Dal</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='united-tool-section-2'>
                <div className='container'>
                    <section>
                        <div>
                            <div className='the-united-tool'>
                                <h2>Superior Labels At A Superior Price From Australia’s Premier Manufacturer</h2>
                                DAL offers the best labels and printing supplies in Australia, at the lowest prices, with the quickest turnaround time. <br /><br />
                                As one of the biggest and longest-running label manufacturers in the industry, they provide businesses with unrivalled products, support and service. <br /> <br />
                                We partnered with Dial a Label to create a professional website that stimulates their growth and is highly user-friendly. The outcome was a stunning website as per client needs, a 5-star review, and a long-term relationship as a part of our other services including SEO, Social Media Marketing & Photography.
                                 <div className='row justify-content-center'>
                                 <div className='d-flex'>
                                <Lottie animationData={dal} loop={true} autoplay={true} className="website-globe"   />
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

export default Dal