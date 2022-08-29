import React from 'react'
import '../ContactUs.css';
import { Link } from "react-router-dom"
import Lottie from 'lottie-react';
import contact from '../animation/ContactUs.json';
function ContactUs() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
                <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Contact Us
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2>
                            Take Your First Step Towards Creating An Impact
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='containar-fluid '>
                <div className='row'>
                    <div className='col-lg-6 ContactUs-col-black'>
                        <div className='ContactUs-col-left'>
                            <div className='contact-column'>
                                <h3>Born in sydney, Grown in melbourne</h3>
                            </div>
                            <div className='contact-us-lottie'>
                                <div>
                                    <Lottie className='lottie' animationData={contact} loop={true} autoplay={true} style={{ height: "700px", width: "100%" }} />
                                </div>
                            </div>
                            <div className='ContactUs-Social-Media-icons'>
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
                    <div className='col-lg-6 ContactUs-col-white'>
                        <div className='ContactUs-col-right'>
                            <div className='contact-form'>
                                <h3>We’d love to hear from you! Reach out to us for all your queries.</h3>
                            </div>
                            <div className='contact-form-1'>
                                <a href="tel:1300769302"><i className="fa-solid fa-phone contact-us-i"></i> <span>1300769302</span></a>
                            </div>
                            <div className='contact-form-1 mb-5'>
                                <a href="mailto:info@makemywebsite.com.au"><i className="fa-solid fa-envelope contact-envelope-i"></i> info@makemywebsite.com.au</a>
                            </div>
                            <form>
                                <div className='row'>
                                    <div className='col-md-6 contact-form-input-list'>
                                        <label htmlFor="Name" className=''>Name</label>
                                        <input type="name" className='form-control' required />
                                    </div>
                                    <div className='col-md-6 contact-form-input-list'>
                                        <label htmlFor="email" className=''>Email</label>
                                        <input type="email" className='form-control' required />
                                    </div>
                                    <div className='col-md-6 contact-form-input-list'>
                                        <label htmlFor="number" className=''>Phone</label>
                                        <input type="phone" className='form-control' required />
                                    </div>
                                    <div className='col-md-6 contact-form-input-list'>
                                        <label htmlFor="sub" className=''>Subject</label>
                                        <input type="text" className='form-control' required/>
                                    </div>
                                    <div className='col-md-12 contact-form-input-list'>
                                        <label htmlFor="discription" className=''>Project Description or Message</label>
                                        <textarea type="text" className="form-control" style={{ height: "100px" }} required/>
                                    </div>
                                    <div className='col-md-4 pt-2 contact-form-input-list'>
                                         <Link to="/thankyou">
                                            <input type="Submit" className='btn Contact-us-submit' value='Submit' />
                                        </Link> 
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='divider' >
                    <div className='sapreter'></div>
                    <span className='sapreter-span mx-4'>OUR LOCATIONS</span>
                    <div className='sapreter'></div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: "#F5F5F5" }}>
                <div className='row'>
                    <div className='col-lg-6 m-0 p-0'>
                        <iframe title='map-1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.999159295742!2d144.74222641506296!3d-37.836905543140475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad689ac9f082737%3A0xdf682ddec58f8695!2s3%2F17%20Perpetual%20Street%2C%20Truganina%20VIC%203029%2C%20Australia!5e0!3m2!1sen!2sin!4v1627024968706!5m2!1sen!2sin" height="500px" width="100%"></iframe>
                    </div>
                    <div className='col-lg-6'>
                        <div className='contact-us-map py-5'>
                            <a href="/"><i className="fa-solid fa-location-dot contact-us-map-icon pt-5"></i></a>
                            <h5 className='pt-4'>Address</h5>
                            <p>3/17 Perpetual St, <br />TRUGANINA VIC 3029</p>
                        </div>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-lg-6'>
                        <div className='contact-us-map py-5' >
                            <a href="/"><i className="fa-solid fa-location-dot contact-us-map-icon pt-5"></i></a>
                            <h5 className='pt-4'>Address</h5>
                            <p>1/4A Bessemer St <br />Blacktown <br />NSW 2148</p>
                        </div>
                    </div>
                    <div className='col-lg-6 m-0 p-0'>
                        <iframe title='map-2' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6634.27558509156!2d150.910023!3d-33.757105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1298e22dfefa79%3A0x65622580ed67041c!2s1%2F4A%20Bessemer%20St%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1643611641376!5m2!1sen!2sin" height="500px" width="100%"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs