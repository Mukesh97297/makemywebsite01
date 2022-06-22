import React, { useState } from 'react'
import '../GraphicPortfolio.css'
import Graphices from './Graphices.jsx'
import aos from 'aos'
import 'aos/dist/aos.css'
aos.init();
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
                <div className="row">
                    <div className="col-md-6 paragraph">
                        <h1>
                            Graphic Portfolio
                            <hr className='hr'></hr>
                        </h1>
                        <h2 >
                            Balancing Art & Technology To <br /> Create Modern & Contemporary <br /> Branding Collateral
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row Graphices-btn'>
                    <button  className='btn btn-link' onClick={allItem}>All</button>
                    <button  className='btn btn-link' onClick={() => Data("Logo")}>Logo</button>
                    <button  className='btn btn-link' onClick={() => Data("Card")}>Business Card</button>
                    <button  className='btn btn-link' onClick={() => Data("Brochure")}>Brochure</button>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    {
                        images.map((value) => {
                            return (
                                <div className='col-md-3 mb-4'  >
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

export default GraohicPortfolio