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
function GoldCost() {
    function goToTop() {
        window.scrollTo({ top: 0 })
    }
    return (
        <div>
            <div className='Sydney-main-div' style={{ padding: "150px 0px 100px 0px" }}>
                <div className='container'>
                    <div className='row justify-content-center Sydney-first-row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-7 Sydney-first-col-7'>
                            <h2>Make My Website, One Answer to All Your Web Design Needs in  <span>GOLD COAST</span>
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
                                <i className='fas fa-dot-circle dot-cercle'></i> Web Design Gold Coast
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
                            <div className='d-flex Queality-web-design-services mb-2'>
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
                            <span><h2>Web Design Gold Coast</h2></span>
                        </div>
                        <div className='a-tailored-paragraph text-center'>
                            <p>Build Innovative Websites that Stand Out With Make My Website</p>
                        </div>
                    </div>
                    <div className='row justify-content-center img-and-para-section'>
                        <div className='col-lg-4'>
                            <div className='a-credible-agency'>
                                <p>Innovative Methodologies</p>
                                <div className='border-line'></div>
                                <div className='a-credible-agency-para'>
                                    We believe that a website works well when it moves forward with time and doesn’t remain as a static entity. To bring this element into the picture, we incorporate futuristic and innovative designs and ideas into your website and create a fully-functional website of the modern age.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={aiming} alt="aiming" className='img-fluid' />
                        </div>
                        <div className='col-lg-4'>
                            <div className='robust-methodologies'>
                                <p>Reliable Web Design Partners</p>
                                <div className='border-line-red'></div>
                                <div className='robust-methodologies-para'>
                                    Our services don’t end the moment your website is up and running but continue ever after. Our web design experts are always there at your beck and call to offer assistance whenever needed and to ensure that your website is always up-to-date.
                                </div>
                            </div>
                            <div className='empowering-local-businesses'>
                                <p>Expert and Trustworthy Team</p>
                                <div className='border-line-red'></div>
                                <div className='empowering-local-businesses-para'>
                                    At Make My Website, the responsibility of creating your website will fall upon experts who will always put their best foot forward. You can always trust them to use their expertise and wear their creative hats while working on each individual aspect of your website.
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
                                <span><h2>Expert Web Design Services</h2></span>
                            </div>
                            <div className='expert-para '>
                                <p>Scale-up Your Business with Our Professionally Crafted Websites</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div>
                                    We are Make My Website, a team of web designers in Gold Coast dedicated to being Australia’s best pick. With each website that we create, we bring innovation, creativity, and expertise to picture and develop websites that stand tall on all grounds and this is echoed by the 400+ 5-star reviews that we have on Google and other platforms. So, join us, build for yourself an online presence and attract all your customers the modern way and turn them into your customers for life.
                                </div>
                                <br />
                                <div>
                                    Our websites are top-notch in terms of design, graphics, content, and technology used and therefore will be the catalysts that trigger your company’s growth not just today but for years to come. So, take the next leap towards your company’s success with Make My Website.
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
                                <span><h2>Quality Web Design</h2></span>
                            </div>
                            <div className='geelong-para'>
                                <p>Build the Best Spokesperson for Your Brand With Make My Website</p>
                                <div className='red-border'></div>
                            </div>
                            <div className='expert-full-para'>
                                <div className='first'>
                                    How do you feel about having something that carries forward the vision and ethos of your brand even when you are asleep? Sounds like a dream come true for the entrepreneur in you, right? So, turn this dream into a reality with our professional websites. We build websites that run 24*7 and keep working in favor of your brand at all times.
                                </div>
                                <div className='first'>
                                    So, choose us and choose websites that will give your business that much-required push and help claim the heights that you always wanted to.
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
                                <span>How do the web design services offered by Make My Website help businesses?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo" className="collapse qustions-simply">
                            Make My Website was established with an aim to empower local businesses and help them stand out from the cutthroat competition out there. Today, going online is how you reach and cater to the needs of this digitally inclined community and this is where our web design services in Gold Coast comes into play. No matter the scale of your business, we help you build an online presence through which all your potential customers could interact with your brand and contribute towards increasing your sales.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>What do you cover under your web design services?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo1">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo1" className="collapse qustions-simply">
                            The web design services that we provide are holistic in nature and are meant to deliver to you a fully running and functional website. Everything that your website needs would be catered to by us. <br />
                            <b>Our web design services include:</b>
                            <ul>
                                <li>Web design and development</li>
                                <li>Digital Marketing</li>
                                <li>Branding</li>
                                <li>Web and Email hosting</li>
                                <li>Content writing</li>
                                <li>Customer Care</li>
                                <li>Photography and videography</li>
                            </ul>
                            To know more about each of these services, you can get in touch with our web design experts at Make My Website.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Will you create a mobile-friendly website for me?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo2">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo2" className="collapse qustions-simply">
                            Make My Website has done a lot of work for clients in various industrAll the websites that we create are responsive and mobile-friendly in nature. We know that a huge fraction of people access the web through their smartphones and to make sure all these users have a satisfactory experience while visiting your website, we create mobile-friendly websites that are easy to navigate. We know how much user experience impacts the image of your company and how it influences the conversion rate and therefore, we never compromise on this front. So, our web design experts in Gold Coast would follow the best practices and build for you a user-friendly website.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>Do your web design services include revamping existing websites?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo3">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo3" className="collapse qustions-simply">
                        Yes, we don’t just create new websites but revamp or redesign existing ones to make them up- to-date with the current trends and innovations. You can come to us with a specific plan in mind regarding what areas you wish to improve in terms of content, design, or graphics and we will proceed accordingly. You can also come to us in need of suggestions to enhance the efficiency of your website and our expert team of web designers would first guide you in the right direction and then undertake all the necessary changes.
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center collapse-top-row'>
                    <div className='col-md-12 border-column '>
                        <div className='row d-flex website-cost'>
                            <div className='col-11'>
                                <span>What information would I need to provide while availing of your web design services in Gold Coast?</span>
                            </div>
                            <div className='col-1 plus-button'>
                                <div type='button' data-toggle="collapse" data-target="#demo4">
                                    <span><i className='fas fa-plus'></i></span>
                                </div>
                            </div>
                        </div>
                        <div id="demo4" className="collapse qustions-simply">
                        When you choose to engage with us, we expect you to provide us with basic information regarding your expectations from the project, your brand, its vision, and the services/products that you offer. It doesn’t have to be in a flowery language, just to the point information is sufficient as we will use it to develop content for your website. Also, you can provide custom images and videos but in case you don’t have a collection you can avail of our photography and videography services and create visuals that reflect your brand.
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

export default GoldCost