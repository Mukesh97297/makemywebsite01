import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../OwlCarousal.css';

function OwlCarousal() {

    return (
        <div>
            <section className='What-we-do'>
                <div className='Vedio-Section'>
                    <video autoPlay muted loop id='What-we-do-vedio' >
                        <source src='https://www.makemywebsite.com.au/wp-content/uploads/2022/01/MVI_4003_Trim1.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className='background-overlay'></div>
                <div className='Column-gap-default'>
                    <div className='elementer-column'>
                        <div className='elementer-wight-wrap'>
                            <section className='elementer-section'>
                                <div className='elementer-background-overlay'></div>
                                <div className='elementer-container'>
                                    <div className='elementer-column'>
                                        <div className='elementer-wight-wrap'>
                                            <div className='elementer-element'>
                                                <div className='elementer-wight-container'>
                                                    <h1 className='elementer-heading-title'>What We Do</h1>
                                                </div>
                                            </div>
                                            <div className='elementer-element'>
                                                <div className='elementer-wight-container-p'>
                                                    Make My Website offers end-to-end strategic web solutions with a focus on customer satisfaction. Our mission is simple- to build you a website that aligns with your goals, take a strategic route, and market you online. With over 400+ reviews on Google, Facebook, Oneflare, and Word of Mouth, we have been rated highly credible for the work we do.
                                                    We infuse creativity in your online space and make it a captivating experience for the users on the world wide web.
                                                    <br />
                                                    <br />

                                                    Are you looking for a cutting-edge website? We are here to help!

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>




    )
}

export default OwlCarousal