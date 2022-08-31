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
import money from "../images/hire-an-employee-24x7-1.png"
import ServiceDelivery from './ServiceDelivery';
import about from '../images/makemywebiste-about.jpeg'
import experience from '../images/Years-Of-Expertise (1).png';
import client from '../images/Satisfied-Clients.png';
import owned from '../images/Australian_Owned_mmw.png';
import design1 from '../images/5-star-rated-Web-Design-Agency.png'
import CountUp from 'react-countup';
function AdalaideDesign() {
    function goToTop() {
        window.scrollTo({ top: 0 })
    }
    return (
        <div>
            <div className='Sydney-main-div' style={{ padding: "150px 0px 100px 0px" }}>
                <div className='container'>
                    <div className='row justify-content-center Sydney-first-row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-7 Sydney-first-col-7'>
                            <h2>One of Adeleide’s top web design agency creating <span>INNOVATIVE WEBSITES</span>
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
                                <i className='fas fa-dot-circle dot-cercle'></i> Web Design Adelaide
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
                            <span><h2>Web design Adelaide</h2></span>
                        </div>
                        <div className='a-tailored-paragraph text-center'>
                            <p>Creating websites that evidently impact your growth on the world wide web</p>
                        </div>
                    </div>
                    <div className='row justify-content-center img-and-para-section'>
                        <div className='col-lg-4'>
                            <div className='a-credible-agency'>
                                <p>Industry-specific websites</p>
                                <div className='border-line'></div>
                                <div className='a-credible-agency-para'>
                                    We understand that every industry is different, and have specific requirements. Our team is experienced in working with clients from a range of industries and ensures to meet your requirements. We have 400+ reviews on Google, Facebook, OneFlare and Word of Mouth and have been rated highly for our work.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={aiming} alt="aiming" className='img-fluid' />
                        </div>
                        <div className='col-lg-4'>
                            <div className='robust-methodologies'>
                                <p>High-performing solutions</p>
                                <div className='border-line-red'></div>
                                <div className='robust-methodologies-para'>
                                    We offer high-performing solutions by following a strategic approach to help businesses grow in the digital space. We design websites that are responsive, user-friendly, and align with your brand ethos.
                                </div>
                            </div>
                            <div className='empowering-local-businesses'>
                                <p>End-to-end support</p>
                                <div className='border-line-red'></div>
                                <div className='empowering-local-businesses-para'>
                                    We provide end-to-end support to our clients, and support as many local businesses as we can by helping them conquer the digital space. Having a web presence is as important as having an office or a standalone store and hence, we offer as much assistance as you need to have an established web presence.
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
                                <span><h2>Web designers in Adelaide</h2></span>
                            </div>
                            <div className='expert-para '>
                                <p>A team of professionals committed to provide quality user experiences</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div>
                                    Make My Website is a full-service digital agency that offers a range of services and is backed by a team of professionals committed to providing quality user experiences. We have years of experience in the industry and work towards making it easier for the users to navigate through your website and engage with your services/products. We have worked with more than 800 clients across Australia, and have delivered personalised solutions for businesses from a range of industries.
                                </div>
                                <br />
                                <div>
                                    If you are looking to build a face of your business online, get in touch with our expert team today.
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
                                <img src={money} alt="eccomerce" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex expert-title py-3'>
                                <span> <i className='fas fa-dot-circle'></i></span>
                                <span><h2>Web design in Adelaide</h2></span>
                            </div>
                            <div className='expert-para'>
                                <p>Take your next step towards growth</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div className='first'>
                                    It’s about time to take your next step towards growth. Get a website designed from experts and enhance your visibility throughout the web. A website allows you to widen your horizons, by helping you become discoverable- not only in your local area but beyond, in front of those who are looking to avail of your products and services. Nowadays, every industry is competitive, and having a website is important to have a competitive edge so you can directly offer your products and services to the customers via your own online platform.
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
                                <span>Why is the importance of good web design?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo" className="collapse qustions-simply">
                            Most people jump on the search engines to find solutions to their problems. Whether you are a service provider, or a product based business, your potential customers will be looking for you online. A good web design allows you to showcase and build a connection with your target audience. It gives you a platform to share about your business, approach, service offerings, and testimonials. So, if you are looking to expand your reach, it is important to have quality web design on your website.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>What other services can you offer apart from building websites?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo1">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo1" className="collapse qustions-simply">
                            Make My Website is a full-service digital agency that offers all services to help you build your online business. Apart from building websites, we also offer Digital Marketing, Branding, Content writing, Web and email hosting, Technical support, Photography and videography services. Hence, we have you covered for everything you need to build your online presence from scratch and continue to build on the same.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Why is Make My Website your preferred web design partner in Adelaide?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo2">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo2" className="collapse qustions-simply">
                            Make My Website offers a range of services right from web design, SEO, SMM, content writing, and branding to photography and videography. We have worked with a range of industries over the years and understand the nitty-gritty of the same to provide you with a tailored solution. With over 800 websites in our portfolio, we take pride in being a preferred web design partner for most businesses. Feel free to go through the reviews shared by our clients to be assured of our reliability and credibility. Our team of experts is committed to provide you with high quality services as per your requirements and is certainly your preferred web design partner in Adelaide.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>What platforms do you use to design the websites?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo3">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo3" className="collapse qustions-simply">
                            We are well versed with major platforms such as WordPress, shopify, and magento. Most of our clients prefer to have the ownership of their website and hence, choose to get a website on WordPress as it is an open source platform. We still use other platforms depending on client requirements, but recommend WordPress for long-term use, and less monthly costs/maintenance.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Do you create websites from scratch or can revamp an existing website too?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo4">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo4" className="collapse qustions-simply">
                            We certainly do both depending on your requirements. If you are looking to have a website with an entirely different look and feel, we recommend you to opt for a new website design service. However, if you are only looking to change the content, a few pictures, or create an additional page you can consider getting your website revamped too. Feel free to get in touch with us for more information.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Do you also offer website management services?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo4">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo4" className="collapse qustions-simply">
                            Yes, we do offer website support as a part of our monthly management service. Whether it is making the changes to the content, updating the plugins, ensuring the security, and taking regular backups, we do it all. However, you will still have ownership of your website.
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

export default AdalaideDesign