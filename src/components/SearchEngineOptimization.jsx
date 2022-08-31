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
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2 className='mb-2'>
                            An Amalgamation Of Consistency And Knowledge To Enhance Your Online Presence
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container search-engine'>
                    <p>When the visibility of your website and web pages depends on search engines and their SERPs (Search Engine Result Pages), it is an obvious quest to keep your business afloat with the most efficient tools helping your pages rank higher and higher. As you build on the ranking with quality, evergreen content while optimizing your website to its full potential with our experts, gradually, you’ll see your tribe growing and thriving.</p>
                    <p>As a team dedicated to building an ongoing relationship with the clients, we are 100% transparent about our approach and deliver what we promise. </p>
                </div>
            </div>
            <div className='container-fluid '>
                <div className='container search-engine-1'>
                <h3>What Makes SEO crucial for your website’s growth</h3>
                <div className='row'>
                    <div className='col-lg-7 search-engine-2'>
                        <p className='d-flex'><i className="fa-solid fa-circle-check search-icon pt-1"></i><span className='ml-2'>It markets your products/services to the right audience</span></p>
                        <p className='d-flex'><i className="fa-solid fa-circle-check search-icon pt-1"></i><span className='ml-2'>It boosts your conversion ratio</span></p>
                        <p className='d-flex'><i className="fa-solid fa-circle-check search-icon pt-1"></i><span className='ml-2'>Builds your goodwill in your demographic</span></p>
                        <p className='d-flex'><i className="fa-solid fa-circle-check search-icon pt-1"></i><span className='ml-2'>Allows you to build visibility in the right places</span></p>
                        <p className='d-flex'><i className="fa-solid fa-circle-check search-icon pt-1"></i><span className='ml-2'>Rankings convert leads, thus boosting business</span></p>
                        <p>SEO is predominantly an organic way of ranking your website, and coming up in search results on major search engines. We cover every single aspect and follow ethical practices to do SEO for your business.</p>
                    </div>
                    <div className='col-lg-5' >
                        <img src={sco1} alt="" className='img-fluid' />
                    </div>
                </div>
                </div>
            </div>
            <div className='container'>
                <div className='search-engine-3'>
                <h3 >How can Make My Website help you with your rankings?</h3>
                <p className="d-flex"><i className="fa-solid fa-circle-check search-icon pt-1" /> <span className="ml-2">We work on several different keyboards as per your niche and set up analytics to monitor the traffic and website performance.</span></p>
                <p className="d-flex"><i className="fa-solid fa-circle-check search-icon pt-1" /> <span className="ml-2">We continuously work on link-building and cater for on-page and off-page optimization.</span></p>
                <p className="d-flex"><i className="fa-solid fa-circle-check search-icon pt-1" /> <span className="ml-2">We write fresh, copyrighted content, depending on the extent of service you choose us for.</span></p>
                <p className="d-flex"><i className="fa-solid fa-circle-check search-icon pt-1" /> <span className="ml-2">We take care of local citations, title tags, and meta tags.</span></p>
                <p className="d-flex"><i className="fa-solid fa-circle-check search-icon pt-1" /> <span className="ml-2">We ensure transparency by sharing monthly reports with you for review.</span></p>
                <div>
                  <a href="/" className='btn btn-dark' role="button">CLICK HERE FOR FREE SEO AUDIT REPORT</a>
                 </div>
                </div>
            </div>
            <ServiceDelivery />
        </div>
    )
}

export default SearchEngineOptimization