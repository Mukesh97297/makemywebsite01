import React from 'react'
import '../WebEmailHosting.css'
import emailhost from '../animation/EmailHost.json'
import Lottie from 'lottie-react'
import ServiceDelivery from './ServiceDelivery'
function WebEmailHosting() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
            <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Web & Email Hosting<hr className='hr'></hr>
                        </h1>
                        <h2>
                            For A Hassle-Free, And Cost-Effectives <br /> Management Of Your Online Portals
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row WebEmailHosting'>
                        <p >Your business’s online address is what is your base for starting everything. This address is nothing but your web hosting i.e. the space you have rented on the internet to store and showcase your business’s projects, deliverables and content. While it may seem like simply registering your domain name once your task is done, it’s the hosting bit that defines your business’ success as a website in the pool of many. A domain is just like your name, a name used to address you. To get a fully optimized site that is holistically proficient and active on the internet, hosting a website is of utmost need.</p>
                        <p >For experts, it’s not a difficult task to keep your website up-to-date and keep delivering it the support and upgrades it requires. This is why web hosting is a collective and ongoing process that is never fully complete as your website’s requirements and demands keep arising.</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: "#E8E8E86B" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 WebHosting'>
                            <h3>Web Hosting Plans</h3>
                            <p >We offer various monthly and yearly plans for hosting on the Australian server. The plans offer partial to complete levels of support that is available as per your website business requirements</p>
                            <p >Whether your orientation is more after speed or towards high storage and file management; we have solutions in the form of exclusive packages for meeting every need of yours. With advanced bandwidth and storage options, you never have to compromise on anything that your business website requires to run at full potential.</p>
                            <p >Our web hosting plans offer 24*7 monitoring support, backups, multi-code support, and unlimited data options for you to be stress-free at all times once you’ve let our experts handle your domain space for you.</p>
                        </div>
                        <div className='col-lg-5' >
                            <Lottie animationData={emailhost} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                    <div className='row '>
                        <div className='Web-Hosting'>
                            <h4>Why Web Hosting Requires Professional Handling:</h4>
                            <p className='d-flex'><i className="fa-solid fa-circle-check brand-i"></i> <span className='ml-2'>Lets you focus on the other essentials of business proficiently</span></p>
                            <p className='d-flex'><i className="fa-solid fa-circle-check brand-i"></i> <span className='ml-2'>Grants you a more optimized platform to operate with</span></p>
                            <p className='d-flex'><i className="fa-solid fa-circle-check brand-i"></i> <span className='ml-2'>Helps you stay updated with all the new developments</span></p>
                            <p className='d-flex'><i className="fa-solid fa-circle-check  brand-i"></i> <span className='ml-2'>Automatically managed bugs, programming or speed issues</span></p>
                            <p className='d-flex'><i className="fa-solid fa-circle-check brand-i"></i> <span className='ml-2'>Improves your website's navigation and productivity`</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row Email-Hosting'>
                        <h3>Email Hosting</h3>
                        <p >Our services for email hosting cover most of your mail management needs by offering round the clock technical support and email management that prevails over all programmes and versions of software. Usually, we recommend using Google workspace (formerly known as G Suite) or Microsoft for professional emails, and can set up those for you as per your requirements. </p>
                        <p >Feel free to get in touch with us to discuss the best hosting plan for your website, and emails.</p>
                    </div>
                </div>
            </div>
            <ServiceDelivery />
        </div>
    )
}

export default WebEmailHosting