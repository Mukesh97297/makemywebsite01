import React from 'react'
import "../faq.css"
import ServiceDelivery from './ServiceDelivery'
function Faq() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
                <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            FAQ
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2>
                            Addressing Your Queries,One Question At A Time.
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <section className='faq'>
                <div className='container faq-to-container'>
                    <div className='row faq-to-row'>
                        <div className='friquently-asked'>
                            <h2>Frequently asked questions</h2>
                        </div>
                        <div className='Looking'>
                            <div className='looking-learn'>
                                Looking to learn more about us? Below are some of the commonly asked questions we
                                hear almost every day. If you still have any other query, feel free to write to us or give us
                                a call.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='toggle-section'>
                <div className='container'>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>How much does a website cost?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo" className="collapse qustions-simply">
                                As much as we want to answer this question simply, there is no thumb rule as to what a website should cost. It will certainly depend on project requirements, features, and inclusions to say the least. Some websites that are less complex will incur a different cost than a website that has some custom features and integrations. A fully customized website with in-depth custom features and integrations including e-commerce will incur higher cost. At Make My Website, we have a detailed discussion with our clients to provide them with the right quote. If you’re looking to get a website designed for your business, you are in the right place. Get in touch with Make My Website today!
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>What all is included in a website?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo1">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo1" className="collapse qustions-simply">
                                Depending on project requirements and client needs, we create a fully functional website that has a range of features that suit their brand.
                                <br />
                                <br />
                                Our websites include (as per customer requirements) :
                                <br /><br />
                                <ul>
                                    <li>Web pages</li>
                                    <li>Responsive Designs</li>
                                    <li>Stock Images</li>
                                    <li>Call to Action buttons</li>
                                    <li>Enquiry Form</li>
                                    <li>Social Media Icons</li>
                                    <li>Photo Gallery</li>
                                    <li>Slider</li>
                                    <li>On-Page SEO</li>
                                    <li>Custom Form</li>
                                    <li>Google Map Integration</li>
                                    <li>Blogs</li>
                                    <li>Newsletter Sign Up</li>
                                    <li>Testimonials</li>
                                    <li>Upgraded Graphic Buttons with Hover Transitions</li>
                                    <li>Content Styling and Graphics</li>
                                    <li>Shopping Cart</li>
                                    <li>Payment Gateway</li>
                                    <li>Site Search</li>
                                    <li>Products</li>
                                    <li>Client Login portal</li>
                                    <li>Product Ratings, and more.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>Where are you located?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo2">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo2" className="collapse qustions-simply">
                                We are a Melbourne-based digital agency with clients in every state and territory of Australia. Our head office is based in 3/17 Perpetual St, Truganina VIC 3029. While most of our clients deal with us online, we are more than happy to assist you at our office.
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>How much time will it take to build a website?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo3">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo3" className="collapse qustions-simply">
                                It usually takes 2-4 weeks to build a website. However, it depends on how quickly client provides inputs, and feedback plus, how complex the project is.
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>What all technologies do you build websites on?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo4">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo4" className="collapse qustions-simply">
                                We build websites on all major platforms like WordPress, WooCommerce, Shopify, and Magento.
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>Will I own my website?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo5">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo5" className="collapse qustions-simply">
                                100%. All the websites we build are owned by the respective clients. You will have full ownership of your website, and can make changes to your website at any time. However, it is recommended to have one of our experts to manage your website.
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>Do you offer website management services?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo6">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo6" className="collapse qustions-simply">
                                Certainly. We offer monthly website maintenance services wherein we take care of the security of the website, continuously update the plugins and make any changes as per your requirements.
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>Is it necessary to host a website with MMW?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo7">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo7" className="collapse qustions-simply">
                                No, it’s not necessary. However, we prefer our customers to host their websites with MMW so that we can provide the continuous management and security of your website. It will be our responsibility to cater for all server related issues.
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>What are MMW payment plans?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo8">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo8" className="collapse qustions-simply">
                                We charge 50% of the amount quoted at the commencement of your website and will charge the rest 50% on the completion of your website once you will be fully satisfied with your website.
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center collapse-top-row'>
                        <div className='col-md-12 border-column '>
                            <div className='row d-flex website-cost'>
                                <div className='col-11'>
                                    <span>Will my website be optimized for SEO?</span>
                                </div>
                                <div className='col-1 plus-button'>
                                    <div type='button' data-toggle="collapse" data-target="#demo9">
                                        <span><i className='fas fa-plus'></i></span>
                                    </div>
                                </div>
                            </div>
                            <div id="demo9" className="collapse qustions-simply">
                                Yes, your website will be optimized for SEO as we do the basic on-page optimization for all websites. However, if you’re after growing your online presence, we do offer expert SEO services. Please inquire within!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ServiceDelivery />
            </section>
        </div>
    )
}

export default Faq