import React from 'react'
import storyoffice from '../images/our-story.jpg'
import Customer from './Customer'
import ServiceDelivery from './ServiceDelivery'

function About() {
    return (
        <div>
          
            <div className="container-fluid pl-5 pt-5" id="about-container">
                <div className="row pt-5">
                    <div className="col-md-12 pl-5 paragraph">
                        <h1 className='pl-4 pt-5'>
                            About Us <hr className='hr'></hr>
                        </h1>
                        <h2 className='pl-4'>
                            A Team Of Experts United By The <br></br>Passion For
                            Technology-Led Solutions
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
            <div className="container-fluid py-5 ">
                <div className='container py-5'>
                    <div className='row'>
                        <div className='main-heading'>
                            <h2>About Make My Website</h2>
                        </div>
                        <div className='main-heading1'>
                            <h4>A promising agency that redefines digitalisation and develops magnificent web experiences</h4>
                        </div>
                        <div className='main-heading2'>
                            <p>Make My Website envisions empowering local businesses by creating meaningful
                                experiences for them to ace in their fields of expertise. We take pride in having
                                successful associations across Australia whilst adopting innovative practices and
                                fostering creativity to do what it takes to deliver the best.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5' style={{ backgroundColor: "black" }}>
                <div className=''></div>
            </div>
            <div className='container-fluid py-5'>
                <div className='container  py-5'>
                    <div className='row justify-content-center'>
                        <h2 className='our-story'>
                            Our Story
                        </h2>
                    </div>
                    <div className='row justify-content-center py-5'>
                        <div className='col-md-6'>
                            <p className='our-story-p'>
                                What first started as an idea has now transformed into a vision and as we continue to expand our horizons- our commitment towards providing high standards of service has just gotten stronger.
                                As a digital agency with clients in every single state and territory of Australia, our establishment as a renowned company has been worthwhile.
                            </p>
                            <p className='our-story-p'>Our dynamic team has delivered 600+ websites, created ingenious strategies and helped numerous
                                businesses in this digital space. We are ready to take up any challenge and strive to provide the best customer service.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <img src={storyoffice} alt="our-story" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid vedios-section'>
               <div className='elementor-background-video-container'> <video className='elementor-background-video-hosted' autoPlay muted loop width="100%" height="100%"><source src='https://www.makemywebsite.com.au/wp-content/uploads/2022/01/MVI_4003_Trim1.mp4' type="video/mp4" /></video></div>
                <div className=' row justify-content-center vedio-text'>
                    <div className='col-md-6'>
                        <h2>What We Do</h2>
                        <p>Make My Website offers end-to-end strategic web solutions with a focus on customer
                            satisfaction. Our mission is simple- to build you a website that aligns with your goals, take
                            a strategic route, and market you online. With over 400+ reviews on Google, Facebook, Oneflare,
                            and Word of Mouth, we have been rated highly credible for the work we do.
                            We infuse creativity in your online space and make it a captivating experience
                            for the users on the world wide web.
                        </p>
                        <p>
                            Are you looking for a cutting-edge website? We are here to help!
                        </p>
                    </div>
                </div>
            </div>
            <Customer/>
            <ServiceDelivery/>
        </div>
    )
}

export default About