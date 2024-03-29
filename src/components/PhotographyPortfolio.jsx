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
                <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Photography Portfolio
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2>
                            Glimpses Of Commercial Photoshoots For Our Esteemed Clients
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid photography-portfolio'>
                <div className='row btn-section'>
                    <div className='child'>
                        <ul className='filter-links'>
                            <li>
                                <button href="/" className='button All' onClick={allItem}>All</button>
                            </li>
                            <li>
                                <button className='button Headshot/Portraits' onClick={() => Data("Headshot")}>Headshot/Portraits</button>
                            </li>
                            <li>
                                <button className='button Commercial' onClick={() => Data("Commercial")}>Commercial</button>
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
            <div className='container-fluid'>
                <div className='row photography-images'>
                    {
                        images.map((value) => {
                            return (
                                <div className='col-md-4 col-lg-3 img-container content' style={{ marginBottom: "50px", paddingRight: "15px" }} >
                                    <div className='screen'>
                                        <img src={value.image} alt="images" className='img-fluid' />
                                    </div>
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