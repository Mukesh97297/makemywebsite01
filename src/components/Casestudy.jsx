import React from 'react'
import { Link } from 'react-router-dom'
import '../CaseStudy.css'
function Casestudy() {
    function goToTop() {
        window.scrollTo({ top: 0 })
    }
    return (
        <div style={{borderBottom:"2px solid #FFF-"}}>
            <div className="container-fluid" id="about-container">
                <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Case Studies
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2 >
                            A Detailed Insight On Our Capabilities And Associations
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid' id='casestudy'>
                <div className='row rows justify-content-center'>
                    <div className=" col-lg-3 col-md-4 mb-4">
                        <div className='casestudy casestudy2' >
                            <div className='overlay2'>
                                <h3>
                                    <Link to="/Dal-page" onClick={goToTop}>Dal</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-4">
                        <div className='casestudy casestudy3'>
                            <div className='overlay2'>
                                <h3>
                                    <Link to="/coburns-page" onClick={goToTop}>Coburns Rise</Link>
                                </h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-4">
                        <div className='casestudy casestudy4'>
                            <div className='overlay2'>
                                <h3>
                                    <Link to="/rg-land" onClick={goToTop}>Rg Land</Link>
                                </h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-4">
                        <div className='casestudy casestudy6'>
                            <div className='overlay2'>
                                <h3>
                                    <Link to="/tic-group" onClick={goToTop}>Tic Group</Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 mb-4">
                        <div className='casestudy casestudy5' >
                            <div className='overlay2' >
                                <h3>
                                    <Link to="/sunshine" onClick={goToTop}>Sunshine Collactables</Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 mb-4">
                        <div className='casestudy casestudy7'>
                            <div className='overlay2' >
                                <h3>
                                    <Link to="/carrabba" onClick={goToTop}>Carrabba's Group</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-4">
                        <div className='casestudy casestudy8' >
                            <div className='overlay2' >
                                <h3>
                                    <Link to="/darebin" onClick={goToTop}>Darebin Gas</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className='casestudy casestudy1' >
                            <div className='overlay2' >
                                <h3>
                                    <Link to="/united-tools" onClick={goToTop}>United Tools</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Casestudy