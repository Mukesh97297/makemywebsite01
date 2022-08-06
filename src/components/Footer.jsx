import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import footer1 from '../images/client-partners-verified.png'
import demo from '../images/demotext.jpg'

function Footer() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div>
            <div style={{ background: "#000000" }}>
                <div className='container-fluid Footer '>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='row'>
                                <div className="col-lg-6">
                                    <p id="fotterh4">Victoria</p>
                                    <div className='victoria d-flex pt-4'>
                                        <i className="fa-solid fa-map-location"></i>
                                        <span>3/17 Perpetual St,<br /> TRUGANINA VIC 3029</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <p id="fotterh4">New South Wales</p>
                                    <div className='victoria d-flex pt-4'>
                                        <i className="fa-solid fa-map-location"></i>
                                        <span>1/4A Bessemer St,Blacktown <br />NSW 2148, Australia</span>

                                    </div>
                                </div>
                            </div>
                            <div className='row pt-4'>
                                <div className='footer-web-design'>
                                    <NavLink to="/Sydney">
                                        <i className='fas fa-dot-circle'></i>
                                        <span>Web Design Sydney</span>
                                    </NavLink>
                                </div>
                                <div className='footer-web-design'>
                                    <NavLink to="/WebBrisbane" onClick={goToTop}>
                                        <i className='fas fa-dot-circle'></i>
                                        <span>Web Design Brisbane</span>
                                    </NavLink>
                                </div>
                                <div className='footer-web-design'>
                                    <NavLink to="/DesignPerth" onClick={goToTop}>
                                        <i className='fas fa-dot-circle'></i>
                                        <span>Web Design Perth</span>
                                    </NavLink>
                                </div>
                                <div className='footer-web-design'>
                                    <NavLink to="/ModernWorld" onClick={goToTop}>
                                        <i className='fas fa-dot-circle'></i>
                                        <span>Web Design Newcastle</span>
                                    </NavLink>
                                </div>
                                <div className='footer-web-design'>
                                    <NavLink to="/LinkdalaideDesign" onClick={goToTop}>
                                        <i className='fas fa-dot-circle'></i>
                                        <span>Web Design Adelaide</span>
                                    </NavLink>
                                </div>
                                <div className='footer-web-design'>
                                    <NavLink to="/GeelongDesign" onClick={goToTop}>
                                        <i className='fas fa-dot-circle'></i>
                                        <span>Web Design Geelong</span>
                                    </NavLink>
                                </div>

                                <div className='footer-web-design'>
                                    <NavLink to="/GoldCost" onClick={goToTop}>
                                        <i className='fas fa-dot-circle'></i>
                                        <span>Web Design Gold Coast</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <p id="fotterh4">Quick Links</p>
                            <NavLink onClick={goToTop} to="/Linkbout" className='Quick-links pt-4'>
                                <i className="fa-solid fa-circle-check" ></i>
                                <span>About Us</span>
                            </NavLink>
                            <br />
                            <NavLink to='faq' onClick={goToTop} className='Quick-links'>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>FAQs</span>
                            </NavLink>
                            <br />
                            <NavLink to="/ourportfolio" onClick={goToTop} className='Quick-links'>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>Our Portfolio</span>
                            </NavLink>
                            <br />
                            <NavLink to="/service" onClick={goToTop} className='Quick-links'>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>Services</span>
                            </NavLink>
                            <br />
                            <NavLink to="/Blog" onClick={goToTop} className='Quick-links'>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>Blog</span>
                            </NavLink>
                        </div>
                        <div className="col-lg-4">
                            <div className='footer-left-lg-4'>
                                Creating future-proof digital experiences is what we do. Tell us about your needs, we’d love to collaborate with you.
                            </div>
                            <div className='footer1-left-lg-4 pt-4'>
                                <Link to="/" onClick={() => { window.open("mailto:info@makemywebsite.com.au") }}><span>info@makemywebsite.com.au</span></Link>
                            </div>
                            <div className="py-4" id="social-links">
                                <Link to="/" onClick={() => { window.open("https://www.facebook.com/makemywebsite.com.au") }}>
                                    <i className="fa-brands fa-facebook"></i>
                                </Link>
                                <Link to="/" onClick={() => { window.open("https://www.instagram.com/makemywebsite.mmw/") }}>
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                                <Link to="/" onClick={() => { window.open("https://www.linkedin.com/company/make-my-website-pty-ltd/") }}>
                                    <i className="fa-brands fa-linkedin"></i>
                                </Link>
                                <Link to="/" onClick={() => { window.open("https://twitter.com/makemywebsite16") }}>
                                    <i className="fa-brands fa-twitter-square"></i>
                                </Link>
                                <Link to="/" onClick={() => { window.open("https://www.youtube.com/channel/UCWZs6OlOLKKFKQP7Ldn7jGQ") }}>
                                    <i className="fa-brands fa-youtube"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid footer-bottom-part'>
                <div className='row m-0'>
                    <div className='col-lg-8'>
                        <div className='row footer-images'>
                            <div className='fotter-bottom-part-img'>
                                <Link to="/">
                                    <img src={footer1} alt="client" height='65px' width='210px' />
                                </Link>
                            </div>
                            <div className='fotter-bottom-part-img'>
                                <Link to="/">
                                    <img src={demo} alt="client" height='61px' width='210px' className='demo pt-1' />
                                </Link>
                            </div>
                        </div>
                        <div className='row footer-images'>
                            <div className='term-conditions'>
                                <Link to="/termsCondition" onClick={goToTop}><span>Term and conditions</span> </Link>
                            </div>
                            <div className='term-conditions'>
                                <Link to="/privacyPolicy" onClick={goToTop}><span>Privacy policy</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 footer-bottom-part-1 mb-0'>
                        <span>Copyright © 2022 Make My Website. All Rights Reserved</span>
                        <br />
                        <span>Web Design Melbourne Make My Website</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
