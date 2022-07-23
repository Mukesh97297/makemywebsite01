import React from 'react'
import '../CustomerCare.css'
import Lottie from 'lottie-react'
import support from '../animation/CustomerCare.json'
import ServiceDelivery from './ServiceDelivery'
function CustomerCare() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
                <div className="row paragraph1">
                    <div className="col-md-6 paragraph">
                        <h1>
                            Customer Care<hr className='hr'></hr>
                        </h1>
                        <h2>
                            An End-To-End Service Aimed At Managing Your Tech-Driven Platforms
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: "#E8E8E86B" }}>
                <div className='container'>
                    <div className='row justify-content-center py-5'>
                        <div className='Customer-Care'>
                            <h1>Hi! Need Some Help?</h1>
                            <p>Question not answered yet? We are here to help!</p>
                        </div>
                    </div>
                    <form>
                        <div className='row py-5'>
                            <div className='col-lg-6 mb-5'>
                                <label for="inputEmail4" className='form-span'>First Name</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <label for="inputEmail4" className='form-span'>Last Name</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <label for="inputEmail4" className='form-span'>Phone Number</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <label for="inputEmail4" className='form-span'>Email</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className='col-lg-12 mb-5'>
                                <label for="inputEmail4" className='form-span'>Issue</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className='col-lg-12 mb-5'>
                                <label for="inputEmail4" className='form-span'>Details</label>
                                <textarea type="text" className="form-control" style={{ height: "70px" }}></textarea>
                            </div>
                            <div className='col-lg-12'>
                                <input type="Submit" className='btn submit-btn' value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container py-5'>
                    <div className='row py-5'>
                        <div className='col-lg-6 CustomerCare-section'>
                            <p>Support is highly crucial when running a website for your business and it is not feasible to handle all of it by yourself. Offering support for a domain and running its various functionalities optimally requires skill, expertise and experience. Holistic support for your website involves monthly management involving resolution of security issues, updating the plugins, changes in website as per demand, dynamic platform establishment, and making new updates as per search engine’s upgraded algorithms.</p>
                            <p>We offer monthly support for a website that requires to be managed more closely and efficiently and also offer other support packages depending on the requirements of your business and client demands. We truly believe that support is offered in its real essence when it fulfils the need of the hour which is why our custom-tailored packages aim at reaching out to everyone and meeting you where you are!</p>
                        </div>
                        <div className='col-lg-6'>
                            <Lottie animationData={support} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className='col-lg-12 CustomerCare-section pt-5'>
                            <div >
                                <h3 className='py-3'>Why support is essential to run a website optimally:</h3>
                                <p><i className="fa-solid fa-circle-check brand-i"></i> Why support is essential to run a website optimally:</p>
                                <p><i className="fa-solid fa-circle-check brand-i"></i> Allows you to focus on business free of technical glitches</p>
                                <p><i className="fa-solid fa-circle-check brand-i"></i> Keeps your website and domain up to date</p>
                                <p><i className="fa-solid fa-circle-check brand-i"></i> Offers a fully optimized platform helping businesses run at full potential</p>
                                <p><i className="fa-solid fa-circle-check brand-i"></i> Regular support ensures no issue or bug goes unaddressed</p>
                                <p>Under this service, we have you covered for any updates you need to make on your website. Be it sharing a blog post frequently, or updating your portfolio, our team will be there to help you. </p>
                                <p>Feel free to enquire about our monthly support packages by giving us a call or emailing us. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceDelivery />

        </div>
    )
}

export default CustomerCare