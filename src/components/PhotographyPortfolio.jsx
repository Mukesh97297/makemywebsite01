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

            <div className="container-fluid pl-5 pt-3" id="about-container">
                <div className="row pt-5">
                    <div className="col-md-12 pt-5 pl-5 webDesignDevelopment">
                        <h1 className='pl-4 pt-3'>

                            Photography Portfolio
                            <hr className='hr'></hr>
                        </h1>
                        <h2 className='pl-4 mb-2'>
                            Glimpses Of Commercial <br /> Photoshoots For Our Esteemed <br /> Clients
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
            <div className='container my-3'>
                <div className='row head-btn'>
                    <button className='btn btn-link' onClick={allItem}>All</button>
                    <button className='btn btn-link' onClick={() => Data("Headshot")}>Headshot/Portraits</button>
                    <button className='btn btn-link' onClick={() => Data("Commercial")}>Commercial</button>
                    <button className='btn btn-link' onClick={() => Data("Product")}>Products</button>
                    <button className='btn btn-link' onClick={() => Data("Drone")}>Drone</button>
                    <button className='btn btn-link' onClick={() => Data("Group")}>Group Portrait</button>
                    <button className='btn btn-link' onClick={() => Data("Lays")}>Flat Lays</button>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    {
                        images.map((value) => {
                            return (
                               <div className='col-md-3 mb-4 img-container'>
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