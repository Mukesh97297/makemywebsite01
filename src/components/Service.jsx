import React from 'react'
import branding from '../animation/Branding.json'
import design from '../animation/WebDesign.json'
import customer from '../animation/CustomerCare.json'
import digital from '../animation/DigitalMarketing.json'
import email from '../animation/EmailHost.json'
import photography from '../animation/Photography.json'
import Lottie from "lottie-react";
function Service() {
    return (
        <div>
            <section className='Our-service'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <h2 className='service-h2'>Our Services</h2>
                            <div className='service-paragraph'>Our focus is on designing stunning, professional, and optimised <br></br>
                                websites to help you meet your business goals and succeed online.
                            </div>
                        </div>
                        <div className='col-lg-3 service-btn'>
                            <button className='btn viewbtn'>VIEW ALL SERVICES</button>
                        </div>

                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4' >
                            <div className='card service-card pt-3'>
                                <Lottie animationData={design} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Web Design and<br></br> Development</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <button className='btn overlay-btn'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card service-card pt-3'>
                                <Lottie animationData={digital} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Digital Marketing</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <button className='btn overlay-btn'>Read More</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4' >
                            <div className='card service-card pt-3'>
                                <Lottie animationData={branding} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Branding</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.

                                        <div className='pt-3'>
                                            <button className='btn overlay-btn'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card service-card pt-3'>
                                <Lottie animationData={email} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Web & Email Hosting</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <button className='btn overlay-btn'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card service-card pt-3'>
                                <Lottie animationData={photography} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Photography And <br></br> Videography</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <button className='btn overlay-btn'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card service-card pt-3'>
                                <Lottie animationData={customer} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Customer Care</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <button className='btn overlay-btn'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Service