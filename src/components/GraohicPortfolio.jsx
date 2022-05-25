import React, {useState} from 'react'
import '../GraphicPortfolio.css'
import Graphices from './Graphices'
function GraohicPortfolio() {
    const [images, setImages] = useState(Graphices)
    
    const allItem = () => {
        const finalData = Graphices.filter((value) => {
            return value;
        })
        setImages(finalData)
    }
    const Data = (categariesItem) => {
        const finalData = Graphices.filter((value) => {
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

                            Graphic Portfolio
                            <hr className='hr'></hr>
                        </h1>
                        <h2 className='pl-4 mb-2'>
                            Balancing Art & Technology To <br /> Create Modern & Contemporary <br /> Branding Collateral
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
                <div  className='row Graphices-btn'>
                    <a href='/' className='btn btn-link' onClick={allItem}>All</a>
                    <a href='/' className='btn btn-link' onClick={() => Data("Logo")}>Logo</a>
                    <a  href='/' className='btn btn-link' onClick={() => Data("Card")}>Business Card</a>
                    <a  href='/' className='btn btn-link' onClick={() => Data("Brochure")}>Brochure</a>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    {
                        images.map((value) => {
                            return (
                               <div className='col-md-3 mb-4 '>
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