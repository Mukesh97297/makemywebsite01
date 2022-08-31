import React from 'react'
import { Link } from 'react-router-dom'
import "../Sydney.css"
import Landing from "../animation/Landing.json"
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
import ServiceDelivery from './ServiceDelivery';
import about from '../images/makemywebiste-about.jpeg'

function ModernWorld() {
    function goToTop() {
        window.scrollTo({ top: 0 })
    }
    return (
        <div>
            <div className='Sydney-main-div' style={{ padding: "150px 0px 100px 0px" }}>
                <div className='container'>
                    <div className='row justify-content-center Sydney-first-row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-7 Sydney-first-col-7'>
                            <h2>Make My Website, Creating Innovative Websites Fit for the  <span>MODERN WORLD</span>
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
            <section className='about_section'>
                <div className="container">
                    <div className="row  about_section-2">
                        <div className="col-xl-5  col-sm-12">
                            <div className='trusted'>
                                <div className='trusted-1'>
                                    <span>Trusted by</span>
                                    <p className='p-800'>800+</p>
                                    <p>Clients</p>
                                </div>
                            </div>
                            <div className='shape'>
                                <img src={about} alt="about" className="img-fluid rounded-pill" />
                                <span className='shape-2'></span>
                                <span className='shape-3'></span>
                            </div>
                        </div>
                        <div className='col-xl-7 col-md-12 about_section-3'>
                            <h1 className='about-p mb-4'>
                                <i className='fas fa-dot-circle dot-cercle'></i> Web Design Newcastle
                            </h1>
                            <div id="demo" className="carousel slide about-crousal mb-5" data-ride="carousel">
                                <div className="carousel-inner p">
                                    <div className="carousel-item active">
                                        <div className='carousel-h'>Complete Web Solution  In Australia</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='carousel-h'> Bringin in Innovation to web design</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='carousel-h'>Infusing creativity in  your online space</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='carousel-h'>Capativating designs that tell stories</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='carousel-h'>Prioritising customer satisfactions all among</div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-xl-6 web-design-btn-col '>
                                    <div className='d-flex web-design-btn'>
                                        <span> <i aria-hidden={true} className="fas fa-check " /></span>
                                        <span>High-end solutions for <br /> small & large business</span>
                                    </div>
                                </div>
                                <div className='col-xl-6  web-design-btn-col'>
                                    <div className='d-flex web-design-btn'>
                                        <i aria-hidden={true} className="fas fa-check" />
                                        <span>Helping local <br /> businesses go online</span>
                                    </div>
                                </div>
                            </div>
                            <div className='paragraph'>
                                We’ve put on our creative hats to level up web design, Australia-wide. It’s about time
                                to put forth your business on the world wide web and be second to none.
                                Innovation is the key to creating designs that don’t  let users hit the “back” button, and that is what we strive for at Make My Website.
                            </div>
                            <div>
                                <p className='paragraph'>
                                    If you’ve envisioned to be the foremost choice for your clients- it’s time to make a decision.
                                    We are curious to know about your goals, and venture
                                    into helping you to achieve those, using the digital space. So let’s get in touch and build a stunning website for you.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

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
                            <span><h2>Web Design Newcastle</h2></span>
                        </div>
                        <div className='a-tailored-paragraph text-center'>
                            <p>A Holistic Approach for an Overall Efficient and Satisfactory Web Design Experience</p>
                        </div>
                    </div>
                    <div className='row justify-content-center img-and-para-section'>
                        <div className='col-lg-4'>
                            <div className='a-credible-agency'>
                                <p>Responsive Websites</p>
                                <div className='border-line'></div>
                                <div className='a-credible-agency-para'>
                                    At Make My website, we build responsive websites that are innovative, efficient and creative. We walk hand in hand with modern times and make sure that your websites do too by offering innovative, ROI-driven web design solutions.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={aiming} alt="aiming" className='img-fluid' />
                        </div>
                        <div className='col-lg-4'>
                            <div className='robust-methodologies'>
                                <p>A Name that Echoes Credibility</p>
                                <div className='border-line-red'></div>
                                <div className='robust-methodologies-para'>
                                    With over 400+ 5-star reviews on Google, Facebook, Oneflare, and Word of Mouth, we are a name that can be trusted with all your web design needs in Newcastle. We deliver excellence with each project that we undertake and these reviews are our testimonials.
                                </div>
                            </div>
                            <div className='empowering-local-businesses'>
                                <p>Helping Businesses Scale-up</p>
                                <div className='border-line-red'></div>
                                <div className='empowering-local-businesses-para'>
                                    We take your local businesses online and help reach your target audience in the quickest and most efficient manner. The websites that we develop are creative and user-friendly so, with us, your business would always form a positive first impression online.
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
                                <span><h2>Web Design Experts</h2></span>
                            </div>
                            <div className='expert-para '>
                                <p>A Team of Experts Creating an Impactful Digital Presence for Your Business</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div>
                                    We are Make My Website, a web agency in Newcastle catering to the diverse web design needs of local businesses around. We deliver to your doorstep complete web-design solutions starting from the layout to the graphics and written content that goes on your website. We follow a holistic approach and have served over 800 clients till now with our fully-functional websites.
                                </div>
                                <br />
                                <div>
                                    For our team of web designers in Newcastle, web designing is an art that they have mastered and this mastery is echoed by each work that they undertake. When you choose to develop your website with us, you would be opening the door to a website that would potentially take your business to greater heights. So, engage with us and have a website that echoes your brand’s ethos and brings in leads that would then become your customers for life.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='high-perform-img-section'>
                                <img src={HighPerformance} alt="highperforming" className='img-fluid' />
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
                                <img src={HireEmployes} alt="eccomerce" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex expert-title py-3'>
                                <span> <i className='fas fa-dot-circle'></i></span>
                                <span><h2>A Credible Web Design Agency in Newcastle</h2></span>
                            </div>
                            <div className='geelong-para'>
                                <p>Run Ahead in This Digital Race With a Top-notch Web Design</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div className='first'>
                                    Today all businesses are going online to stand out from the crowd and cut ahead of the competition. Simply because just having a 9-10 hour presence is not enough. What you need is a 24*7 presence that can immediately cater to the needs of your potential clients and this is exactly what a website brings to the picture. With our web design experts in Newcastle, build a website and build for yourself an employee who will work in favour of your business round-the-clock.
                                </div>
                                <div className='first'>
                                    So, with a top-notch website, be the quick and expert answer/solution that we all seem to be looking for nowadays.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='friquently-asked-questions'>
                <div className='row friquently-ask '>
                    <h3>Frequently asked questions</h3>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Can I manage my website on my own once you are done with the web design work?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo" className="collapse qustions-simply">
                            The answer to this is both yes and no. Our assistance doesn’t end the moment we are done developing the website but lasts throughout. For you, we engage in regular security checks, timely update your website and do all the other needful things to ensure that your website always runs smoothly. But in case you wish to manage your website on your own, we will assist you with that too by providing you with knowledge regarding the basics involved. So, simply put, this all depends upon your choice
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Does a local website need to invest in Web Design?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo1">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo1" className="collapse qustions-simply">
                            No matter the scale and range of your business, a good website today is the key to your company’s success. We live in a world where most of us spend a significant part of our day online and purchase products and avail of different services through this medium. So, if you want to be the first preference of these people, you need to have an online presence. This will first enhance the visibility of your brand, bring in leads and then convert them into customers.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>What all comes under the purview of your web design services?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo2">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo2" className="collapse qustions-simply">
                            The services that we provide are holistic. Each and every element that you would need for your website to be up and running, our experts would be providing you with it all. From the initial layout, visuals to the content that will put forward your brand’s identity and ethos would all be taken care of efficiently by our web design experts in Newcastle. <br />
                            <b>The services that we provide include:</b>
                            <ul>
                                <li>Web design and development</li>
                                <li>Digital Marketing</li>
                                <li>Branding</li>
                                <li>Web and Email hosting</li>
                                <li>Content writing</li>
                                <li>Customer Care</li>
                                <li>Photography and videography</li>
                                <br />
                                To know more about our services, give us a call today.
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Are there any hidden costs associated with your web design services?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo3">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo3" className="collapse qustions-simply">
                            No, when it comes to the cost involved, we offer complete transparency to all our customers. The moment you get in touch with us, we will have a thorough discussion regarding the scope of the project, like what exactly do you expect from our web design services in Newcastle. Once we have clarity on that ground, we will offer you a quote that will clearly define how much each individual element costs. So, nowhere along the line, you would have to pay any hidden cost but only what was quoted to you before starting the project.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>What happens to my website in case I shift to another web design agency?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo4">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo4" className="collapse qustions-simply">
                            While we would be the ones creating your website, you will always be the actual owners and the website would be created in your name. So, whatever you wish to do with your website once we finish working on it depends entirely upon you and you would in no way be limited from doing so. So, basically, you will have 100% ownership over your website and even if you decide to move on to another agency, this won’t change.
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ServiceDelivery />
            </section>
        </div>
    )
}

export default ModernWorld