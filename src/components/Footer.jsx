import React from 'react'
import footer1 from '../images/client-partners-verified.png'
import footer2 from '../images/google_adword_qualified.png';
import aos from 'aos';
import 'aos/dist/aos.css'
aos.init();

function Footer() {
    return (
        <div>
            <div style={{ backgroundColor: "black", color: "white" }}>
                <div className="container-fluid py-3">
                    <div className="row px-5">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="py-3">
                                        <h4 id="fotterh4">Victoria</h4>
                                    </div>
                                    <div className='py-2'>
                                        <p>
                                            <i className="fa-solid fa-map-location"></i> 3/17 Perpetual St,
                                        </p>
                                        <h6 id="footerh6">TRUGANINA VIC 3029</h6>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div id="footer">
                                                <p>
                                                    <i className='fas fa-dot-circle' style={{ fontSize: "15px", color: "red" }}></i> Web Design Sydney
                                                </p>
                                                <p>
                                                    <i className='fas fa-dot-circle' style={{ fontSize: "15px", color: "red" }}></i> Web Design Brisbane
                                                </p>
                                                <p>
                                                    <i className='fas fa-dot-circle' style={{ fontSize: "15px", color: "red" }}></i> Web Design Perth
                                                </p>
                                                <p>
                                                    <i className='fas fa-dot-circle' style={{ fontSize: "15px", color: "red" }}></i> Web Design Newcastle
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="py-3">
                                        <h4 id="fotterh4">New South Wales</h4>
                                    </div>
                                    <div className='py-2'>
                                        <p>
                                            <i className="fa-solid fa-map-location"></i> 1/4A Bessemer St,
                                            Blacktown
                                        </p>
                                        <h6 id="footerh6">NSW 2148, Australia</h6>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div id="footer">
                                                <p>
                                                    <i className='fas fa-dot-circle' style={{ fontSize: "15px", color: "red" }}></i> Web Design Adelaide
                                                </p>
                                                <p>
                                                    <i className='fas fa-dot-circle' style={{ fontSize: "15px", color: "red" }}></i> Web Design Geelong
                                                </p>
                                                <p>
                                                    <i className='fas fa-dot-circle' style={{ fontSize: "15px", color: "red" }}></i> Web Design Gold Coast
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div id="footerlinks">
                                        <h4 id="fotterh4" className="py-3">Quick Links</h4>
                                        <p className='pt-2'>
                                            <i className="fa-solid fa-circle-check"  ></i> About Us
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-circle-check"  ></i> FAQs
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-circle-check"  ></i> Our Portfolio
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-circle-check"  ></i>  Services
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-circle-check"  ></i> Blog
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="py-4" id="social-links">
                                <h5>
                                    Creating future-proof digital experiences is what we do. Tell us
                                    about your needs, we’d love to collaborate with you.
                                </h5>
                                <h4 className='py-2'>info@makemywebsite.com.au</h4>

                                <a href="https://www.facebook.com/makemywebsite.com.au">
                                    <i className="fa-brands fa-facebook mr-5 pt-5"></i>
                                </a>
                                <a href="https://www.instagram.com/makemywebsite.mmw/">
                                    <i className="fa-brands fa-instagram mr-5 pt-5"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/make-my-website-pty-ltd/">
                                    <i className="fa-brands fa-linkedin-in mr-5 pt-5"></i>
                                </a>
                                <a href="https://twitter.com/makemywebsite16">
                                    <i className="fa-brands fa-twitter-square mr-5 pt-5"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCWZs6OlOLKKFKQP7Ldn7jGQ">
                                    <i className="fa-brands fa-youtube mr-5 pt-5"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{ backgroundColor: "#0C0C0C"}}>
                    <div className="row px-5">
                        <div className="col-lg-7">
                            <div className='row'>
                                <div className='col-lg-12 d-flex'>
                                    <img src={footer1} alt="client" height='75px' width='160px' />
                                    <img src={footer2} alt="client" height='70px' width='160px' className='pt-1' />
                                </div>

                            </div>
                            <div id="footer-logo-p1">
                                <p>Terms & Conditions Privacy Policy</p>
                            </div>
                        </div >

                        <div className="col-lg-5 pt-3">
                            <div id="footer-logo-p2">
                                <p>Copyright © 2022 Make My Website. All Rights Reserved.</p>
                                <p>Web Design Melbourne Make My Website</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Footer