import React from 'react'
import "../About.css"
function WhatWeDo() {
    return (
        // <div style={{ position: "relative" }} className="what-we-do-top-div">
        //     <div className='What-we-do-main'>
        //         <video className='What-we-do-vedio' autoPlay muted loop src="https://www.makemywebsite.com.au/wp-content/uploads/2022/01/MVI_4003_Trim1.mp4" type="video/mp4"></video>
        //         <div className='What-we-do-overlay'></div>
        //         <div className='discreption'>
        //             <div className='container'>
        //             <div className='what-we-do-heading'>
        //                 <h2>What We Do</h2>
        //             </div>
        //             <div className='what-we-do-paragraph'>
        //                 Make My Website offers end-to-end strategic web solutions with a focus on customer satisfaction. Our mission is simple- to build you a website that aligns with your goals, take a strategic route, and market you online. With over 400+ reviews on Google, Facebook, Oneflare, and Word of Mouth, we have been rated highly credible for the work we do.
        //                 We infuse creativity in your online space and make it a captivating experience for the users on the world wide web.
        //                 <br />
        //                 <br />
        //                 Are yosu looking for a cutting-edge website? We are here to help!
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <section className='what-we-do'>
            <div className='what-we-do-1'>
                <video className='What-we-do-vedio' autoPlay muted loop src="https://www.makemywebsite.com.au/wp-content/uploads/2022/01/MVI_4003_Trim1.mp4" type="video/mp4"></video>
            </div>
            <div className='vedio-overlay-dummy'></div>
            <div className='container'>
                <div className='vedio-text-overlay'>
                    <section className='vedio-overlay-sections'>
                        <div className='vedio-overlay-dummy1'></div>
                        <div className='container'>
                            <div className='vedio-text-overlay'>
                                <div className='vedio-text-overlay-1'>
                                    <div className='what-do'>
                                        <h2>What We Do</h2>
                                    </div>
                                </div>
                                <div className='what-we-do-paragraph'>
                                    <div className='bottom-paragraph'>Make My Website offers end-to-end strategic web solutions with a focus on customer satisfaction. Our mission is simple- to build you a website that aligns with your goals, take a strategic route, and market you online. With over 400+ reviews on Google, Facebook, Oneflare, and Word of Mouth, we have been rated highly credible for the work we do.
                                        We infuse creativity in your online space and make it a captivating experience for the users on the world wide web. <br /><br />Are you looking for a cutting-edge website? We are here to help!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
export default WhatWeDo