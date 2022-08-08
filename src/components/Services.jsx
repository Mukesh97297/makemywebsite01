import React from 'react'
import '../Services.css'
import webdesigns from '../images/web-design-and-development.png'
import digitalmarketing from '../images/digital.png';
import branding from '../images/brand.png';
import emailhosting from '../images/web-email-hosting-1.png';
import customercare from '../images/technical-support.png'
import videography from '../images/photography-and-videography-service.png'
function Services() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
                <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Our Services <hr className='hr'></hr>
                        </h1>
                        <h2>
                            A Full-Service Digital Agency To Help You Grow Online.
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ padding: "4% 5% 4% 5%" }}>
                <div className='container'>
                    <div className='row justify-content-center Services-heading' >
                        Elevate Your Businesses Capabilities By Taking The First Step Towards Enhancing Your Online Presence.
                    </div>
                </div>
            </div>
            <div className='container-fluid web-design' style={{ padding: "20px 0px 20px 0px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6  devlopments' >
                            <h3>Web Design And Development</h3>
                            <p>Web design is a medium that reflects the value you are adding as a business. It should be engaging, innovative, humanistic, and have a story to tell. <br />
                                Make My Website embraces technological advancement and puts forth what’s the best for your brand. Your online presence is important to your business, and we exhibit our passion and creativity.</p>
                            <p>An impressive design is synonymous with a brilliant mind that harnesses innovation beyond imagination. At Make My Website, we boast of brilliance.</p>
                            <div>
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='row justify-content-center' >
                                <img src={webdesigns} alt="webdesigns" className='img-fluid ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid web-design' style={{ padding: "20px 0px 20px 0px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={emailhosting} alt="digitalmarketing" className='img-fluid' />
                        </div>
                        <div className='col-md-6  devlopments pt-5 justify-content-center' >
                            <h3>Digital Marketing</h3>
                            <p>Even the best of websites without a good reach, drop bland into the market since it gets no audience to avail the purposes it is built for. By marketing digitally, as a business owner, you reach out to the right demographic thus making conversion a much faster and simpler process than normal.</p>
                            <div>
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid web-design' style={{ padding: "20px 0px 20px 0px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 devlopments' >
                            <h3>Branding</h3>
                            <p>Branding in itself takes a lot of understanding of brand values and the identity you want the world to remember you with as a brand. </p>
                            <p>Branding in itself takes a lot of understanding of brand values and the identity you want the world to remember you with as a brand. </p>
                            <div className='py-2' >
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='row justify-content-center' >
                                <div>
                                    <img src={branding} alt="barnding" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid web-design' style={{ padding: "20px 0px 20px 0px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6' >
                            <img src={digitalmarketing} alt="emailhosting" className='img-fluid' />
                        </div>
                        <div className='col-md-6 devlopments' >
                            <h3>Web & Email Hosting</h3>
                            <p>Your business’s online address is what is your base for starting everything. This address is nothing but your web hosting i.e. the space you have rented on the internet to store and showcase your business’s projects, deliverables and content. </p>
                            <p>Your business’s online address is what is your base for starting everything. This address is nothing but your web hosting i.e. the space you have rented on the internet to store and showcase your business’s projects, deliverables and content. </p>
                            <div className='py-2' >
                                <a href="/" className='btn btn-dark learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid web-design' style={{ padding: "20px 0px 20px 0px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 devlopments' >
                            <h3>Customer Care</h3>
                            <p>Support is highly crucial when running a website for your business and it is not feasible to handle all of it by yourself. Offering support for a domain and running its various functionalities optimally requires skill, expertise, and experience.</p>
                            <p> Holistic support for your website involves monthly management involving resolution of security issues, updating the plugins, changes in website as per demand, dynamic platform establishment, and making new updates as per search engine’s upgraded amdorithms.</p>
                            <div className='py-2'>
                                <a href="/" className='btn learn-more' role='button'>LEARN MORE</a>
                            </div>
                        </div>
                        <div className='col-md-6 '>
                            <div className='row justify-content-center' >
                                <img src={customercare} alt="cutomercare" height="300px" width="400px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid web-design' style={{ padding: "20px 0px 20px 0px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6' >
                            <img src={videography} alt="vediography" className='img-fluid' />
                        </div>
                        <div className='col-md-6 devlopments' >
                            <h3>Photography And <br /> Videography</h3>
                            <p>Photography & Videography is a medium to visually represent your business. Make My Website and Make My Memories work collaboratively with a visionary approach to enhance your brand presence. </p>
                            <p>Whether you are a service provider or run a product-based business, you would need a professional team to capture its true essence so you can share it with your potential customers.</p>
                            <div className='py-2' >
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