import React from 'react';
import { Link} from 'react-router-dom';
function Works() {
    function goToTop(){
        window.scrollTo({top:0})
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
                                <Link to='/' className='works-overlay' onClick={() => { window.open("https://www.youtube.com/channel/UCWZs6OlOLKKFKQP7Ldn7jGQ") }}>
                                    United Tools
                                </Link>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4" >
                            <p className='works works2'>
                                <a href='/' className='works-overlay'>
                                    Dal
                                </a>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4 " >
                            <p className='works works3'>
                                <a href='/' className='works-overlay'>
                                    Coburns Rise
                                </a>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4 " >
                            <p className='works works4'>
                                <a href='/' className='works-overlay'>
                                    Rg Land
                                </a>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4" >
                            <p className='works works5'>
                                <a href='/' className='works-overlay'>
                                    Sunshine Collactables
                                </a>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4" >
                            <p className='works works6'>
                                <a href='/' className='works-overlay'>
                                    Tic Group
                                </a>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4">
                            <p className='works works7'>
                                <a href='/' className='works-overlay'>
                                    Carrabba's Group
                                </a>
                            </p>
                        </div>
                        <div className=" col-xl-3 col-md-6 mb-4" >
                            <p className='works works8'>
                                <a href='/' className='works-overlay'>
                                    Darebin gas
                                </a>
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