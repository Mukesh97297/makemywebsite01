import React from 'react'

import webdesign from '../images/web-design-and-development.png'
import webDesign from '../animation/WebDesign.json'
import Lottie from "lottie-react";
import ServiceDelivery from './ServiceDelivery';
function WebDesignDevlopment() {
  return (
    <div>
      <div className="container-fluid pl-5 pt-3" id="about-container">
        <div className="row pt-5">
          <div className="col-md-12 py-5 pl-5 webDesignDevelopment">
            <h1 className='pl-4 pt-5'>
              Web Design & Development <hr className='hr'></hr>
            </h1>
            <h2 className='pl-4'>
              Building Future-Proof Designs For <br /> Companies That Envision Growth.
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
      <div className='container-fluid bg-white'>
        <div className='container py-5'>
          <div className='row tell py-5'>
            <p>Web design is a medium that reflects the value you are adding as a business. It should be engaging, innovative, humanistic, and have a story to tell.</p>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{backgroundColor:"#E8E8E86B"}}>
        <div className='container py-5'>
          <div className='row py-5'>
            <div className='col-lg-7 animated-section'>
                <p>Make My Website embraces technological advancement and puts forth what’s the best for your brand. Your online presence is important to your business, and we exhibit our passion and creativity.</p>
                <p>An impressive design is synonymous with a brilliant mind that harnesses innovation beyond imagination. At Make My Website, we boast of brilliance.</p>
                <p>We understand the nitty-gritty of the online space and work towards our vision to provide you with a stunning website along with a user-friendly experience that radiates ease of use, and professionalism. We intertwine flexibility and customization to provide you with services tailored to your business. To put it simply, our approach has always been customer-centric, and solution-oriented and being problem-solvers for years now, we have mastered the art of web design.  </p>

            </div>
            <div className='col-lg-5'>
               <Lottie animationData={webDesign} loop={true} autoplay={true} style={{height:"100%", width:"100%"}}  />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' >
        <div className='container'>
          <div className='row online-presence py-5'>
            <h3>Design & development to stimulate your online presence</h3>
          </div>
          <div className='row'>
            <div className='col-lg-6 Design-creativity'>
               <p>We know what it takes to design a website that stands out and works for your business. Whatever industry you are in, we can cater to your web design needs and utilize our expertise to provide you with a professional web design and development solution that showcases functional design and creativity. </p>
               <p>Every project we undertake is a new association strongly built on trust, and all the good work we do. This is one of the many reasons why we are highly rated for our work.</p>
               <p>Whatever your requirement may be, we deliver the best and ensure constant transparency throughout the project.</p>
            </div>
            <div className='col-lg-6'>
              <img src={webdesign} alt="" className='img-fluid' />
            </div>
          </div>
          <div className='row design-provider py-5'>
            <p>A brilliant website consists of three main things, the best user experience, easy navigation, and a responsive design compatible with all devices, along with overall consistency in typography, graphics, and colours. </p>
            <p>The prime area of focus for us whilst designing and developing any website for you is its usability and creating functionality that suits your business needs.  </p>
             <h3 className='py-3'>Why Make My Website is your go-to web design provider</h3>
             <p><i className="fa-solid fa-circle-check design-provider-i"></i> We wore our creative hats years ago and decided to never get rid of them.</p>
             <p><i className="fa-solid fa-circle-check design-provider-i"></i> We maintain constant communication to understand your exact needs and design preferences.</p>
             <p><i className="fa-solid fa-circle-check design-provider-i"></i> Our specialized team manages projects seamlessly- one of the many reasons why we can deliver more websites.</p>
             <p><i className="fa-solid fa-circle-check design-provider-i"></i> We have worked with clients from every industry, hence, we exactly know what you are after.</p>
             <p><i className="fa-solid fa-circle-check design-provider-i"></i> We follow the agile approach and continue to work closely with all the stakeholders involved, to provide the desired solution.</p>
             <p className='py-2'>Let’s create what you have envisioned for your online space- simple or complex, we are here to help! Drop us a line and we’d be the happiest to help you out.</p>
          </div>
        </div>
      </div>
      <ServiceDelivery/>
      
    </div>
  )
}

export default WebDesignDevlopment