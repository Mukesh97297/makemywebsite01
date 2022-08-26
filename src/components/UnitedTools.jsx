import React from 'react'
import "../UnitedTools.css"
import img1 from "../images/ut1.jpg"
import img2 from "../images/ut4.jpg"
import img3 from "../images/ut3.jpg"
import img4 from "../images/ut2.jpg"
import Link from "react-router-dom"
import Globe from "../animation/Website-Glope.json"
import Lottie from "lottie-react";
function UnitedTools() {
    return (
        <div>
            <section className='main-unitedtool-section'>
                <div className='unitedtools-ovelay'></div>
                <div className='container unitedtool-container-1'>
                    <div className='row justify-content-center'>
                        <div className='united-h1'>
                            <h1>United Tools</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='united-tool-section-2'>
                <div className='container'>
                    <section>
                        <div>
                            <div className='the-united-tool'>
                                <h2>The United Tools Group is Australia’s most trusted group of tool experts.</h2>
                                With over 35 stores across Australia, United Tools Group provides industry, trade, and DIY customers with access to premium quality tools at the most competitive prices. <br /><br />
                                The United Tools Group are a buying group that provide independent tool stores with the opportunity to gain access to great buying opportunities, general business, and marketing support 24/7 all while remaining independent. <br /> <br />
                                Our team diligently worked on building a professional website, and carried out photography and drone shoot to deliver a product that meets client expectations.
                                 <div className='row justify-content-center'>
                                 <div className='d-flex'>
                                <Lottie animationData={Globe} loop={true} autoplay={true} className="website-globe"   />
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

export default UnitedTools