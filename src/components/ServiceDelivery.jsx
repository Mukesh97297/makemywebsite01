import React from 'react'
import unitedlogo from '../images/United-Tools-logo.jpg'
import pursuelogo from '../images/Pursue-logo.jpg'
import ticlogo from '../images/TIC-Group-logo.jpg'
import dallogo from '../images/dal-logo.jpg'
import rglandlogo from '../images/RG-Land-logo.jpg'
import malvernlogo from '../images/malvern-neurology-logo.jpg'
import marksqualitylogo from '../images/Marks-Quality-Cakes-logo.jpg'
import coburnslogo from '../images/coburnsrise-logo.jpg'
import augmentlogo from '../images/Augment-Group-logo.jpg'
import propertylogo from '../images/Property-Select-Advisory.jpg'

function ServiceDelivery() {
    return (
        <div>
            <div className="container-fluid pl-5" id="service-delivery">
                <h5>
                    <i class="fa-solid fa-circle-dot"></i>Service Delivery With A Sense Of
                    Pride
                </h5>
                <h1>
                    We’re trusted by these industry experts<br></br> Australia-wide!
                </h1>
                <div className="row justify-content-center pl-5">
                    <div className="col-md-3">
                        <img src={unitedlogo} alt="unitedlogo"  className='logo' />
                    </div>
                    <div className="col-md-3">
                        <img src={pursuelogo} alt="pursuelogo"  className='logo' />
                    </div>
                    <div className="col-md-3">
                        <img src={ticlogo} alt="ticlogo"  className='logo' />
                    </div>
                    <div className="col-md-3">
                        <img src={dallogo} alt="dallogo"  className='logo'/>
                    </div>
                    <div className="col-md-3">
                        <img src={rglandlogo} alt="rglandlogo"  className='logo' />
                    </div>
                    <div className="col-md-3">
                        <img src={malvernlogo} alt="malvernlogo"  className='logo' />
                    </div>
                    <div className="col-md-3">
                        <img src={marksqualitylogo} alt="marksqualitylogo"  className='logo' />
                    </div>
                    <div className="col-md-3">
                        <img src={coburnslogo} alt="coburnslogo" className='logo' />
                    </div>
                    <div className="col-md-3">
                        <img src={augmentlogo} alt="augmentlogo" className='logo' />
                    </div>
                    <div className="col-md-3">
                        <img src={propertylogo} alt="propertylogo" className='logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDelivery