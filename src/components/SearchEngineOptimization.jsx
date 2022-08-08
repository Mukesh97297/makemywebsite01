import React from 'react'
import sco1 from '../images/seo1.png'
import '../SearchEngineOptimization.css'
import ServiceDelivery from './ServiceDelivery'
function SearchEngineOptimization() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
            <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Search Engine Optimization
                            <hr className='hr'></hr>
                        </h1>
                        <h2 className='mb-2'>
                            An Amalgamation Of Consistency And Knowledge To Enhance Your Online Presence
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='search-engine py-5'>
                    <p>When the visibility of your website and web pages depends on search engines and their SERPs (Search Engine Result Pages), it is an obvious quest to keep your business afloat with the most efficient tools helping your pages rank higher and higher. As you build on the ranking with quality, evergreen content while optimizing your website to its full potential with our experts, gradually, you’ll see your tribe growing and thriving.</p>
                    <p>As a team dedicated to building an ongoing relationship with the clients, we are 100% transparent about our approach and deliver what we promise. </p>
                </div>
            </div>
            <div className='container-fluid search-engine-1'>
                <h3 data-aos="slide-bottom" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false" className='py-4'>How can Make My Website help you with your rankings?</h3>
                <div className='row py-4'>
                    <div className='col-md-7 search-engine-2'>
                        <p><i className="fa-solid fa-circle-check search-icon"></i> It markets your products/services to the right audience</p>
                        <p><i className="fa-solid fa-circle-check search-icon"></i> It boosts your conversion ratio</p>
                        <p><i className="fa-solid fa-circle-check search-icon"></i> Builds your goodwill in your demographic</p>
                        <p><i className="fa-solid fa-circle-check search-icon"></i> Allows you to build visibility in the right places</p>
                        <p><i className="fa-solid fa-circle-check search-icon"></i> Rankings convert leads, thus boosting business</p>
                        <p>SEO is predominantly an organic way of ranking your website, and coming up in search results on major search engines. We cover every single aspect and follow ethical practices to do SEO for your business.</p>
                    </div>
                    <div className='col-md-5' >
                        <img src={sco1} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className='container-fluid search-engine-3 py-5'>
                <h3 >How can Make My Website help you with your rankings?</h3>
                <p><i className="fa-solid fa-circle-check search-icon" /> We work on several different keyboards as per your niche and set up analytics to monitor the traffic and website performance.</p>
                <p><i className="fa-solid fa-circle-check search-icon" /> We continuously work on link-building and cater for on-page and off-page optimization.</p>
                <p><i className="fa-solid fa-circle-check search-icon" /> We write fresh, copyrighted content, depending on the extent of service you choose us for.</p>
                <p><i className="fa-solid fa-circle-check search-icon" /> We take care of local citations, title tags, and meta tags.</p>
                <p><i className="fa-solid fa-circle-check search-icon" /> We ensure transparency by sharing monthly reports with you for review.</p>
                <a href="/" className='btn btn-dark' role="button">CLICK HERE FOR FREE SEO AUDIT REPORT</a>
            </div>
            <ServiceDelivery />
        </div>
    )
}

export default SearchEngineOptimization