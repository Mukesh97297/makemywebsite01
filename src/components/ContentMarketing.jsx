import React from 'react'
import contentMarketing from '../images/content-writing.png'
import '../ContentMarketing.css'
import ServiceDelivery from './ServiceDelivery'

function ContentMarketing() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
            <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Content Marketing
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2>
                            Strengthening The Backbone Of All Marketing Endeavours
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 Content-Marketing'>
                        <p >Content is and will always reign as the king when it comes to marketing as it is the backbone of all marketing tactics and strategies. When it comes to content, simply producing fresh and trendy content doesn’t break the ice, it’s important to be smart with the content in a way that is evergreen as well as relevant for the audience you’re catering to.</p>
                        <p >Content ought to be curated in a way that it can be circulated on different platforms for a reach that isn’t too obvious but highly influential. We believe in creating content that touches people and offers them what they need in real-time while helping brands connect with them. We help you customize your content to fit every space optimally whether it’s marketing through your newsletter, emails, social media handles, business and personal blog or website campaigns.</p>
                    </div>
                    <div className='col-lg-5 py-5' >
                        <img src={contentMarketing} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: "#f5f5f5" }}>
                <div className='container'>
                    <div className='Content-Marketing-1'>
                        <h3>Why focusing on Content Marketing would yield unparalleled results:</h3>
                        <p className='d-flex'><i className="fa-solid fa-circle-check Content-marketing" /> <span> Quality content provides you with the necessary platform to build from You never run out of campaigns and promotional stuff for your audience</span> </p>
                        <p className='d-flex'><i className="fa-solid fa-circle-check Content-marketing" /> <span>Helps you effectively and proficiently reach out to your audiences</span></p>
                        <p className='d-flex'><i className="fa-solid fa-circle-check Content-marketing" /> <span>Let’s you build a network and client base that truly engages with your brand</span></p>
                        <p className='d-flex'><i className="fa-solid fa-circle-check Content-marketing" /> <span>Let’s you build a network and client base that truly engages with your brand</span></p>
                        <p className='d-flex'><i className="fa-solid fa-circle-check Content-marketing" /> <span>We have mastered content marketing, and know what your time-poor audience would like, to gain their 3 seconds and leave a long-lasting impression.</span></p>
                        <p className='d-flex'><i className="fa-solid fa-circle-check Content-marketing" /> <span> We create content that resonates with your brand, values, and the services you offer, hence, if the content is the king, we are the kingmakers.</span></p>
                    </div>
                </div>
            </div>
            <ServiceDelivery />
        </div>
    )
}

export default ContentMarketing