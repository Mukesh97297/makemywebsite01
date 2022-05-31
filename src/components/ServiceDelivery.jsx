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
import aos from 'aos'
import 'aos/dist/aos.css'
aos.init();
function ServiceDelivery() {
    return (
        <div>
            <div className="container-fluid" id="service-delivery">
                <h5  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                    <i class="fa-solid fa-circle-dot"></i>Service Delivery With A Sense Of
                    Pride
                </h5>
                <h1  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                    We’re trusted by these industry experts<br></br> Australia-wide!
                </h1>
                <div className="row justify-content-center ">
                    <div className="col-lg-3 Service-delivary-1"  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"> 
                        <img src={unitedlogo} alt="unitedlogo"  className='img-fluid logo' />
                    </div>
                    <div className="col-lg-3 Service-delivary-1"  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={pursuelogo} alt="pursuelogo"  className='img-fluid logo' />
                    </div>
                    <div className="col-lg-3 Service-delivary-1" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={ticlogo} alt="ticlogo"  className='img-fluid logo' />
                    </div>
                    <div className="col-lg-3 Service-delivary-1" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={dallogo} alt="dallogo"  className='img-fluid logo'/>
                    </div>
                    <div className="col-lg-3 Service-delivary-1"  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={rglandlogo} alt="rglandlogo"  className='img-fluid logo' />
                    </div>
                    <div className="col-lg-3 Service-delivary-1" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={malvernlogo} alt="malvernlogo"  className='img-fluid logo' />
                    </div>
                    <div className="col-lg-3 Service-delivary-1" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={marksqualitylogo} alt="marksqualitylogo"  className='img-fluid logo' />
                    </div>
                    <div className="col-lg-3 Service-delivary-1" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={coburnslogo} alt="coburnslogo" className='img-fluid logo' />
                    </div>
                    <div className="col-lg-3 Service-delivary-1" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={augmentlogo} alt="augmentlogo" className='img-fluid logo' />
                    </div>
                    <div className="col-lg-3 Service-delivary-1" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <img src={propertylogo} alt="propertylogo" className='img-fluid logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDelivery