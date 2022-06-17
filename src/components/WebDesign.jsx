import React from 'react'
import about from '../images/makemywebiste-about.jpeg'
import experience from '../images/Years-Of-Expertise (1).png';
import client from '../images/Satisfied-Clients.png';
import owned from '../images/Australian_Owned_mmw.png';
import design from '../images/5-star-rated-Web-Design-Agency.png'
import CountUp from 'react-countup';


function WebDesign() {
    return (
        <div>
            <section className='about_section'>
                <div className="container py-5">
                    <div className="row mb-5 about_section-2">
                        <div className="col-lg-6" data-aos="zoom-in"data-aos-offset="200"data-aos-delay="50"data-aos-duration="1000"data-aos-easing="ease-in-out"data-aos-mirror={true}data-aos-once="false">
                            <div>
                                <img src={about} alt="about" className="img-fluid rounded-pill" />
                            </div>
                        </div>
                        <div className='col-lg-6' data-aos="zoom-in" data-aos-offset="200"data-aos-delay="50"data-aos-duration="1000"data-aos-easing="ease-in-out"data-aos-mirror={true}data-aos-once="false">
                            <p className='about-p'>
                                <i className='fas fa-dot-circle dot-cercle'></i> Web Design Melbourne
                            </p>
                            <div id="demo" className="carousel slide about-crousal py-2" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <h1 className='carousel-h'>Complete Web Solution In Australia</h1>
                                    </div>
                                    <div className="carousel-item">
                                        <h1 className='carousel-h'> Bringin in Innovation to web design</h1>
                                    </div>
                                    <div className="carousel-item">
                                        <h1 className='carousel-h'>Infusing creativity in your online space</h1>
                                    </div>
                                    <div className="carousel-item">
                                        <h1 className='carousel-h'>Capativating designs that tell stories</h1>
                                    </div>
                                    <div className="carousel-item">
                                        <h1 className='carousel-h'>Prioritising customer satisfactions all among</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-5 mb-3'>
                                    <button className='btn about-btn py-2 '><i aria-hidden={true} className="fas fa-check chack px-2"></i>High-end solutions forsmall & large business</button>
                                </div>
                                <div className='col-md-5 mb-3'>
                                    <button className='btn about-btn py-2'><i aria-hidden={true} className="fas fa-check chack px-2"></i>Helping local businesses go online</button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <p className='about-paragraph'>We’ve put on our creative hats to level up web design, Australia-wide. It’s about time
                                        to put forth your business on the world wide web and be second to none.
                                        Innovation is the key to creating designs that don’t
                                        let users hit the “back” button, and that is what we strive for at Make My Website.
                                    </p>
                                    <p className='about-paragraph'>If you’ve envisioned to be the foremost choice for your clients- it’s time to make a decision.
                                        We are curious to know about your goals, and venture
                                        into helping you to achieve those, using the digital space. So let’s get in touch and build a stunning website for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center about-counter-row '>
                        <div className='col-lg-3 py-5'data-aos="zoom-in" data-aos-offset="200"data-aos-delay="50"data-aos-duration="1000"data-aos-easing="ease-in-out"data-aos-mirror={true}data-aos-once="false">
                            <div>
                                <img src={experience} alt="experience" height="60px" width="60px"  />
                                <h1 className='about-count-h pt-4'><CountUp start={0} end={10} duration={1} />+</h1>
                                <p className='about-counter-p py-3'>Year Of Expertise</p>
                            </div>
                        </div>
                        <div className='col-lg-3 py-5' data-aos="zoom-in" data-aos-offset="200"data-aos-delay="50"data-aos-duration="1000"data-aos-easing="ease-in-out"data-aos-mirror={true}data-aos-once="false">
                            <div  className='about-col'>
                                <img src={owned} alt="owned" height="60px" width="60px" />
                                <h1 className='about-count-h pt-4'><CountUp start={0} end={100} duration={1} />%</h1>
                                <p className='about-counter-p py-3'>Australian Owned</p>
                            </div>
                        </div>
                        <div className='col-lg-3 py-5' data-aos="zoom-in" data-aos-offset="200"data-aos-delay="50"data-aos-duration="1000"data-aos-easing="ease-in-out"data-aos-mirror={true}data-aos-once="false">
                            <div  className='about-col'>
                                <img src={design} alt="design" height="60px" width="60px"  />
                                <h1 className='about-count-h pt-4'> <CountUp start={0} end={5} duration={1} />-Star rated</h1>
                                <p className='about-counter-p py-3'>Web design agency</p>
                            </div>
                        </div>
                        <div className='col-lg-3 py-5' data-aos="zoom-in" data-aos-offset="200"data-aos-delay="50"data-aos-duration="1000"data-aos-easing="ease-in-out"data-aos-mirror={true}data-aos-once="false">
                            <div className='about-col'>
                                <img src={client} alt="clients" height="60px" width="60px"  />
                                <h1 className='about-count-h pt-4'>
                                <CountUp start={0} end={800} duration={1} />+</h1>
                                <p className='about-counter-p py-3' >Saticefied clients</p>
                            </div>
                        </div>
                    </div>                  
                </div>
            </section>
        </div>
    )
}
export default WebDesign