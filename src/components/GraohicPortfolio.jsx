import React, { useState } from 'react'
import '../GraphicPortfolio.css'
import Graphices from './Graphices.jsx'
function GraohicPortfolio() {
    const [images, setImages] = useState(Graphices)

    const allItem = () => {
        const finalData = Graphices.filter((value) => {
            return value;
        })
        setImages(finalData);
    }
    const Data = (categariesItem) => {
        const finalData = Graphices.filter((value) => {
            return value.categary === categariesItem;
        })
        setImages(finalData)
    }
    return (
        <div>
            <div className="container-fluid" id="about-container">
            <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Graphic Portfolio
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2 >
                            Balancing Art & Technology To Create Modern & Contemporary Branding Collateral
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container graphic-design-portfolio'>
                <div className='row btn-section'>
                    <div className='child'>
                        <ul className='filter-links'>
                            <li>
                                <button href="/" className='button All' onClick={allItem}>All</button>
                            </li>
                            <li>
                                <button className='button Logo' onClick={() => Data("Logo")}>Logo</button>
                            </li>
                            <li>
                                <button className='button Business Card' onClick={() => Data("Card")}>Business Card</button>
                            </li>
                            <li>
                                <button className='button Brochure' onClick={() => Data("Brochure")}>Brochure</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <div className='row '>
                    {
                        images.map((value) => {
                            return (
                                <div className='col-lg-3 col-md-4 graphic-images'  >
                                    <img width="100%" src={value.image} alt="images" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default GraohicPortfolio