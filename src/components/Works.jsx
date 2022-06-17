import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Works() {
    return (
        <div>
            <div className='container-fluid' id='works'>
                <div className='container py-5'>
                    <div className='row'>
                        <div id='heroTag'  data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <h1>Latest Works</h1>
                        </div>
                    </div>
                    <div className='row py-5'>
                        <div className=" col-lg-3 mb-4"data-aos="flip-up" data-aos-offset="200"data-aos-delay="50"data-aos-duration="1000"data-aos-easing="ease-in-out"data-aos-mirror={true}data-aos-once="false">
                            <div className='works works1'>
                                <div className='overlay1'>
                                    United Tools
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 mb-4" data-aos="flip-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <div className='works works2'>
                                <div className='overlay1'>
                                    Dal
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 mb-4 " data-aos="flip-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <div className='works works3'>
                                <div className='overlay1'>
                                    Coburns Rise
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 mb-4 " data-aos="flip-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <div className='works works4'>
                                <div className='overlay1'>
                                    Rg Land
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 mb-4" data-aos="flip-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <div className='works works5'>
                                <div className='overlay1'>
                                    Sunshine Collactables
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 mb-4" data-aos="flip-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <div className='works works6'>
                                <div className='overlay1'>
                                    Tic Group
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 mb-4"data-aos="flip-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <div className='works works7'>
                                <div className='overlay1'>
                                    Carrabba's Group
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 mb-4" data-aos="flip-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <div className='works works8'>
                                <div className='overlay1'>
                                    Rg Land
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror={true} data-aos-once="false">
                            <button className='btn view-btn'>View All Pojects</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works