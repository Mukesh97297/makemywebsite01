import React from 'react'
import dal from '../images/dal.png'
import loans from '../images/101loans.png'
import onestepcare from '../images/onestepcare.png'
import lalunavintage from '../images/lalunavintage.png'
import propertyselect from '../images/propertyselect.png'
import sunshinec from '../images/sunshinec.png'
import aos from 'aos'
import 'aos/dist/aos.css'
aos.init();


function Customer() {
    return (
        <div>
            <div className='container-fluid' style={{ backgroundColor: "#060709" }}>
                <div className='container'>
                    <div className='row justify-content-center py-5'>
                        <div id='Heading'>
                            <p data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                <i aria-hidden={true} className="fas fa-dot-circle mx-2" id="true-circle"> </i>
                                Customer Feedback
                            </p>  
                            <div  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                                <h1>
                                    Hear from those who’ve had first-hand experiences with us
                                </h1>
                            </div>  
                        </div>
                    </div>
                </div>
                <div id="demo" className="carousel slide" data-ride="carousel" style={{ backgroundColor: "#060709" }}>
                    <div className="carousel-inner py-5">
                        <div className="carousel-item active">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div>
                                            <button sr id='titlebtn' className='button py-1'>Dal</button>
                                        </div>
                                        <div>
                                            <p id='content'>
                                                “Make My Website in Melbourne is the place to go for your new website!
                                                After MONTHS of procrastinating and wanting to change our clunky outdated site l reached out to the team at MMW, within 5 minutes I was on the phone speaking with Mayank. MMW took care of all the hard work and made the transition so EASY!! Ash and Puneet look after
                                                all our Web design, SEO and Social Media. Trust me, these guys are the best!”
                                            </p>
                                        </div>
                                        <div>
                                            <h5 id='customername'>- Julia Edwards <a href='https://www.dal.com.au/'>https://www.dal.com.au/</a></h5>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src={dal} className="img-fluid" alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div>
                                            <button id='titlebtn' className='button py-1'>One Step Care</button>
                                        </div>
                                        <div>
                                            <p id='content'>
                                                “Make My Website is outstanding. With a high level of professional customer services.
                                                I completely love my website and have had so much positive feedback from my customers about
                                                the website. I recommend Make My Website to anyone who is seeking to get a website done.”												
                                            </p>
                                        </div>
                                        <h5 id='customername'>- Sami Bitar <a href="https://www.onestepcare.com.au/">https://www.onestepcare.com.au/</a></h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src={onestepcare} className="img-fluid" alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div>
                                            <button id='titlebtn' className='button py-1'>Sunshine Collactable</button>
                                        </div>
                                        <div>
                                            <p id='content'>
                                                “I was in need of a company that could take my existing website and make it into a modern
                                                E-Commerce website. That’s when I came across Mike and his very capable team at Make My Website.
                                                Thank you for your professionalism and expertise!! Could not be happier!”
                                            </p>
                                        </div>
                                        <div>
                                            <h5 id='customername'>- Jayden Healey <a href="https://www.sunshinec.com.au/">https://www.sunshinec.com.au/</a></h5>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src={sunshinec} className="img-fluid" alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div>
                                            <button id='titlebtn' className='button py-1'>Oreana Property Select </button>
                                        </div>
                                        <div>
                                            <p id='content'>
                                                “A big thank you to Nisha, Mike and the team. I am so pleased to have chosen your company for
                                                 our new website. You have all been so professional, efficient and helpful throughout the entire process. Quick responses,
                                                great suggestions and overall fantastic experience. You exceeded my expectations
                                                 and highly recommend it.”
                                            </p>
                                        </div>
                                        <div>
                                            <h5 id='customername'>- Serah Corazza <a href="https://www.propertyselectadvisory.com/">https://www.propertyselectadvisory.com/</a></h5>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src={propertyselect} className="img-fluid" alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='container'>
                                <div className='row '>
                                    <div className='col-lg-6'>
                                        <div>
                                            <button id='titlebtn' className='button py-1'>101 Loans & 101 Support</button>
                                        </div>
                                        <div>
                                            <p id='content'>
                                                “Mayank and his team are great in delivering quality work. We have had issues with
                                                our previous website designers but this time it went very smoothly with their help. They created 
                                                two quality websites for our two businesses we have. They were accommodative of our requests and 
                                                delivered us with websites that we wanted.”
                                            </p>
                                        </div>
                                        <div>
                                            <h4 id='customername'>- Ekta Gill <a href="https://www.101loans.com.au/"> https://www.101loans.com.au/</a></h4>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src={loans} className="img-fluid" alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='container'>
                                <div className='row '>
                                    <div className='col-lg-6'>
                                        <div>
                                            <button id='titlebtn' className='button py-1'>La Luna Vintage</button>
                                        </div>
                                        <div>
                                            <p id='content'>
                                                “I have been using this company for many years now and I am always satisfied with their level 
                                                of professionalism and personal care. They listen to all my suggestions and implement them. 
                                                They are creative and very talented. Every website that they have
                                                created looks professional and easy to navigate. Highly recommend them for all your 
                                                online needs.”
                                            </p>
                                        </div>
                                        <div>
                                            <h4 id='customername'>- Mara Luglio <a href="https://www.lalunavintage.com.au/"> https://www.lalunavintage.com.au/</a></h4>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src={lalunavintage} className="img-fluid" alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Customer