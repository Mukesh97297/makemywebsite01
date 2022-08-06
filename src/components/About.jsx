import React from 'react'
import storyoffice from '../images/our-story.jpg'
import Customer from './Customer'
import ServiceDelivery from './ServiceDelivery'
import '../About.css'
import Caraousel from './Caraousal'
import WhatWeDo from './WhatWeDo'
function About() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
            <div className='row paragraph1 pt-5'>
                    <div className="col-md-6 paragraph pt-5">
                        <h1 className='pt-5'>
                            About Us <hr className='hr'></hr>
                        </h1>
                        <h2>
                            A Team Of Experts United By The Passion For
                            Technology-Led Solutions
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
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
            <Caraousel />
            <div className='container-fluid' style={{ padding: "100px 35px 100px 35px" }}>
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
            <WhatWeDo />
            <Customer />
            <ServiceDelivery />

        </div>
    )
}

export default About