import React from 'react'
import '../SocialMediaMarketing.css'
import socialMediaIcon from '../images/social-media2.png'
import ServiceDelivery from './ServiceDelivery'
import aos from 'aos';
import 'aos/dist/aos.css'
aos.init();

function SocialMediaMarketing() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
            <div className='row paragraph1 pt-5'>
                    <div className="col-md-6 paragraph pt-5">
                        <h1 className='pt-5'>
                            Social Media Marketing
                            <hr className='hr'></hr>
                        </h1>
                        <h2>
                            Improvise Your Social Branding With Experts Who Know It All
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-md-7 social-media-marketing'>
                        <p >Social Media is the new trusted source of all kinds of information since it is mixed well with entertainment to build infotainment in a nutshell. With so many experts, tradesmen, and professionals using the platform to impart information and connect with their audience, there is no doubt in the vast reach of social media as a platform.</p>
                        <p >However, marketing for an audience on social media is different from doing it elsewhere. Our expert Social Media Marketing (SMM) team lets you connect with your audience in a real and holistic manner. We build campaigns that are truly meaningful and captivating, building your social identity and presence as a brand. The vast influence of social media is fascinating in several ways and that’s exactly what we build on.</p>
                    </div>
                    <div className='col-md-5'>
                        <img src={socialMediaIcon} alt="" className='img-fluid' />
                    </div>

                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: '#f5f5f5' }}>
                <div className='container py-5'>
                    <div className='social-media-marketing-1'>
                        <h3 className='py-2'>Why SMM builds your presence like none other:</h3>
                        <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false"><i className="fa-solid fa-circle-check Social-marketing" /> Helps your business get in touch with your audience in real-time</p>
                        <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false"><i className="fa-solid fa-circle-check Social-marketing" /> Let’s you understand your audience’s demand better</p>
                        <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false"><i className="fa-solid fa-circle-check Social-marketing" /> Allows you to communicate and connect better</p>
                        <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false"><i className="fa-solid fa-circle-check Social-marketing" /> Builds your unique identity and goodwill as a brand</p>
                        <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false"><i className="fa-solid fa-circle-check Social-marketing" /> Builds your unique identity and goodwill as a brand</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='social-media-marketing-2 py-5'>
                    <p >Social Media is a platform to establish your social identity, share your brand values, and insights about your business to those who can relate to it, and become your customers. </p>
                    <p >Research shows that people scroll through a brand’s social media to get an idea about their way of working, and if they can solve their problems with their services/products. </p>
                    <p >At Make My Website, we position you as a brand and create your own space where you can engage with your target audience.</p>
                </div>
            </div>
            <ServiceDelivery />

        </div>
    )
}

export default SocialMediaMarketing