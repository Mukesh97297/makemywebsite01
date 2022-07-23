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
            <div className="container-fluid" id="service-delivery">
                <p>
                    <i className="fa-solid fa-circle-dot"></i>Service Delivery With A Sense Of
                    Pride
                </p>
                <div id='service-delivery-p'>
                    <p className='service-delivery-p2'>
                        We’re trusted by these industry experts
                        <br /> Australia-wide!
                    </p>
                </div>
                <div className='row justify-content-center Service-delivary-2'>
                    <div className="col-md-2 Service-delivary-1"  >
                        <img src={unitedlogo} alt="unitedlogo" className='img-fluid logo' />
                    </div>
                    <div className="col-md-2 Service-delivary-1"  >
                        <img src={pursuelogo} alt="pursuelogo" className='img-fluid logo' />
                    </div>
                    <div className="col-md-2 Service-delivary-1" >
                        <img src={ticlogo} alt="ticlogo" className='img-fluid logo' />
                    </div>
                    <div className="col-md-2 Service-delivary-1" >
                        <img src={dallogo} alt="dallogo" className='img-fluid logo' />
                    </div>
                    <div className="col-md-2 Service-delivary-1"  >
                        <img src={rglandlogo} alt="rglandlogo" className='img-fluid logo' />
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-md-2 Service-delivary-1" >
                        <img src={malvernlogo} alt="malvernlogo" className='img-fluid logo' />
                    </div>
                    <div className="col-md-2 Service-delivary-1" >
                        <img src={marksqualitylogo} alt="marksqualitylogo" className='img-fluid logo' />
                    </div>
                    <div className="col-md-2 Service-delivary-1" >
                        <img src={coburnslogo} alt="coburnslogo" className='img-fluid logo' />
                    </div>
                    <div className="col-md-2 Service-delivary-1" >
                        <img src={augmentlogo} alt="augmentlogo" className='img-fluid logo' />
                    </div>
                    <div className="col-md-2 Service-delivary-1" >
                        <img src={propertylogo} alt="propertylogo" className='img-fluid logo' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceDelivery