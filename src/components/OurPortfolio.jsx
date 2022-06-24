import React from 'react'
import '../OurPortfolio.css'
import design from '../images/web-design-portfolio-1.png'
import graphic from '../images/graphic-portfolio.png'
import photography from '../images/photography-portfolio.png'
import CaseStudy from '../images/case-studies.png'
import aos from 'aos'
import 'aos/dist/aos.css'
aos.init();
function OurPortfolio() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
                <div className="row paragraph1">
                    <div className="col-md-6 paragraph">
                        <h1>
                            Our Portfolio <hr className='hr'></hr>
                        </h1>
                        <h2>
                            Showcasing Our Best Work In Various Domains
                        </h2>
                    </div>
                </div>
            </div> 
            <section className='main'>
                <div className='container'>
                    <div className='ourportfolio'>
                        <div className='ourportfolio-child'>
                            <div className='heading-pragraph'>
                                Our extensive portfolio includes promising work samples from the various domains we work in.
                                We have showcased our best pieces of work that will exhibit our creativity, reliability and
                                allow you to make a wise decision whilst choosing your IT Partner.
                            </div>
                        </div>
                        <div className='ourportfolio-child'>
                            <div className='heading-pragraph'>
                                As a full-service digital agency, we offer specialized web design, graphic design, and photography services to clients Australia-wide.
                            </div>
                        </div>
                        <div className='ourportfolio-child'>
                            <div className='heading-pragraph'>
                                To witness the quality of work, and the efforts we put into every project- have a look at our respective portfolios below.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container portfolio-items'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='Portfolio-design-child'>
                                <h3>Web Design Portfolio</h3>
                            </div>
                            <div className='Portfolio-design-child'>
                                <div>
                                    We’ve catered for over 800+ clients all over Australia and have developed fully functional, professional, modern-day websites for businesses. Our future proof strategies have allowed businesses to flourish online and make the most of their online space.
                                    <br />
                                    The team at Make My Website has evolved with technology and continues to build systems that work!
                                </div>
                            </div>
                            <div>
                                <a href="/" className='btn btn-dark View-portfolio' role='button'>VIEW PORTFOLIO</a>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={design} alt="" width="511" height="305" />
                        </div>
                    </div>
                </div>
                <div className='container portfolio-items'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={graphic} alt="" height='350px' />
                        </div>
                        <div className='col-md-6'>
                            <div className='Portfolio-design-child'>
                                <h3>Graphic Portfolio</h3>
                            </div>
                            <div className='Portfolio-design-child'>
                                <div>
                                    Our extensive graphic portfolio is built on creativity and our vision to not only
                                    create designs and logos but an impact that speaks volumes. We’ve designed logos
                                    for brands from various industries and domains, and have always ensured that every
                                    design aligns with their branding. Our graphic designers have put together their
                                    best pieces for you to have a look at!
                                </div>
                            </div>
                            <div>
                                <a href="/" className='btn btn-dark View-portfolio' role='button'>VIEW PORTFOLIO</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container portfolio-items'>
                    <div className='row'>
                        <div className='Portfolio-design-child'>
                            <h3>Photography Portfolio</h3>
                        </div>
                        <div className='col-md-6 '>
                            <div className='Portfolio-design-child'>
                                <div>
                                    Photography captures the essence of every business and is a key player in establishing your
                                    brand presence online. Our professional photographers have quality experience in commercial
                                    photography and have been dealing with businesses from different domains. From Australia’s
                                    trusted tools company like United Tools to a thriving residential estate like Forrest Green,
                                    we have carried out professional photography and drone shoots to amp up their branding.
                                </div>
                            </div>
                            <div>
                                <a href="/" className='btn btn-dark View-portfolio' role='button'>VIEW PORTFOLIO</a>
                            </div>
                        </div>
                        <div className='col-md-6 Portfolio-design'>
                            <img src={photography} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className='container portfolio-items'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={CaseStudy} alt="" height='330px' width='400px' />
                        </div>
                        <div className='col-md-6'>
                            <div className='Portfolio-design-child'>
                                <h3>Case Studies</h3>
                            </div>
                            <div className='Portfolio-design-child'>
                                <div>
                                    We’re here to dive deep into what it takes to make every project a success. At Make My Website,
                                    we believe in stimulating the growth of businesses by means of our expertise and the efforts we
                                    put in at every step. We’ve analyzed some of our prestigious projects to have some insights for
                                    ourselves and our potential clients to develop an understanding of our approach, and the quality
                                    of work we deliver.
                                </div>
                            </div>
                            <div>
                                <a href="/" className='btn btn-dark View-portfolio' role='button'>VIEW PORTFOLIO</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default OurPortfolio