import React, { useState } from 'react'
import '../WebDesignPorfolio.css'
import AutoScrollImages from './AutoScrollImages'


function WebDesignPortfolio() {
    const [images, setImages] = useState(AutoScrollImages)
    const allItem = () => {
        const finalData = AutoScrollImages.filter((value) => {
            return value;
        })
        setImages(finalData)
    }
    const Data = (categariesItem) => {
        const finalData = AutoScrollImages.filter((value) => {
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
                            Web Design Portfolio <hr className='hr'></hr>
                        </h1>
                        <h2>
                            A Vast Portfolio Of Websites That Showcase Our Credibility
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
                                <button href="/" className='button Account' onClick={() => Data("Account")}>Account</button>
                            </li>
                            <li>
                                <button href="/" className='button Beauty / Solon' onClick={() => Data("Salon")}>Beauty / Solon</button>
                            </li>
                            <li>
                                <button href="/" className='button Business / Events' onClick={() => Data("Business")}>Business / Events</button>
                            </li>
                            <li>
                                <button href="/" className='button Childcare' onClick={() => Data("childcare")}>Childcare</button>
                            </li>
                            <li>
                                <button href="/" className='button Driving School' onClick={() => Data("driving")}>Driving School</button>
                            </li>
                            <li>
                                <button href="/" className='button Ecommerce' onClick={() => Data("Ecommerce")}>Ecommerce</button>
                            </li>
                            <li>
                                <button href="/" className='button Food Industary' onClick={() => Data("FoodIndustary")}>Food Industary</button>
                            </li>
                            <li>
                                <button href="/" className='button Medical / Malvern Neurology' onClick={() => Data("Medical")}>Medical / Malvern Neurology</button>
                            </li>
                            <li>
                                <button href="/" className='button NDIS' onClick={() => Data("NDIS")}>NDIS</button>
                            </li>
                            <li>
                                <button href="/" className='button Others' onClick={() => Data("Other")}>Others</button>
                            </li>
                            <li>
                                <button href="/" className='button Painter/Plumber/Electrician' onClick={() => Data("painter")}>Painter/Plumber/Electrician</button>
                            </li>
                            <li>
                                <button href="/" className='button Real Estate' onClick={() => Data("realestate")}>Real Estate</button>
                            </li>
                            <li>
                                <button href="/" className='button Security' onClick={() => Data("security")}>Security</button>
                            </li>
                            <li>
                                <button href="/" className='button Sports' onClick={() => Data("sport")}>Sports</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container web-design-portfolio'>
                <div className='row justify-content-center'>
                    {
                        images.map((value) => {
                            return (
                                <div className='col-md-4 mb-4'>
                                    <div className="abc">
                                        <img src={value.image} alt="" />
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

export default WebDesignPortfolio