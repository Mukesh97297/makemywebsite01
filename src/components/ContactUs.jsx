import React from 'react'
import '../ContactUs.css';
import Lottie from 'lottie-react';
import contact from '../animation/ContactUs.json';
import aos from 'aos';
import 'aos/dist/aos.css';
aos.init();
function ContactUs() {
    return (
        <div>
          <div className="container-fluid py-4" id="about-container">
                <div className='container'>
                <div className="row pt-5">
                    <div className="col-md-12  paragraph">
                        <h1 className=' pt-5'>
                            Contact Us <hr className='hr'></hr>
                        </h1>
                        <h2>
                            Take Your First Step Towards <br /> Creating An Impact
                        </h2>
                        
                    </div>
                </div>
                </div>
            </div>
            <div className='containar-fluid '>
                <div className='row'>
                    <div className='col-lg-6  ContactUs-col-black'>
                        <div className='container'>
                            <div className='contact-column mb-0'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                <h3 className='pt-5'>Born in sydney, <br /> Grown in melbourne</h3>
                            </div>
                            <div className='contact-us-lottie'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                <Lottie animationData={contact} loop={true} autoplay={true} style={{ height: "700px", width: "100%" }} />
                            </div>
                            <div className='ContactUs-Social-Media-icons'>
                                <a href="https://www.facebook.com/makemywebsite.com.au"data-aos="zoom-top" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                    <i className="fa-brands fa-facebook mr-5 pt-5"></i>
                                </a>
                                <a href="https://www.instagram.com/makemywebsite.mmw/"data-aos="zoom-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                    <i className="fa-brands fa-instagram mr-5 pt-5"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/make-my-website-pty-ltd/"data-aos="zoom-top" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                    <i className="fa-brands fa-linkedin-in mr-5 pt-5"></i>
                                </a>
                                <a href="https://twitter.com/makemywebsite16"data-aos="zoom-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                    <i className="fa-brands fa-twitter-square mr-5 pt-5"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCWZs6OlOLKKFKQP7Ldn7jGQ"data-aos="zoom-top" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                    <i className="fa-brands fa-youtube mr-5 pt-5"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 ContactUs-col-white'>
                        <div className='container'>
                            <div className='contact-form pt-5'>
                                <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">We’d love to hear <br /> from you! Reach out <br /> to us for all your <br /> queries.</h3>
                                <a data-aos="zoom-out-top" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false" href="tel:1300769302"><i className="fa-solid fa-phone contact-us-i"></i> 1300769302</a> <br />
                                <a data-aos="slide-out-top" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false" href="mailto:info@makemywebsite.com.au"><i className="fa-solid fa-envelope contact-envelope-i"></i> info@makemywebsite.com.au</a>
                            </div>
                            <div className='row'data-aos="flip-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                <div className='col-md-6 py-2'>
                                    <label htmlFor="Name" className='contact-us-lable mb-0'>Name</label>
                                    <input type="Name" className='form-control' />
                                </div>
                                <div className='col-md-6 py-2'>
                                    <label htmlFor="email" className='contact-us-lable mb-0'>Email</label>
                                    <input type="Email" className='form-control' />
                                </div>
                                <div className='col-md-6 py-2'>
                                    <label htmlFor="number" className='contact-us-lable mb-0'>Phone</label>
                                    <input type="Phone" className='form-control' />
                                </div>
                                <div className='col-md-6 py-2'>
                                    <label htmlFor="sub" className='contact-us-lable mb-0'>Subject</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col-lg-12 py-2'>
                                    <label htmlFor="discription" className='contact-us-lable mb-0'>Project Description or Message</label>
                                    <textarea type="text" className="form-control" style={{ height: "100px" }}></textarea>
                                </div>
                                <div className='col-lg-4'>
                                    <a href="/" className='btn btn-dark Contact-us-submit' role='button'>SUBMIT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5'>
                <div className='container divider' data-aos="zoom-in-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                    <div className='sapreter'></div>
                    <h1 className='mx-5'>OUR LOCATIONS</h1>
                    <div className='sapreter'></div>
                </div>
            </div>

            <div className='container-fluid' style={{ backgroundColor: "#F5F5F5" }}>
                <div className='row'>
                    <div className='col-lg-6 m-0 p-0'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                        <iframe title='map-1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.999159295742!2d144.74222641506296!3d-37.836905543140475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad689ac9f082737%3A0xdf682ddec58f8695!2s3%2F17%20Perpetual%20Street%2C%20Truganina%20VIC%203029%2C%20Australia!5e0!3m2!1sen!2sin!4v1627024968706!5m2!1sen!2sin" height="500px" width="100%"></iframe>
                    </div>
                    <div className='col-lg-6'>
                        <div className='contact-us-map py-5'data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <a href="/"><i className="fa-solid fa-location-dot contact-us-map-icon pt-5"></i></a>
                            <h5 className='pt-4'>Address</h5>
                            <p>3/17 Perpetual St, <br />TRUGANINA VIC 3029</p>
                        </div>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-lg-6'>
                        <div className='contact-us-map py-5' data-aos="zoom-in-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <a href="/"><i className="fa-solid fa-location-dot contact-us-map-icon pt-5"></i></a>
                            <h5 className='pt-4'>Address</h5>
                            <p>1/4A Bessemer St <br />Blacktown <br />NSW 2148</p>
                        </div>
                    </div>
                    <div className='col-lg-6 m-0 p-0'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                        <iframe title='map-2' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6634.27558509156!2d150.910023!3d-33.757105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1298e22dfefa79%3A0x65622580ed67041c!2s1%2F4A%20Bessemer%20St%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1643611641376!5m2!1sen!2sin" height="500px" width="100%"></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs