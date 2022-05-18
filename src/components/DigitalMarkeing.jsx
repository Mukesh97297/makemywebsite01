import React from 'react'
import Lottie from "lottie-react";
import Digitalmarketing from '../animation/DigitalMarketing.json'
import ppc from '../images/ppc-icon.png'
import socialmedia from '../images/social-media-marketing-icon.png'
import seo from '../images/seo-icon.png'
import content from '../images/content-icon.png'
import ServiceDelivery from './ServiceDelivery';

function DigitalMarkeing() {
    return (
        <div>
           
            <div className="container-fluid pl-5 pt-3" id="about-container">
                <div className="row pt-5">
                    <div className="col-md-12 py-5 pl-5 DigitalMarkeing">
                        <h1 className='pl-4 pt-5'>
                            Digital Marketing <hr className='hr'></hr>
                        </h1>
                        <h2 className='pl-4'>
                            Cutting-Edge Strategies To Level Up <br /> Businesses Digitally
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
            <div className='container-fluid' >
                <div className='container py-5'>
                    <div className='row py-5'>
                        <div className='col-lg-7 animated-section'>
                            <p>Even the best of websites without a good reach, drop bland into the market since it gets no
                                audience to avail the purposes it is built for. By marketing digitally, as a business owner,
                                you reach out to the right demographic thus making conversion a much faster and simpler
                                process than normal.</p>
                            <p>Even the best of websites without a good reach, drop bland into the market since it gets
                                no audience to avail the purposes it is built for. By marketing digitally, as a business
                                owner, you reach out to the right demographic thus making conversion a much faster and
                                simpler process than normal. </p>
                            <p>Our services are aimed at helping your brand to gain visibility, and establish a strong
                                presence amidst a wider audience where you get noticed for all the good work you are doing.
                                <strong>Digital marketing</strong> is nothing but the umbrella term for marketing methodologies
                                used to grow your business on the web. </p>
                        </div>
                        <div className='col-lg-5'>
                            <Lottie animationData={Digitalmarketing} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                    <div className='row Digitalmarketing-p'>
                        <p>An effective approach will be a blend of various methodologies,
                            and consistent efforts with innovative service models to achieve a result-oriented outcome.</p>
                        <p>We have worked with clients from different industries,
                            and understand the thought process of different clientele, which certainly helps
                            us hit the bullseye. Having said that, it is a gradual process that requires
                            sheer commitment, and continuous work.</p>
                        <p>If we had to describe Digital Marketing in one line, it would simply be, <br />
                            <i>“ Digital marketing is a marathon and not a sprint race.”</i> <br />
                            Because certainly, <br />
                            <i> “ Great things take time.”</i></p>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: "#E8E8E86B" }}>
                <div className='container'>
                    <div className='row justify-content-center DigitalMarkeing py-5'>
                        <span>Explore an array of services that we offer under Digital Marketing,
                            and reach <br /> out to us for a quick chat- let’s develop a growth strategy for you.</span>
                    </div>
                    <div className='row py-5'>
                        <div className='col-lg-3 seo'>
                            <img src={seo} alt="" height='170' width='170' />
                            <h5 className='py-4'><u>Search Engine Optimization</u></h5>
                        </div>
                        <div className='col-lg-3 socialmedia'>
                            <img src={socialmedia} alt="" height='170' width='170' />
                            <h5 className='py-4'><u>Google Ads & Pay Per Click</u></h5>
                        </div>
                        <div className='col-lg-3 content'>
                            <img src={content} alt="" height='170' width='170'/>
                            <h5 className='py-4'><u>Content Marketing</u></h5>
                        </div>
                        <div className='col-lg-3 ppc'>
                            <img src={ppc } alt=""height='170' width='170' />
                            <h5 className='py-4'><u>Google Ads & Pay Per Click</u></h5>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceDelivery/>
         
        </div>
    )
}

export default DigitalMarkeing