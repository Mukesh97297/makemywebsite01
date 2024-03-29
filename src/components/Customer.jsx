import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dal from '../images/dal.png'
import loans from '../images/101loans.png'
import onestepcare from '../images/onestepcare.png'
import lalunavintage from '../images/lalunavintage.png'
import propertyselect from '../images/propertyselect.png'
import sunshinec from '../images/sunshinec.png'
import { Link } from 'react-router-dom';
function Customer() {
    const Option = {
        items: 1,
        nav: true,
        navText : ["<i class='fa fa-chevron-left prew-slide'></i>","<i class='fa fa-chevron-right prew-slide'></i>","color:white"],
        center: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                item: 1,
            }
        }
    }

    return (
        <div className='container-fluid customer-feedback-container' >
            <div className='container'>
                <div className='row justify-content-center'>
                    <div id='Heading'>
                        <p>
                            <i aria-hidden={true} className="fas fa-dot-circle mx-2" id="true-circle"> </i>
                            Customer Feedback
                        </p>
                        <div id='Heading2'>
                            <p>
                                Hear from those who’ve had first-hand experiences with us
                            </p>
                        </div>
                    </div>
                </div>
                <OwlCarousel {...Option} dots={false} className='owl-theme' loop margin={50}>
                    <div className='row item'>
                        <div className='col-lg-6'>
                            <p id='titlebtn' className='button py-1'>DAL</p>
                            <div id='content'>
                                “Make My Website in Melbourne is the place to go for your new website!
                                After MONTHS of procrastinating and wanting to change our clunky outdated site l reached out to the team at MMW, within 5 minutes I was on the phone speaking with Mayank. MMW took care of all the hard work and made the transition so EASY!! Ash and Puneet look after
                                all our Web design, SEO and Social Media. Trust me, these guys are the best!”
                            </div>
                           
                            <div id='customername'>- Julia Edwards  <Link to="/" onClick={() => { window.open("https://www.dal.com.au/") }}>https://www.dal.com.au/</Link></div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={dal} className="img-fluid" alt='' />
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-lg-6'>
                            <p id='titlebtn' className='button py-1'>One Step Care</p>
                            <div id='content'>
                                “Make My Website is outstanding. With a high level of professional customer services.
                                I completely love my website and have had so much positive feedback from my customers about
                                the website. I recommend Make My Website to anyone who is seeking to get a website done.”
                            </div>
                            <div id='customername'>- Sami Bitar<Link to="/" onClick={() => { window.open("https://www.onestepcare.com.au/") }}>https://www.onestepcare.com.au/</Link></div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={onestepcare} className="img-fluid" alt='' />
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-lg-6'>
                            <p id='titlebtn' className='button py-1'>Sunshine Collactable</p>
                            <div id='content'>
                                “I was in need of a company that could take my existing website and make it into a modern
                                E-Commerce website. That’s when I came across Mike and his very capable team at Make My Website.
                                Thank you for your professionalism and expertise!! Could not be happier!”
                            </div>
                            <div id='customername'>- Jayden Healey <Link to="/" onClick={() => { window.open("https://www.sunshinec.com.au/") }}>https://www.sunshinec.com.au/</Link></div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={sunshinec} className="img-fluid" alt='' />
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-lg-6'>
                            <p id='titlebtn' className='button py-1'>Oreana Property Select </p>
                            <div id='content'>
                                “A big thank you to Nisha, Mike and the team. I am so pleased to have chosen your company for
                                our new website. You have all been so professional, efficient and helpful throughout the entire process. Quick responses,
                                great suggestions and overall fantastic experience. You exceeded my expectations
                                and highly recommend it.”
                            </div>
                            <div id='customername'>- Serah Corazza <a href="https://www.propertyselectadvisory.com/">https://www.propertyselectadvisory.com/</a></div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={propertyselect} className="img-fluid" alt='' />
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-lg-6'>
                            <p id='titlebtn' className='button py-1'>La Luna Vintage</p>
                            <div id='content'>
                                “I have been using this company for many years now and I am always satisfied with their level
                                of professionalism and personal care. They listen to all my suggestions and implement them.
                                They are creative and very talented. Every website that they have
                                created looks professional and easy to navigate. Highly recommend them for all your
                                online needs.”
                            </div>
                            <div id='customername'>- Mara Luglio <a href="https://www.lalunavintage.com.au/"> https://www.lalunavintage.com.au/</a></div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={lalunavintage} className="img-fluid" alt='' />
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-lg-6'>
                            <p id='titlebtn' className='button py-1'>101 Loans & 101 Support</p>                                                                                               <div id='content'>
                                “Mayank and his team are great in delivering quality work. We have had issues with
                                our previous website designers but this time it went very smoothly with their help. They created
                                two quality websites for our two businesses we have. They were accommodative of our requests and
                                delivered us with websites that we wanted.”
                            </div>
                            <div id='customername'>- Ekta Gill <a href="https://www.101loans.com.au/"> https://www.101loans.com.au/</a></div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={loans} className="img-fluid" alt='' />
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Customer