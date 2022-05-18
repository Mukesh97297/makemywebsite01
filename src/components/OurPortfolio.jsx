import React from 'react'
import design from '../images/web-design-portfolio-1.png'
import graphic from '../images/graphic-portfolio.png'
import photography from '../images/photography-portfolio.png'
import CaseStudy from '../images/case-studies.png'

function OurPortfolio() {
    return (
        <div>
            <div className="container-fluid pl-5 pt-3" id="about-container">
                <div className="row pt-5">
                    <div className="col-md-12 py-5 pl-5 DigitalMarkeing">
                        <h1 className='pl-4 pt-5'>
                            Our Portfolio <hr className='hr'></hr>
                        </h1>
                        <h2 className='pl-4'>
                            Showcasing Our Best Work In Various <br /> Domains
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
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row  casestudy py-5'>
                        <p>Our extensive portfolio includes promising work samples from the various domains we work in. We have showcased our best pieces of work that will exhibit our creativity, reliability and allow you to make a wise decision whilst choosing your IT Partner.</p>
                        <p>As a full-service digital agency, we offer specialized web design, graphic design, and photography services to clients Australia-wide.</p>
                        <p>To witness the quality of work, and the efforts we put into every project- have a look at our respective portfolios below.</p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 casestudy mb-5'>
                            <h3>Web Design Portfolio</h3>
                            <p>We’ve catered for over 800+ clients all over Australia and have developed fully functional, professional, modern-day websites for businesses. Our future proof strategies have allowed businesses to flourish online and make the most of their online space.</p>
                            <p>The team at Make My Website has evolved with technology and continues to build systems that work!</p>
                            <div className='py-2'>
                                <a href="" className='btn btn-dark View-portfolio' role='button'>VIEW PORTFOLIO</a>
                            </div>
                        </div>
                        <div className='col-lg-6 casestudy'>
                            <img src={design} alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{backgroundColor:"#E8E8E86B"}}>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6 casestudy'>
                            <img src={graphic} alt="" height='350px'/>
                        </div>
                        <div className='col-lg-6 casestudy'>
                            <h3>Graphic Portfolio</h3>
                            <p>Our extensive graphic portfolio is built on creativity and our vision to not only create designs and logos but an impact that speaks volumes. We’ve designed logos for brands from various industries and domains, and have always ensured that every design aligns with their branding. Our graphic designers have put together their best pieces for you to have a look at!</p>
                            <div className='py-2'>
                                <a href="" className='btn btn-dark View-portfolio' role='button'>VIEW PORTFOLIO</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6 casestudy'>
                           <h3>Photography Portfolio</h3>
                           <p>Photography captures the essence of every business and is a key player in establishing your brand presence online. Our professional photographers have quality experience in commercial photography and have been dealing with businesses from different domains. From Australia’s trusted tools company like United Tools to a thriving residential estate like Forrest Green, we have carried out professional photography and drone shoots to amp up their branding.</p>
                           <div className='py-2'>
                                <a href="" className='btn btn-dark View-portfolio' role='button'>VIEW PORTFOLIO</a>
                            </div>
                        </div>
                        <div className='col-lg-6 casestudy'>
                            <img src={photography} alt="" height=''/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{backgroundColor:"#E8E8E86B"}}>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6 casestudy'>
                            <img src={CaseStudy} alt="" height='330px' width='400px'/>
                        </div>
                        <div className='col-lg-6 casestudy'>
                            <h3>Case Studies</h3>
                            <p>We’re here to dive deep into what it takes to make every project a success. At Make My Website, we believe in stimulating the growth of businesses by means of our expertise and the efforts we put in at every step. We’ve analyzed some of our prestigious projects to have some insights for ourselves and our potential clients to develop an understanding of our approach, and the quality of work we deliver.</p>
                            <div className='py-2'>
                                <a href="" className='btn btn-dark View-portfolio' role='button'>VIEW PORTFOLIO</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurPortfolio