import React from 'react'
import dal from '../images/dal.jpg'
import carabbba from '../images/Carrabbas-Group.jpg'
import coburns from '../images/Coburns-Rise.jpg'
import rgland from '../images/RG-Land.jpg'
import sunshine from '../images/Sunshine-Collectables.jpg'
import ticgroup from '../images/TIC-Group.jpg'
import unitedtools from '../images/United-Tools.jpg'
import darbingas from '../images/Darebin-Gas.jpg'

function Casestudy() {
    return (
        <div>
            <div className="container-fluid pl-5 pt-3" id="about-container">
                <div className="row pt-5">
                    <div className="col-md-12 py-5 pl-5 webDesignDevelopment">
                        <h1 className='pl-4 pt-5'>
                            Case Studies<hr className='hr'></hr>
                        </h1>
                        <h2 className='pl-4'>
                            A Detailed Insight On Our Capabilities <br /> And Associations
                        </h2>
                        <div id="about-main-elemontor">
                            <div id="about-rcircle">
                                <div id="about-welcome-shape-1"></div>
                                <div id="about-welcome-shape-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contaienr-fluid' style={{ backgroundColor: "#060709" }}>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-3 col-md-offset-3 content">
                            <div className="screen">
                                <img src={dal} />
                                <div className='overlay1'>
                                    United Tools
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-offset-3 content'></div>
                        <div className='col-lg-3 col-md-offset-3 content'></div>
                        <div className='col-lg-3 col-md-offset-3 content'></div>
                        <div className='col-lg-3 col-md-offset-3 content'></div>
                        <div className='col-lg-3 col-md-offset-3 content'></div>
                        <div className='col-lg-3 col-md-offset-3 content'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Casestudy