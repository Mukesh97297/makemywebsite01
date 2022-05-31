import React, {useState} from 'react'
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
            <div className="container-fluid py-4" id="about-container">
                <div className='container'>
                <div className="row pt-5">
                    <div className="col-md-12 pt-5 webDesignDevelopment">
                        <h1 className='pt-3' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            Graphic Portfolio
                            <hr className='hr'></hr>
                        </h1>
                        <h2 className='mb-2'  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            Balancing Art & Technology To <br /> Create Modern & Contemporary <br /> Branding Collateral
                        </h2>
                      
                    </div>
                </div>
                </div>
            </div>
            <div className='container my-3'>
                <div  className='row Graphices-btn'>
                    <button  data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={allItem}>All</button>
                    <button  data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={() => Data("Logo")}>Logo</button>
                    <button  data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={() => Data("Card")}>Business Card</button>
                    <button  data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" className='btn btn-link' onClick={() => Data("Brochure")}>Brochure</button>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    {
                        images.map((value) => {
                            return (
                               <div className='col-md-3 mb-4'  data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
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