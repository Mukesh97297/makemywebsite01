import React from 'react'
import storyoffice from '../images/our-story.jpg'
import Customer from './Customer'
import ServiceDelivery from './ServiceDelivery'
import '../About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Caraousel from './Caraousal'
Aos.init()

function About() {
    return (
        <div>
            <div className="container-fluid " id="about-container">
                
                <div className="row">
                    <div className="col-md-6  paragraph">
                        <h1 className=''>
                            About Us <hr className='hr'></hr>
                        </h1>
                        <h2>
                            A Team Of Experts United By The Passion For
                            Technology-Led Solutions
                        </h2>
                    </div>
                </div>
            
            </div>
            <div className="container-fluid main-about-section ">
                <div className='container'>
                    <div className='row'>
                        <div className='main-heading'>
                            <h2>About Make My Website</h2>
                        </div>
                        <div className='main-heading1' >
                            <h4>A promising agency that redefines digitalisation and develops magnificent web experiences</h4>
                        </div>
                        <div className='main-heading2' >
                            Make My Website envisions empowering local businesses by creating meaningful
                                experiences for them to ace in their fields of expertise. We take pride in having
                                successful associations across Australia whilst adopting innovative practices and
                                fostering creativity to do what it takes to deliver the best.
                        
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container-fluid'>
               <Caraousel/>
            </div> */}
            <div className='container-fluid' style={{padding:"100px 35px 100px 35px"}}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <h2 className='our-story' >
                            Our Story
                        </h2>
                    </div>
                    <div className='row justify-content-center py-5'>
                        <div className='col-lg-6' >
                            <div className='our-story-p'>
                                What first started as an idea has now transformed into a vision and as we continue to expand our horizons- our commitment towards providing high standards of service has just gotten stronger.
                                As a digital agency with clients in every single state and territory of Australia, our establishment as a renowned company has been worthwhile.
                                <br /><br />
                            
                               Our dynamic team has delivered 600+ websites, created ingenious strategies and helped numerous
                                businesses in this digital space. We are ready to take up any challenge and strive to provide the best customer service.
                            </div>
                        </div>
                        <div className='col-lg-6' >
                            <img src={storyoffice} alt="our-story" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className='What-we-do'> */}
                 {/* <div className='Vedio-Section'>
                 <video autoPlay muted loop>
                        <source src='https://www.makemywebsite.com.au/wp-content/uploads/2022/01/MVI_4003_Trim1.mp4' type="video/mp4" />
                    </video>
                </div> */}
                {/* <div className='background-overlay'></div>
                <div className='container Column-gap-default'>
                    <div className='elementer-column'>
                        <div className='elementer-wight-wrap'>
                            <section className='elementer-section'>
                                <div className='elementer-background-overlay'></div>
                                <div className='elementer-container'>
                                    <div className='elementer-column'>
                                        <div className='elementer-wight-wrap mb-5'>
                                            <div className='elementer-element py-5'>
                                                <div className='elementer-wight-container pt-5'>
                                                    <h1 className='elementer-heading-title'>What We Do</h1>
                                                </div>
                                            </div>
                                            <div className='elementer-element mb-5'>
                                                <div className='elementer-wight-container-p mb-5'>
                                                    Make My Website offers end-to-end strategic web solutions with a focus on customer satisfaction. Our mission is simple- to build you a website that aligns with your goals, take a strategic route, and market you online. With over 400+ reviews on Google, Facebook, Oneflare, and Word of Mouth, we have been rated highly credible for the work we do.
                                                    We infuse creativity in your online space and make it a captivating experience for the users on the world wide web.
                                                    <br />
                                                    <br />
                                                    Are yosu looking for a cutting-edge website? We are here to help!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section> */}
             <Customer />
            <ServiceDelivery />

        </div>
    )
}

export default About