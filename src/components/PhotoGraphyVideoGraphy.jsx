import React from 'react'
import '../PhotoGraphyVideoGraphy.css'
import Lottie from 'lottie-react'
import vediography from '../animation/Photography.json'
import ServiceDelivery from './ServiceDelivery'
import aos from 'aos'
import 'aos/dist/aos.css'
aos.init();

function PhotoGraphyVideoGraphy() {
    return (
        <div>
            <div className="container-fluid py-4" id="about-container">
               <div className='container'>
               <div className="row pt-5">
                    <div className="col-md-12 py-5 webDesignDevelopment">
                        <h1 className=' pt-5' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            Photography & Videography<hr className='hr'></hr>
                        </h1>
                        <h2 className='' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            The Art Of Storytelling To Showcase <br /> Your Business To The World
                        </h2>
                    </div>
                </div>
               </div>
            </div>
            <div className='container-fluid' >
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-7 PhotoGraphy mb-5' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Photography & Videography is a medium to visually represent your business. Make My Website and Make My Memories work collaboratively with a visionary approach to enhance your brand presence. </p>
                            <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Whether you are a service provider or run a product-based business, you would need a professional team to capture its true essence so you can share it with your potential customers.</p>
                            <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">There is no denying the fact that content in terms of photographs and videos lets you tell a story without even uttering a word- and that is what we are all about! We create stories that instantly connect to your target audience.</p>
                            <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Be it conceptualising the shoots, catering for product shots and flat lays, taking professional headshots, your team photos for your immaculate website, or making a commercial for your business, you know who to reach out to! </p>
                            <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Our team has extensive experience, and access to professional gear to create what you are after. </p>
                            <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">As we always say, we decided to wear that creative hat years ago and to never get rid of it!</p>
                        </div>
                        <div className='col-lg-5'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <Lottie animationData={vediography} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor:"black"}}>
                <div className='container'>
                    <div className='row VedioGraphy py-5' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">We are your local creative team with one of the largest photo studios in the western suburbs of Melbourne, in Truganina.</p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Our portfolio includes a broad spectrum of clientele including but not limited to, real estate companies, builders and developers, logistics and supply-chain companies, packaging companies, restaurants, product-based businesses, and other corporate clients.</p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Our portfolio includes a broad spectrum of clientele including but not limited to, real estate companies, builders and developers, logistics and supply-chain companies, packaging companies, restaurants, product-based businesses, and other corporate clients.</p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Feel free to go through our portfolio, and get in touch with our friendly team to have all your queries answered. </p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">It is needless to say that as a company, we strive to achieve customer satisfaction, and every service of ours is delivered with the same approach. </p>
                        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Reach out to us today!</p>
                    </div>
                </div>
            </div>
            <ServiceDelivery/>

        </div>
    )
}

export default PhotoGraphyVideoGraphy