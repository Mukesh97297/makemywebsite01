import React from 'react'
import {Link} from 'react-router-dom'
import "../Sydney.css"
import Lottie from 'lottie-react'
import Landing from "../animation/Landing.json"
import WebDesign from './WebDesign'
import QuelityDesign from './QuelityDesign'

function Sydney() {
    return (
        <div >
            <div className='Sydney-main-div'style={{padding:"150px 0px 100px 0px"}}>
                <div className='container'>
                    <div className='row justify-content-center Sydney-first-row'>
                        <div className='col-lg-7 Sydney-first-col-7'>
                            <h2>Sydney's Premium Web Design Agency Committed To Deliver
                                <span> EXCEPTIONAL RESULTS </span>
                            </h2>
                            <div className='py-2'>
                                <p>Make My Website is an innovative web design agency that follows a result-oriented approach to help businesses prosper online. We are pioneers in the industry who empower local businesses to utilise the digital space through innovative solutions and get unmatched results!</p>
                            </div>
                            <div className='get-a-free-btn py-2'>
                                <Link to="/"><span><span>
                                    Get a free consultation
                                    </span></span>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                        <Lottie animationData={Landing} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <WebDesign/>
            <QuelityDesign/>.


        </div>
    )
}

export default Sydney