import React from 'react'
import contentMarketing from '../images/content-writing.png'
import '../ContentMarketing.css'
import ServiceDelivery from './ServiceDelivery'
import aos from 'aos';
import 'aos/dist/aos.css'
aos.init();

function ContentMarketing() {
  return (
    <div>
         <div className="container-fluid py-4" id="about-container">
                <div className='container'>
                <div className="row pt-5">
                    <div className="col-md-12 pt-5 webDesignDevelopment">
                        <h1 className=' pt-3' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        Content Marketing
                            <hr className='hr'></hr>
                        </h1>
                        <h2 className='mb-2'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        Strengthening The Backbone Of All <br /> Marketing Endeavours
                        </h2>
                    </div>
                </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 Content-Marketing py-5'>
                        <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Content is and will always reign as the king when it comes to marketing as it is the backbone of all marketing tactics and strategies. When it comes to content, simply producing fresh and trendy content doesn’t break the ice, it’s important to be smart with the content in a way that is evergreen as well as relevant for the audience you’re catering to.</p>
                        <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Content ought to be curated in a way that it can be circulated on different platforms for a reach that isn’t too obvious but highly influential. We believe in creating content that touches people and offers them what they need in real-time while helping brands connect with them. We help you customize your content to fit every space optimally whether it’s marketing through your newsletter, emails, social media handles, business and personal blog or website campaigns.</p>
                    </div>
                    <div className='col-md-5 py-5' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={contentMarketing} alt=""  className='img-fluid'/>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{backgroundColor:"#f5f5f5"}}>
                <div className='container py-5'>
                    <div className='Content-Marketing-1'>
                        <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='py-3'>Why focusing on Content Marketing would yield unparalleled results:</h3>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"><i className="fa-solid fa-circle-check Content-marketing"/> Quality content provides you with the necessary platform to build from You never run out of campaigns and promotional stuff for your audience</p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"><i className="fa-solid fa-circle-check Content-marketing"/> Helps you effectively and proficiently reach out to your audiences</p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"><i className="fa-solid fa-circle-check Content-marketing"/> Let’s you build a network and client base that truly engages with your brand</p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"><i className="fa-solid fa-circle-check Content-marketing"/> Let’s you build a network and client base that truly engages with your brand</p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"><i className="fa-solid fa-circle-check Content-marketing"/> We have mastered content marketing, and know what your time-poor audience would like, to gain their 3 seconds and leave a long-lasting impression.</p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"><i className="fa-solid fa-circle-check Content-marketing"/> We create content that resonates with your brand, values, and the services you offer, hence, if the content is the king, we are the kingmakers.</p>
                    </div>
                </div>
            </div>
            <ServiceDelivery/>
    </div>
  )
}

export default ContentMarketing