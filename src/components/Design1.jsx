import React from 'react'
import "../Design.css"
import { Link } from "react-router-dom"
import sco1 from "../images/seo-benifits (1).png"
import ServiceDelivery from './ServiceDelivery'
function Design1() {
    return (
        <div>
            <section className='designblog-section'>
                <div className='designblog-overlay'></div>
                <div className='designblog-shape'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	                        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	                        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z">
                        </path>
                    </svg>
                </div>
                <div className='container designblog-animation-section'>
                    <div className='seo-and'>
                        <h1>SEO and Its Importance</h1>
                        <div className='row justify-content-center admin-section'>
                            <div className='admin'>
                                <span><i class='far fa-user-circle'></i></span>
                                <span className='text-white'>Admin</span>
                            </div>
                            <div className='calendar'>
                                <span><i class='fas fa-calendar'></i></span>
                                <span className='text-white'>August 16, 2016</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='design-img-section-overlay'>
                <div className='container container-max-width-900'>
                    <div className='one-1'>
                        <img src={sco1} alt="" className='img-fluid' />
                    </div>
                    <div className='two-1'></div>
                    <div className='two-1'></div>
                    <section className='see-this-post-section'>
                        <div className='row'>
                            <div className='col-md-6 share-this-col'>
                                <div className='share-this-post'>
                                    <h2>Share This Post</h2>
                                </div>
                            </div>
                            <div className='col-md-6 share-this-col'>
                                <div className='media-section'>
                                    <div>
                                        <span><Link to="/" onClick={() => { window.open("https://www.facebook.com/makemywebsite.com.au") }}><i className="fa-brands fa-facebook"></i> </Link></span>
                                    </div>
                                    <div>
                                        <span><Link to="/" onClick={() => { window.open("https://www.linkedin.com/company/make-my-website-pty-ltd/") }}>  <i className="fa-brands fa-linkedin"></i> </Link>  </span>
                                    </div>
                                    <div>
                                        <span> <Link to="/" onClick={() => { window.open("https://twitter.com/makemywebsite16") }}> <i className="fa-brands fa-twitter-square"></i> </Link></span>
                                    </div>
                                    <div>
                                        <span><Link to="/" onClick={() => { window.open("https://api.whatsapp.com/send?text=*SEO%20and%20Its%20Importance%20is%20a%20easy%20way%20to%20improve%20your%20website*SEO%20has%20become%20more%20important%20than%20ever%20in%20today%E2%80%99s%20competitive%20market.%20Millions%20of%20users%20find%20answers%20to%20their%20questions%20by%20using%20search%20engines.%20Having%20the%20website,%20blog%20or%20online%20store%20can%20get%20growth%20through%20SEO.https://www.makemywebsite.com.au/seo-and-its-importance/") }}><i class='fab fa-whatsapp'></i></Link></span>
                                    </div>
                                    <div>
                                        <span><Link to="/thankyou"><i class="fa fa-envelope"></i></Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='sco-importance'>
                        <p><strong>SEO and Its Importance:</strong>
                            Search Engine Optimization (SEO) is an easier and faster way to improve your website organic ranking in the search results of Google, Yahoo, Bing or other search engines. The higher your website ranks on these search engines, it is the increase the probability of attracting users to your website. Why Is it Important?
                        </p>
                        <p>SEO has become more important than ever in today’s competitive market. Millions of users find answers to their questions by using search engines. Having the website, blog or online store can get growth through SEO.</p>
                        <p>Usually,  the majority of people click on top 5 searches on search result page so to gain one of the ranks among those top 5 rankings SEO is essential. If your website, blog or online business ranks higher than non-optimized websites than you gain more visitors and these visitors can be converted into customers.</p>
                        <p>Another reason to choose SEO for your business is it’s cost effective. Other forms of internet/online marketing such as social media marketing, PPC advertising or purchasing leads are quite expensive as compared to SEO. Your organic ranking in many ways remains a bedrock of your online presence. So SEO is not a cost but an investment.</p>
                        <p>SEO is the master when it comes pulling the potential clients, therefore SEO will increase your sales and grow profits exponentially and over time.</p>
                        <p>SEO helps in building your brand. When more people visit your website, get familiar with you, buy or order products from you, then you have more people likely to come back again and this way it can help accelerate your branding campaign.</p>
                        <p>A well-planned SEO campaign reaches its prospects and the lead them to your website and addresses exactly what they’re looking for. In this way, SEO acts like a combination of a guide, receptionist, concierge, marketing executive and salesperson.</p>
                        <p>So in a nutshell, SEO can put you ahead of the competition.</p>
                        <p><strong>Read more about </strong><Link to="/">Various Reasons You Must Optimize Your Website for Mobile</Link></p>
                    </div>
                </div>
            </section>
            <ServiceDelivery />

        </div>
    )
}

export default Design1