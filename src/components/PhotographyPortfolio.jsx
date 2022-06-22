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
            <div className="container-fluid" id="about-container">
                <div className="row">
                    <div className="col-md-6 paragraph">
                        <h1>
                            Photography Portfolio
                            <hr className='hr'></hr>
                        </h1>
                        <h2>
                            Glimpses Of Commercial <br /> Photoshoots For Our Esteemed <br /> Clients
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row head-btn'>
                    <button   className='btn btn-link' onClick={allItem}>All</button>
                    <button   className='btn btn-link' onClick={() => Data("Headshot")}>Headshot/Portraits</button>
                    <button   className='btn btn-link' onClick={() => Data("Commercial")}>Commercial</button>
                    <button   className='btn btn-link' onClick={() => Data("Product")}>Products</button>
                    <button   className='btn btn-link' onClick={() => Data("Drone")}>Drone</button>
                    <button   className='btn btn-link' onClick={() => Data("Group")}>Group Portrait</button>
                    <button   className='btn btn-link' onClick={() => Data("Lays")}>Flat Lays</button>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    {
                        images.map((value) => {
                            return (
                               <div className='col-md-3 mb-4 img-container' >
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