import React from 'react'
import '../DigitalMarketing.css'
import Lottie from "lottie-react";
import Digitalmarketing from '../animation/DigitalMarketing.json'
import ppc from '../images/ppc-icon.png'
import socialmedia from '../images/social-media-marketing-icon.png'
import seo from '../images/seo-icon.png'
import content from '../images/content-icon.png'
import ServiceDelivery from './ServiceDelivery';
import { Link } from 'react-router-dom';
function DigitalMarkeing() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
            <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Digital Marketing 
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2>
                            Cutting-Edge Strategies To Level Up Businesses Digitally
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid marketing-section'>
                <div className='container digital-market'>
                    <div className='row '>
                        <div className='col-md-7 animated-section'>
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
                                <Link to='/service/DigitalMarkeing'>Digital marketing</Link> is nothing but the umbrella term for marketing methodologies
                                used to grow your business on the web. </p>
                        </div>
                        <div className='col-md-5'>
                            <Lottie animationData={Digitalmarketing} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                    <div className='row Digitalmarketing-p'>
                        <p >An effective approach will be a blend of various methodologies,
                            and consistent efforts with innovative service models to achieve a result-oriented outcome.</p>
                        <p >We have worked with clients from different industries,
                            and understand the thought process of different clientele, which certainly helps
                            us hit the bullseye. Having said that, it is a gradual process that requires
                            sheer commitment, and continuous work.</p>
                        <p >If we had to describe Digital Marketing in one line, it would simply be, <br />
                            <strong> <i>“ Digital marketing is a marathon and not a sprint race.”</i></strong> <br />
                            Because certainly, <br />
                            <strong><i> “ Great things take time.”</i></strong></p>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: "#E8E8E86B" }}>
                <div className='container digital-explore'>
                    <div className='row justify-content-center DigitalMarkeing'>
                        <span>Explore an array of services that we offer under Digital Marketing,
                            and reach out to us for a quick chat- let’s develop a growth strategy for you.</span>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 seo'>
                            <img src={seo} alt="" className='ngsgsg' />
                            <h5 className='py-4'><u>Search Engine Optimization</u></h5>
                        </div>
                        <div className='col-md-3 seo'>
                            <img src={socialmedia} alt="" className='ngsgsg' />
                            <h5 className='py-4'><u>Google Ads & Pay Per Click</u></h5>
                        </div>
                        <div className='col-md-3 seo'>
                            <img src={content} alt="" className='ngsgsg' />
                            <h5 className='py-4'><u>Content Marketing</u></h5>
                        </div>
                        <div className='col-md-3 seo'>
                            <img src={ppc} alt="" className='ngsgsg' />
                            <h5 className='py-4'><u>Google Ads & Pay Per Click</u></h5>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceDelivery />

        </div>
    )
}

export default DigitalMarkeing