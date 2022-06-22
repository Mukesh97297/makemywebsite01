import React from 'react'
import '../CaseStudy.css'
import aos from 'aos'
import 'aos/dist/aos.css'
aos.init();
function Casestudy() {
    return (
        <div>
            <div className="container-fluid" id="about-container">
                <div className="row">
                    <div className="col-md-6 paragraph">
                        <h1>
                            Case Studies<hr className='hr'></hr>
                        </h1>
                        <h2 >
                            A Detailed Insight On Our Capabilities <br /> And Associations
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container-fluid' id='casestudy'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className=" col-md-3 mb-4 ">
                            <div className='casestudy casestudy2' >
                                <div className='overlay2'>
                                    Dal
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='casestudy casestudy3'>
                                <div className='overlay2'>
                                    Coburns Rise
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='casestudy casestudy4'>
                                <div className='overlay2'>
                                    Rg Land
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='casestudy casestudy5' >
                                <div className='overlay2' >
                                    Sunshine Collactables
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='casestudy casestudy6'>
                                <div className='overlay2'>
                                    Tic Group
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='casestudy casestudy7'>
                                <div className='overlay2' >
                                    Carrabba's Group
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='casestudy casestudy8' >
                                <div className='overlay2' >
                                    Rg Land
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='casestudy casestudy1' >
                                <div className='overlay2' >
                                United Tools
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Casestudy