import React from 'react'
import '../PhotographyPortfolio.css'
import Photography from './Photography'
import { useState } from 'react'

function PhotographyPortfolio() {
    const [images, setImages] = useState(Photography)
    
    const allItem = () => {
        const finalData = Photography.filter((value) => {
            return value;
        })
        setImages(finalData)
    }
    const Data = (categariesItem) => {
        const finalData = Photography.filter((value) => {
            return value.categary === categariesItem
        })
        setImages(finalData)
    }

    return (
        <div>

            <div className="container-fluid py-4" id="about-container">
                <div className='container'>
                <div className="row pt-5">
                    <div className="col-md-12 pt-5 webDesignDevelopment">
                        <h1 className='pt-3'  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            Photography Portfolio
                            <hr className='hr'></hr>
                        </h1>
                        <h2 className='mb-2' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            Glimpses Of Commercial <br /> Photoshoots For Our Esteemed <br /> Clients
                        </h2>
                       
                    </div>
                </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row head-btn'>
                    <button  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={allItem}>All</button>
                    <button  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={() => Data("Headshot")}>Headshot/Portraits</button>
                    <button  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={() => Data("Commercial")}>Commercial</button>
                    <button  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={() => Data("Product")}>Products</button>
                    <button  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={() => Data("Drone")}>Drone</button>
                    <button  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={() => Data("Group")}>Group Portrait</button>
                    <button  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={() => Data("Lays")}>Flat Lays</button>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    {
                        images.map((value) => {
                            return (
                               <div className='col-md-3 mb-4 img-container' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                    <img height="250px" width="100%" src={value.image} alt="images" />
                               </div>
                            )
                        })
                    }
                </div>
            </div>
     
        </div>
    )
}

export default PhotographyPortfolio