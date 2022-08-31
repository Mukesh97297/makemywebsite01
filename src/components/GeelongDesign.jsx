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
import experience from '../images/Years-Of-Expertise (1).png';
import client from '../images/Satisfied-Clients.png';
import owned from '../images/Australian_Owned_mmw.png';
import design1 from '../images/5-star-rated-Web-Design-Agency.png'
import CountUp from 'react-countup';
function GeelongDesign() {
    function goToTop() {
        window.scrollTo({ top: 0 })
    }
    return (
        <div>
            <div className='Sydney-main-div' style={{ padding: "150px 0px 100px 0px" }}>
                <div className='container'>
                    <div className='row justify-content-center Sydney-first-row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-7 Sydney-first-col-7'>
                            <h2>A Trusted Web Design Agency in Geelong Delivering Excellence with  <span>EACH PROJECT</span>
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
                                <i className='fas fa-dot-circle dot-cercle'></i> Web Design Geelong
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
                                <span><h2>Web Design agency in Geelong </h2></span>
                            </div>
                            <div className='Quality-paragraph'>
                                <p>Making a Meaningful Space for Local Businesses in the Virtual World</p>
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
                            <span><h2>Web Design agency in Geelong</h2></span>
                        </div>
                        <div className='a-tailored-paragraph text-center'>
                            <p>Making a Meaningful Space for Local Businesses in the Virtual World</p>
                        </div>
                    </div>
                    <div className='row justify-content-center img-and-para-section'>
                        <div className='col-lg-4'>
                            <div className='a-credible-agency'>
                                <p>A Creative and Expert Team</p>
                                <div className='border-line'></div>
                                <div className='a-credible-agency-para'>
                                    We don’t just employ all the modern tactics of web designing but wear our creative hats while developing each and every website. So, the website that you develop with us will not just be top-notch in terms of efficiency but aesthetics too.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={aiming} alt="aiming" className='img-fluid' />
                        </div>
                        <div className='col-lg-4'>
                            <div className='robust-methodologies'>
                                <p>Holistic Approach</p>
                                <div className='border-line-red'></div>
                                <div className='robust-methodologies-para'>
                                    With us, all your visions regarding your website will come to life with utmost efficiency and creativity. From building the layout to the moment your website is up and running and even afterward, we will be there taking care of it all.
                                </div>
                            </div>
                            <div className='empowering-local-businesses'>
                                <p>A Trusted Brand</p>
                                <div className='border-line-red'></div>
                                <div className='empowering-local-businesses-para'>
                                    With our 400+ reviews on Google, Facebook and Oneflare, we are a name that is trusted Australia-wide. We have delivered the best quality web design solutions to over 800 clients and this number is rising faster than ever.
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
                                <p>Make the Best Out of the Digital Wave With Our Web Design Professionals</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div>
                                    We are Make My Website, an efficient, expert and creative answer to all your web design needs in Geelong. We started with an aim to deliver the best of web design services to all of Australia and we have come a long way in fulfilling it having delivered expert web design services to over 800 clients now.
                                </div>
                                <br />
                                <div>
                                    We empower local businesses by incorporating ROI-driven strategies proven to take a business to greater heights. We don’t just build websites but an image of your brand on the virtual space that enables your target customers to reach you with a click and a tap in a moment’s time. So, with us, scale-up and write a success story for your business.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='high-perform-img-section'>
                                <img src={HighPerformance} alt="highperforming" className='img-fluid'/>
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
                                <span><h2>Web Design Geelong</h2></span>
                            </div>
                            <div className='geelong-para mb-2'>
                                <p>Invest in a 24*7 Partner for Your Business</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div className='first'>
                                    Build a website with our web design experts in Geelong and bring to your business an employee that works for the growth of your business 24*7.
                                </div>
                                <br />
                                <div className='first'>We build user-friendly, responsive websites that echo the vision of your brand and take it to all your potential customers out there. You do your part in the real world and let your website carry the torch forward in the digital space and take your business to newer heights every day.</div>
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
                                <span>What distinguishes Make My Website from other Web Design agencies in Geelong?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo" className="collapse qustions-simply">
                            Customer satisfaction is our one-true goal and to achieve this we create responsive, user- friendly, engaging, and creative websites for each and every client who chooses to engage with us. We have catered to the web design needs of over 800 clients till now and have achieved over 400+ 5-star ratings on Google and other platforms. We deliver perfection with every work that we undertake no matter the scale and scope and that’s what has established us as a trusted web design agency in Geelong. We follow a customer-centric approach and are always there at your beck and call to immediately resolve any issues whenever the need be.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Why invest in a high-quality web design?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo1">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo1" className="collapse qustions-simply">
                            A website is basically your brand’s spokesperson, it’s the first thing that every online visitor interacts with and forms their first perception about your brand. It usually becomes the deciding factor about if one will engage with your brand or not. So, the more user-friendly, informative, and navigable the website is, the better the impression formed and the more the chances of these leads get converted into actual customers. Simply put, the better the website, the more customers.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Do local, small-scale businesses need to invest in web design?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo2">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo2" className="collapse qustions-simply">
                            No matter the scale of your business and how far you wish the reach of it to be, websites are always a meaningful investment if you want to reach your target customers in this digital age. According to a recent study, 79% of smartphone users shop online and if your target audience is among this 79%, you need to have an online presence to reach them in the first place. And therefore, without a website, you would be missing out a lot in this technologically driven world.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>How much does it cost to develop a responsive website design?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo3">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo3" className="collapse qustions-simply">
                            While we offer the best prices in the industry the final cost would depend upon what your needs and expectations are. Designing a website is indeed a complex process and we make sure to pay attention to each and every detail, no matter how minute they might be. But the features and the kind of layout that your website has would entirely depend upon what you chose and we will quote a price accordingly. Before beginning the work, we will have a thorough discussion regarding your requirements, come up with a plan and give our final quote for a defined scope of work.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Once the web design is complete, can I manage the website on my own?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo4">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo4" className="collapse qustions-simply">
                            This entirely depends upon your choice. If you want us to take on the responsibility of regularly updating your website, doing timely security checks, and all the other maintenance work that a website involves, our expert team would be more than happy to do it all, but in case you want to do it all on your own, you can make that choice. If you choose the latter, we will be there to guide you through and verse you in the basics of a website to ensure that your website always runs smoothly. And you can reach out to us in case the need be.
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

export default GeelongDesign