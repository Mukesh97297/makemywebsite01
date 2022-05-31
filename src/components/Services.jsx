import React from 'react'
import '../Services.css'
import webdesigns from '../images/web-design-and-development.png'
import digitalmarketing from '../images/digital.png';
import branding from '../images/brand.png';
import emailhosting from '../images/web-email-hosting-1.png';
import customercare from '../images/technical-support.png'
import videography from '../images/photography-and-videography-service.png'
import aos from 'aos'; 
import 'aos/dist/aos.css'
aos.init();


function Services() {
    return (
        <div>
            <div className="container-fluid py-5" id="about-container">
                <div className='container'>
                <div className="row pt-5">
                    <div className="col-md-12 py-5  paragraph">
                        <h1 className='pt-5'>
                            Our Services <hr className='hr'></hr>
                        </h1>
                        <h2>
                            A Full-Service Digital Agency To Help <br /> You Grow Online.
                        </h2>
                    </div>
                </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='conainer'>
                    <div className='row justify-content-center Services-heading py-5'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <p>Elevate Your Businesses Capabilities By Taking The First Step Towards Enhancing Your Online Presence.</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid web-design'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6  devlopments'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <h3 className='py-2'>Web Design And Developments</h3>
                            <p>Web design is a medium that reflects the value you are adding as a business. It should be engaging, innovative, humanistic, and have a story to tell. <br />
                                Make My Website embraces technological advancement and puts forth what’s the best for your brand. Your online presence is important to your business, and we exhibit our passion and creativity.</p>
                            <p>An impressive design is synonymous with a brilliant mind that harnesses innovation beyond imagination. At Make My Website, we boast of brilliance.</p>
                            <div className='py-2'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                        <div className='col-lg-6 pt-5'>
                            <div className='row justify-content-center' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <img src={webdesigns} alt="webdesigns" className='img-fluid ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid digital-marketing'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <img src={emailhosting} alt="digitalmarketing" height='350' width='400' />
                        </div>
                        <div className='col-lg-6 marketing pt-5 justify-content-center' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <h3 className='py-2'>Digital Marketing</h3>
                            <p>Even the best of websites without a good reach, drop bland into the market since it gets no audience to avail the purposes it is built for. By marketing digitally, as a business owner, you reach out to the right demographic thus making conversion a much faster and simpler process than normal.</p>
                            <div className='py-2' data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid branding'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6 brand' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <h3 className='py-2'>Branding</h3>
                            <p className='pt-3'>Branding in itself takes a lot of understanding of brand values and the identity you want the world to remember you with as a brand. </p>
                            <p>Branding in itself takes a lot of understanding of brand values and the identity you want the world to remember you with as a brand. </p>
                            <div className='py-2' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row justify-content-center' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <div className='py-2'>
                                    <img src={branding} alt="barnding" height='350' width='400' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid email-hosting'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <img src={digitalmarketing} alt="emailhosting" height='350' width='400' />
                        </div>
                        <div className='col-lg-6 emails-host'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <h3 className='py-2'>Web & Email Hosting</h3>
                            <p>Your business’s online address is what is your base for starting everything. This address is nothing but your web hosting i.e. the space you have rented on the internet to store and showcase your business’s projects, deliverables and content. </p>
                            <p>Your business’s online address is what is your base for starting everything. This address is nothing but your web hosting i.e. the space you have rented on the internet to store and showcase your business’s projects, deliverables and content. </p>
                            <div className='py-2' data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid customer-care'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6 customer'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <h3 className='py-2'>Customer Care</h3>
                            <p>Support is highly crucial when running a website for your business and it is not feasible to handle all of it by yourself. Offering support for a domain and running its various functionalities optimally requires skill, expertise, and experience.</p>
                            <p> Holistic support for your website involves monthly management involving resolution of security issues, updating the plugins, changes in website as per demand, dynamic platform establishment, and making new updates as per search engine’s upgraded algorithms.</p>
                            <div className='py-2' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                        <div className='col-lg-6 '>
                            <div className='row justify-content-center' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <img src={customercare} alt="cutomercare" height='350' width='400' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid photography-vediography'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <img src={videography} alt="vediography" height='400' width='400' />
                        </div>
                        <div className='col-lg-6 photography'data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <h3 className='py-2'>Photography And <br /> Videography</h3>
                            <p>Photography & Videography is a medium to visually represent your business. Make My Website and Make My Memories work collaboratively with a visionary approach to enhance your brand presence. </p>
                            <p>Whether you are a service provider or run a product-based business, you would need a professional team to capture its true essence so you can share it with your potential customers.</p>
                            <div className='py-2' data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Services