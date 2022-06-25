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
                <div className="container">
                    <div className="row  about_section-2">
                        <div className="col-lg-5">
                            <img src={about} alt="about" className="img-fluid rounded-pill" />
                        </div>
                        <div className='col-lg-7 about_section-3'>
                            <h1 className='about-p mb-4'>
                                <i className='fas fa-dot-circle dot-cercle'></i> Web Design Melbourne
                            </h1>
                            <div id="demo" className="carousel slide about-crousal mb-4" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='carousel-h'>Complete Web Solution  In Australia</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='carousel-h'> Bringin in Innovation to web design</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='carousel-h'>Infusing creativity in  your online space</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='carousel-h'>Capativating designs that tell stories</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='carousel-h'>Prioritising customer satisfactions all among</div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-md-5 web-design-btn-col '>
                                    <div className='d-flex web-design-btn'>
                                        <i aria-hidden={true} className="fas fa-check " />
                                        <span>High-end solutions for <br /> small & large business</span>
                                    </div>
                                </div>
                                <div className='col-md-5 web-design-btn-col'>
                                    <div className='d-flex web-design-btn'>
                                        <i aria-hidden={true} className="fas fa-check" />
                                        <span>Helping local <br /> businesses go online</span>
                                    </div>
                                </div>
                            </div>
                            <div className='paragraph'>
                                We’ve put on our creative hats to level up web design, Australia-wide. It’s about time
                                to put forth your business on the world wide web and be second to none.
                                Innovation is the key to creating designs that don’t  let users hit the “back” button, and that is what we strive for at Make My Website.
                            </div>
                            <div>
                            <p className='paragraph'>
                                    If you’ve envisioned to be the foremost choice for your clients- it’s time to make a decision.
                                    We are curious to know about your goals, and venture
                                    into helping you to achieve those, using the digital space. So let’s get in touch and build a stunning website for you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center about-counter-row'>
                        <div className='col-lg-3 py-5'>
                            <div className='counter'>
                                <img src={experience} alt="experience" height="60px" width="60px" />
                                <div className='about-count-h pt-4'><CountUp start={0} end={10} duration={1} />+</div>
                                <h4 className='about-counter-p py-2'>Year Of Expertise</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 py-5' >
                            <div className='counter'>
                                <img src={owned} alt="owned" height="60px" width="60px" />
                                <div className='about-count-h pt-4'><CountUp start={0} end={100} duration={1} />%</div>
                                <h4 className='about-counter-p py-2'>Australian Owned</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 py-5' >
                            <div className='counter'>
                                <img src={design} alt="design" height="60px" width="60px" />
                                <div className='about-count-h pt-4'> <CountUp start={0} end={5} duration={1} />-Star rated</div>
                                <h4 className='about-counter-p py-2'>Web design agency</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 py-5' >
                            <div>
                                <img src={client} alt="clients" height="60px" width="60px" />
                                <div className='about-count-h pt-4'>
                                    <CountUp start={0} end={800} duration={1} />+</div>
                                <h4 className='about-counter-p py-2' >Saticefied clients</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default WebDesign