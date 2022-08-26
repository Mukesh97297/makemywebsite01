import React from 'react';
import { Link } from 'react-router-dom';
function Works() {
    function goToTop() {
        window.scrollTo({ top: 0 })
    }
    return (
        <div>
            <div className='container-fluid' id='works'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div id='heroTag'  >
                            <p className='latest-work'>Latest Works</p>
                        </div>
                    </div>
                    <div className='row py-5'>
                        <div className=" col-xl-3 col-md-6 mb-4">
                            <p className='works works1'>
                                <Link to='/united-tools' className='works-overlay' onClick={goToTop}>
                                    United Tools
                                </Link>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4" >
                            <p className='works works2'>
                                <Link to='/dal-page' className='works-overlay' onClick={goToTop}>
                                    Dal
                                </Link>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4 " >
                            <p className='works works3'>
                                <Link to='/coburns-page' className='works-overlay' onClick={goToTop}>
                                    Coburns Rise
                                </Link>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4 " >
                            <p className='works works4'>
                                <Link to='/rg-land' className='works-overlay' onClick={goToTop}>
                                    Rg Land
                                </Link>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4" >
                            <p className='works works5'>
                                <Link to='/sunshine' className='works-overlay' onClick={goToTop}>
                                    Sunshine Collactables
                                </Link>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4" >
                            <p className='works works6'>
                                <Link to='/tic-group' className='works-overlay' onClick={goToTop}>
                                    Tic Group
                                </Link>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4">
                            <p className='works works7'>
                                <Link to='/carrabba' className='works-overlay' onClick={goToTop}>
                                    Carrabba's Group
                                </Link>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4" >
                            <p className='works works8'>
                                <Link to='/darebin' className='works-overlay' onClick={goToTop}>
                                    Darebin gas
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className='view-project-all'>
                            <Link onClick={goToTop} className='btn view-btn' to='/WebDesignPortfolio'>View All Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works