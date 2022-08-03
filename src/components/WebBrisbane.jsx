import React from 'react'
import HighPerformance from "../images/high-performing.png";
import branding from '../animation/Branding.json'
import design from '../animation/WebDesign.json'
import customer from '../animation/CustomerCare.json'
import digital from '../animation/DigitalMarketing.json'
import email from '../animation/EmailHost.json'
import photography from '../animation/Photography.json'
import aiming from "../images/aiming-To.png"
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom"
import "../QuelityDesign.css"
import google from '../images/google-partner-licon.png'
import shopify from '../images/Shopify-licon.png'
import commerce from '../images/woocommerce-licon.png'
import wordpress from '../images/wordpress-licon.png'
import magento from '../images/Magento-licon.png'
import HireEmployes from "../images/hire-an-employee-24x7-1.png"
import Customer from './Customer';
import ServiceDelivery from './ServiceDelivery';
import { Link } from 'react-router-dom'
import "../Sydney.css"
import Landing from "../animation/Landing.json"
import WebDesign from './WebDesign'

function WebBrisbane() {
    function goToTop() {
        window.scrollTo({ top: 0 })
    }
    return (
        <div>
            <div className='Sydney-main-div' style={{ padding: "150px 0px 100px 0px" }}>
                <div className='container'>
                    <div className='row justify-content-center Sydney-first-row'>
                        <div className='col-lg-7 Sydney-first-col-7'>
                            <h2>Premium web design agency in Brisbane offering
                                <span> TAILORED SOLUTIONS </span>
                            </h2>
                            <div className='py-2'>
                                <p>Make My Website is an innovative web design agency that follows a result-oriented approach to help businesses prosper online. We are pioneers in the industry who empower local businesses to utilise the digital space through innovative solutions and get unmatched results!</p>
                            </div>
                            <div className='get-a-free-btn py-2'>
                                <Link to="/"><span><span>
                                    Get a free consultation
                                </span></span>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <Lottie animationData={Landing} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <WebDesign />
            <section className='Ouelity-Design'>
                <div className='container py-4'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='d-flex Queality-web-design-services'>
                                <span>
                                    <i className='fas fa-dot-circle'></i>
                                </span>
                                <span><h2>Quality web design services </h2></span>
                            </div>
                            <div className='Quality-paragraph'>
                                <p>We cater for all aspects of web design & online marketing services</p>
                            </div>
                        </div>
                        <div className='col-md-4 service-btn mb-3'>
                            <NavLink to="/service" onClick={goToTop} className='btn viewbtn'>VIEW ALL SERVICES</NavLink>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4' >
                            <div className='card service-card pt-3'>
                                <Lottie animationData={design} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Web Design and<br></br> Development</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <NavLink to='/service/WebDesignDelovpment' onClick={goToTop} className='btn overlay-btn'>Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card service-card pt-3'>
                                <Lottie animationData={digital} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Digital Marketing</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <NavLink to='/service/DigitalMarkeing' onClick={goToTop} className='btn overlay-btn'>Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4' >
                            <div className='card service-card pt-3'>
                                <Lottie animationData={branding} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Branding</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <NavLink to='/service/branding' onClick={goToTop} className='btn overlay-btn'>Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card service-card pt-3'>
                                <Lottie animationData={email} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Web & Email Hosting</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <NavLink to='/service/WebEmailHosting' onClick={goToTop} className='btn overlay-btn'>Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card service-card pt-3'>
                                <Lottie animationData={photography} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Photography And <br></br> Videography</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <NavLink to='/service/PhotoGraphyVideoGraphy' onClick={goToTop} className='btn overlay-btn'>Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card service-card pt-3'>
                                <Lottie animationData={customer} loop={true} autoplay={true} style={{ height: "250px", width: "100%" }} />
                                <div className='service-title'>
                                    <h4>Customer Care</h4>
                                </div>
                                <div className="overlay">
                                    <div className="text">Make My Website embraces technological advancement and puts forth
                                        what’s the best for your brand. Your online presence is important to your business, and to us for it exhibits our passion and creativity.
                                        <div className='pt-3'>
                                            <NavLink to='/service/CustomerCare' onClick={goToTop} className='btn overlay-btn'>Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='a-tailored-web-design-section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='d-flex a-tailored-web-design mb-4'>
                            <span>
                                <i className='fas fa-dot-circle'></i>
                            </span>
                            <span><h2>Adaptive web design </h2></span>
                        </div>
                        <div className='a-tailored-paragraph text-center'>
                            <p>Stimulating your growth by capitalising on our experiences and knowledge</p>
                        </div>
                    </div>
                    <div className='row justify-content-center img-and-para-section'>
                        <div className='col-lg-4'>
                            <div className='a-credible-agency'>
                                <p>Cutting-edge strategies</p>
                                <div className='border-line'></div>
                                <div className='a-credible-agency-para'>
                                    We offer innovative solutions by means of cutting-edge strategies and ensure that your brand is well-established on the world wide web. We create websites that are user-friendly, fully-functional, and help you grow your business irrespective of your niche.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={aiming} alt="aiming" className='img-fluid' />
                        </div>
                        <div className='col-lg-4'>
                            <div className='robust-methodologies'>
                                <p>Experienced & reliable teams</p>
                                <div className='border-line-red'></div>
                                <div className='robust-methodologies-para'>
                                    Our team is experienced in working with clients from a range of industries and have 400+ reviews on Google, Facebook, OneFlare and Word of Mouth because of the reliability and the quality of work we offer.
                                </div>
                            </div>
                            <div className='empowering-local-businesses'>
                                <p>Supporting local businesses</p>
                                <div className='border-line-red'></div>
                                <div className='empowering-local-businesses-para'>
                                    We envision to support as many local businesses as we can by helping them go online and expand their horizons. The present age certainly requires every business to have a web presence and we help our local businesses with the same.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='exeprt-web-designer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='d-flex expert-title py-3'>
                                <span> <i className='fas fa-dot-circle'></i></span>
                                <span><h2>Web designers in Brisbane</h2></span>
                            </div>
                            <div className='expert-para '>
                                <p>A powerhouse of professionals creating quality websites that align with your brand</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div>
                                    Make My Website is a highly-rated web design agency that aims at scaling up businesses and helps them go online by creating fully-functional websites. Our team is backed by years of experience, and is a powerhouse of creativity. We work towards delivering websites via innovative service models to help them align with your brand.
                                </div>
                                <br />
                                <div>
                                    We have worked with more than 800 clients across Australia, and have delivered personalised solutions for businesses from a range of industries.
                                </div>
                                <br />
                                <div>If you are looking for a high-quality website that is the face of your business, get in touch with our expert team today.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='high-perform-img-section'>
                                <img src={HighPerformance} alt="highperforming" height="463" width="500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container-fluid' style={{ backgroundColor: "#000000D1", padding: "20px 0px 20px 0px" }} >
                    <div className='container'>
                        <div className='Teams'>
                            <div className='row justify-content-center '>
                                <div className='d-flex we-design-partner mb-4'>
                                    <span> <i className='fas fa-dot-circle'></i>  </span>
                                    <span><h3>Web design partners</h3></span>
                                </div>
                                <div className='Team'>	We team up with the leading names of the industry</div>
                                <div className='Team1'>We have established a close channel with major technology brands across the world and it enables us to bring the best to every business, every time.	</div>
                            </div>
                            <div className='row justify-content-center' style={{ padding: "20px 0px 20px 0px" }}>
                                <div className='col-lg-2 mmw-logos-1' >
                                    <img src={google} alt="google" className='img-fluid' />
                                </div>
                                <div className='col-lg-2 mmw-logos-1' >
                                    <img src={shopify} alt="shopify" className='img-fluid' />
                                </div>
                                <div className='col-lg-2 mmw-logos-1' >
                                    <img src={commerce} alt="commerce" className='img-fluid' />
                                </div>
                                <div className='col-lg-2 mmw-logos-1' >
                                    <img src={wordpress} alt="wordpress" className='img-fluid' />
                                </div>
                                <div className='col-lg-2 mmw-logos-1' >
                                    <img src={magento} alt="magento" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='growing-online'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='high-perform-img-section pt-4'>
                                <img src={HireEmployes} alt="highperforming" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex expert-title py-3'>
                                <span> <i className='fas fa-dot-circle'></i></span>
                                <span><h2>Professional Web design in Brisbane</h2></span>
                            </div>
                            <div className='expert-para'>
                                <p>Establish your credibility in a competitive market</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div className='first'>
                                    If you have a website designed for your business, it helps you establish credibility in a competitive market. Website is an internet advertising billboard for your business, and if it is designed appropriately, it can widen your reach and help you expand your business. Website is an employee that works for you round the clock, and is able to put the word out in front of internet users who could be your potential customers.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Customer />
            </section>
            {/* <section className='friquently-ask-questions'>
                <div className='container'>
                    <div className='asked-questions'>
                        <h3>Frequently asked questions</h3>
                    </div>
                    <div className='hide-and-show'>
                        <div className='container'>
                            <div className='text-left'>
                                <div className='mb-5'>
                                    <div className='What-web-design'>
                                    <span className='float-right'></span>
                                       <NavLink to="/">What is WEB DESIGN?</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <ServiceDelivery />
            </section>
        </div>
    )
}

export default WebBrisbane