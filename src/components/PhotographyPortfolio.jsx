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
                <div className="row paragraph1">
                    <div className="col-md-6 paragraph">
                        <h1>
                            Photography Portfolio
                            <hr className='hr'></hr>
                        </h1>
                        <h2>
                            Glimpses Of Commercial Photoshoots For Our Esteemed Clients
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container web-design-portfolio'>
                <div className='row btn-section'>
                    <div className='child'>
                        <ul className='filter-links'>
                            <li>
                                <button href="/" className='button All' onClick={allItem}>All</button>
                            </li>
                            <li>
                                <button className='button Commercial' onClick={() => Data("Commercial")}>Commercial</button>
                            </li>
                            <li>
                                <button className='button Headshot/Portraits' onClick={() => Data("Headshot")}>Headshot/Portraits</button>
                            </li>
                            <li>
                                <button className='button Products' onClick={() => Data("Product")}>Products</button>
                            </li>
                            <li>
                                <button className='button Drone' onClick={() => Data("Drone")}>Drone</button>
                            </li>
                            <li>
                                <button className='button Group Portrait' onClick={() => Data("Group")}>Group Portrait</button>
                            </li>
                            <li>
                                <button className='button Flat Lays' onClick={() => Data("Lays")}>Flat Lays</button>
                            </li>
                        </ul>
                    </div>
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