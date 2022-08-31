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
import wordpressDesign from "../images/WordPress-website-design-Converted.png"
import eCommerce from "../images/eCommerce-website-design-Converted-1.png"
import customWebsite from "../images/Custom-website-design-Converted.png"
import about from '../images/makemywebiste-about.jpeg'
import experience from '../images/Years-Of-Expertise (1).png';
import client from '../images/Satisfied-Clients.png';
import owned from '../images/Australian_Owned_mmw.png';
import design1 from '../images/5-star-rated-Web-Design-Agency.png'
import CountUp from 'react-countup';

function DesignPerth() {
    function goToTop() {
        window.scrollTo({ top: 0 })
    }
    return (
        <div>
            <div className='Sydney-main-div' style={{ padding: "150px 0px 100px 0px" }}>
                <div className='container'>
                    <div className='row justify-content-center Sydney-first-row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-7 Sydney-first-col-7'>
                            <h2>An Expert Team Delivering Premium Web Design Services in
                                <span>PERTH</span>
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
                                <i className='fas fa-dot-circle dot-cercle'></i> Web Design Perth
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
                    <div className='row justify-content-center about-counter-row'>
                        <div className='col-lg-3 col-md-6 py-5 c'>
                            <div className='counter'>
                                <img src={experience} alt="experience" height="60px" width="60px" />
                                <div className='about-count-h pt-4'><CountUp start={0} end={10} duration={10} />+</div>
                                <h4 className='about-counter-p py-2'>Years Of Expertise</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 py-5 c' >
                            <div className='counter'>
                                <img src={owned} alt="owned" height="60px" width="60px" />
                                <div className='about-count-h pt-4'><CountUp start={0} end={100} duration={10} />%</div>
                                <h4 className='about-counter-p py-2'>Australian Owned</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 py-5 c' >
                            <div className='counter'>
                                <img src={design1} alt="design" height="60px" width="60px" />
                                <div className='about-count-h pt-4'> <CountUp start={0} end={5} duration={10} />-Star rated</div>
                                <h4 className='about-counter-p py-2'>Web Design Agency</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 py-5 c' >
                            <div>
                                <img src={client} alt="clients" height="60px" width="60px" />
                                <div className='about-count-h pt-4'>
                                    <CountUp start={0} end={800} duration={10} />+</div>
                                <h4 className='about-counter-p py-2' >Satisfied Clients</h4>
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
                            <span><h2>Holistic Web Design Services </h2></span>
                        </div>
                        <div className='a-tailored-paragraph text-center'>
                            <p>Helping Local Businesses Make It Big With Our Tailored Web Design Services</p>
                        </div>
                    </div>
                    <div className='row justify-content-center img-and-para-section'>
                        <div className='col-lg-4'>
                            <div className='a-credible-agency'>
                                <p>Up-to-date Website</p>
                                <div className='border-line'></div>
                                <div className='a-credible-agency-para'>
                                    We create websites that walk hand-in-hand with time by incorporating all the recent web design innovations into them. What you will get with us is a fully functional website that is always updated and ready to make use of the digital wave in its favour.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={aiming} alt="aiming" className='img-fluid' />
                        </div>
                        <div className='col-lg-4'>
                            <div className='robust-methodologies'>
                                <p>A Name You Can Trust</p>
                                <div className='border-line-red'></div>
                                <div className='robust-methodologies-para'>
                                    We are a reliable and credible team of experts with a long line of customers vouching for its services. We are a top-rated web design agency in Perth with over 400+ reviews on Google, Facebook, Oneflare, and Word of Mouth. So, trusting us won’t be a gamble but a strategic move.
                                </div>
                            </div>
                            <div className='empowering-local-businesses'>
                                <p>Creating a Meaningful Online Presence</p>
                                <div className='border-line-red'></div>
                                <div className='empowering-local-businesses-para'>
                                    We don’t just create an average online presence but the kind that will take your brand’s visibility to the next level and help your local business take a big leap forward. Reach your target customers the modern way with our specially crafted innovative websites.
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
                                <span><h2>Top-Rated Web Design Agency in Perth</h2></span>
                            </div>
                            <div className='expert-para '>
                                <p>Web Designers in Perth Developing Reliable and Innovative Digital Footprints For Your Business</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div>
                                    We are Make My Website, a name that you can trust with all your Web Design needs in Perth. We bring innovation, creativity, and efficiency to the picture and develop websites that will not just echo your brand’s vision but help this vision reach your target audience. Ours is a team of experts that employ proven ROI-driven strategies to ensure that your website stands tall on all grounds and stands out from the sea of competitors.
                                </div>
                                <br />
                                <div>
                                    Having catered to the web design needs of over 800 clients, we are growing each day and are delivering excellence with each website that we create. Our work doesn’t end the moment we finish creating a website but lasts through the years, updating and revamping your website whenever the need be. Get in touch with us today and get your ticket to the best web design services in Perth.
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
                                <img src={eCommerce} alt="eccomerce" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex expert-title py-3'>
                                <span> <i className='fas fa-dot-circle'></i></span>
                                <span><h2>Web Design Partners You Can Trust</h2></span>
                            </div>
                            <div className='expert-para'>
                                <p>Responsive Website Design Perth</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div className='first'>
                                    The team at Make My Website offers responsive website design services to ensure that your business stands out in a competitive market. Our expert team is experienced in WordPress, eCommerce, and custom website design and work to best suit your business requirements.
                                </div>
                                <div className='first'>We understand how important it is for your website to be performing well to open growth channels to help expand your horizons. Our team works closely with you to develop a website, be it in Perth, or in any other city Australia-wide, that is able to address your business needs in a holistic manner.</div>
                                <div className='first'>Mentioned below are the different options that we offer as a part of our web design services:</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wordpress-website'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='expert-para'>
                                <p>WordPress website design</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div className='first'>
                                    We have unmatched expertise in utilising this most widely used open-source platform to create exceptional websites for businesses. With over 800 clients in our portfolio, we’ve mastered the art of <b> WordPress website designing</b> and can create anything you aspire for!
                                </div>
                                <br />
                                <div className='first'>Every business has a vision for their business, and our aim is to work in alignment with the same.</div>
                                <div className='first'>We focus on delivering result-driven websites, primarily built on WordPress so you can have full ownership and control over your online presence. If you are a service based business in Perth, feel free to give us a call or write to us to get a better understanding about us and our offerings for small/medium businesses.</div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='high-perform-img-section pt-4'>
                                <img src={wordpressDesign} alt="wordpress" className='img-fluid' />
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
                            <div className='expert-para'>
                                <p>eCommerce website design</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div className='first'>
                                    If you have an eCommerce business, are planning to start one, or are transitioning to online selling, you are in the right place. We offer conversion-friendly <b>ecommerce website design</b> services to make it much easier for your customers to navigate through the website and make a purchase. A user-friendly design plays a major role in converting your prospects to your customers, and we master the same. We have created a number of ecommerce websites for clients in major cities of Australia like Perth, using WooCommerce & Magento and continue to do so with the aim of helping small and medium businesses thrive.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wordpress-website'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='expert-para'>
                                <p>Custom website design</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div className='first'>
                                    Choosing a <b>custom website design service</b> from the team at Make My Website essentially means that everything will be built from scratch. We take down your custom requirements and work with you to build a professional website that helps you establish your brand presence on the web. This includes designing specific sections based on your inputs, our expertise, developing features that you may require to efficiently run your online business, and a lot more.
                                </div>
                                <br />
                                <div className='first'>We love all things technology so it will be a pleasure to discuss how you’d want your website to be! If you are a business in Perth, looking for efficient web design services, get in touch with us today.</div>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='high-perform-img-section pt-4'>
                                <img src={customWebsite} alt="wordpress" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Customer />
            </section>
            <section className='friquently-asked-questions'>
                <div className='row friquently-ask '>
                    <h3>Frequently asked questions</h3>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>How does a website with a good web design help your business grow?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo" className="collapse qustions-simply">
                            In today’s digital world everything happens online. Online is where people go to avail of the services that they are in need of and look for the products that they need. So, if you want your business to survive and grow in this world, you have to create a solid online presence for your business. And this is exactly what a website does. It brings your business to the virtual world and helps find its way to your target audience and helps make the best of the digital wave.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>What services does Make My Website offer?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo1">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo1" className="collapse qustions-simply">
                            Web designing covers not just one but all aspects of creating a website. We offer 360-degree web design assistance covering all elements that a website needs including: <br />
                            <ul>
                                <li>Web design and development</li>
                                <li>Digital Marketing</li>
                                <li>Branding</li>
                                <li>Web and Email hosting</li>
                                <li>Content writing</li>
                                <li>Customer Care</li>
                                <li>Photography and videography</li>
                            </ul>
                            Even when we are done creating your website, our services continue as per your wishes and keep on delivering our services to ensure that your website is always up-to-date.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>What makes Make My Website my best pick in Perth?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo2">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo2" className="collapse qustions-simply">
                            For our team, web designing is not just mere work but something that we put our heart and soul into and this shows in the kind of services that we have delivered till now. We have over 400+ 5- star reviews on diverse platforms and have a record of catering to the needs of over 800 clients since our onset. Our work experience ranges across all domains and we have created websites of all scales, so, all your web design needs would be answered with us efficiently. So, the moment you choose to engage with us, you will be choosing a team that will create for you a responsive, user-friendly, and attractive website.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Do you help with upgrading an existing web design?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo3">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo3" className="collapse qustions-simply">
                            Our services are not limited to creating new websites but we also help revamp and upgrade existing ones to be up-to-date with all the modern innovations and advancements. You can come to us with an intent to change your website’s layout, content, graphics, design or would simply want to make it more responsive and user-friendly and our expert team would be there to efficiently take care of it all. When you come to us, we will have a thorough discussion about your expectations regarding the project, create a proper plan and then proceed accordingly.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Would I always need the assistance of a web design manager for my website?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo4">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo4" className="collapse qustions-simply">
                            This simply depends upon the choice that you make. You can give us the responsibility of managing your website starting from regular security checks, plugin updates, content addition to general maintenance and we will take care of it all with utmost efficiency. Or you can gather from us the general know-how of how things work and manage it on your own and get in touch with us whenever the need be. Whatever you decide, we will be there to offer you complete assistance.
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

export default DesignPerth