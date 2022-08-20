import React from 'react'
import '../WebDesignDevlopment.css'
import webdesign from '../images/web-design-and-development.png'
import webDesign from '../animation/WebDesign.json'
import Lottie from "lottie-react";
import ServiceDelivery from './ServiceDelivery';

function WebDesignDevlopment() {
  return (
    <div>
      <div className="container-fluid" id="about-container">
        <div className='row paragraph1'>
          <div className="col-md-6 paragraph">
            <h1>
              Web Design & Development <hr className='hr'></hr>
            </h1>
            <h2>
              Building Future-Proof Designs For <br /> Companies That Envision Growth.
            </h2>
            <span className='shape-about-1'></span>
            <span className='shape-about-2'></span>
          </div>
        </div>
      </div>
      <div className='mb-5'>
        <div className='container-fluid bg-white'>
          <div className='container WebDesignDevlopment'>
            <div className='row tell'>
              <p>Web design is a medium that reflects the value you are adding as a business. It should be engaging, innovative, humanistic, and have a story to tell.</p>
            </div>
          </div>
        </div>
        <div className='container-fluid technologiacal'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 animated-section'>
                <p >Make My Website embraces technological advancement and puts forth what’s the best for your brand. Your online presence is important to your business, and we exhibit our passion and creativity.</p>
                <p >An impressive design is synonymous with a brilliant mind that harnesses innovation beyond imagination. At Make My Website, we boast of brilliance.</p>
                <p >We understand the nitty-gritty of the online space and work towards our vision to provide you with a stunning website along with a user-friendly experience that radiates ease of use, and professionalism. We intertwine flexibility and customization to provide you with services tailored to your business. To put it simply, our approach has always been customer-centric, and solution-oriented and being problem-solvers for years now, we have mastered the art of web design.</p>
              </div>
              <div className='col-lg-5 animated-section1'>
                <Lottie animationData={webDesign} loop={true} autoplay={true} className="lottiesections"/>
              </div>
            </div>
          </div>
        </div>
        <div className='container' >
          <div className='row online-presence' >
            <h3>Design & development to stimulate your online presence</h3>
          </div>
          <div className='row'>
            <div className='col-lg-6 Design-creativity' >
              <p >We know what it takes to design a website that stands out and works for your business. Whatever industry you are in, we can cater to your web design needs and utilize our expertise to provide you with a professional web design and <strong>development</strong> solution that showcases functional design and creativity. </p>
              <p className='special'>Every project we undertake is a new association strongly built on trust, and all the good work we do. This is one of the many reasons why we are highly rated for our work.</p>
              <p >Whatever your requirement may be, we deliver the best and ensure constant transparency throughout the project.</p>
            </div>
            <div className='col-lg-6' >
              <img src={webdesign} alt="" className='img-fluid' />
            </div>
          </div>
          <div className='row design-provider'>
            <p >A brilliant website consists of three main things, the best user experience, easy navigation, and a responsive design compatible with all devices, along with overall consistency in typography, graphics, and colours. </p>
            <p className='special mb-5' >The prime area of focus for us whilst designing and developing any website for you is its usability and creating functionality that suits your business needs.  </p>
             <div className='row provider'>
               <h3>Why Make My Website is your go-to web design provider</h3>
             </div>
            <p className='d-flex'><i className="fa-solid fa-circle-check design-provider-i pt-1"></i> <span className='ml-2'>We wore our creative hats years ago and decided to never get rid of them.</span></p>
            <p className='d-flex'><i className="fa-solid fa-circle-check design-provider-i pt-1"></i><span className='ml-2'> We maintain constant communication to understand your exact needs and design preferences.</span></p>
            <p className='d-flex'><i className="fa-solid fa-circle-check design-provider-i pt-1"></i> <span className='ml-2'>Our specialized team manages projects seamlessly- one of the many reasons why we can deliver more websites.</span></p>
            <p className='d-flex'><i className="fa-solid fa-circle-check design-provider-i pt-1"></i> <span className='ml-2'>We have worked with clients from every industry, hence, we exactly know what you are after.</span></p>
            <p className='d-flex'><i className="fa-solid fa-circle-check design-provider-i pt-1"></i> <span className='ml-2'>We follow the agile approach and continue to work closely with all the stakeholders involved, to provide the desired solution.</span></p>
            <p >Let’s create what you have envisioned for your online space- simple or complex, we are here to help! Drop us a line and we’d be the happiest to help you out.</p>
          </div>
        </div>

      </div>
      <ServiceDelivery />

    </div>
  )
}

export default WebDesignDevlopment