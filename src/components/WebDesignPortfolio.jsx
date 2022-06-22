import React,{useState} from 'react'
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
                            A Vast Portfolio Of Websites That <br /> Showcase Our Credibility
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row head-btn justify-content-center'>
                    <button className='btn btn-link' onClick={allItem}>All</button>
                    <button className='btn btn-link' onClick={() => Data("Account")}>Account</button>
                    <button className='btn btn-link' onClick={() => Data("Salon")}>Beauty / Solon</button>
                    <button className='btn btn-link' onClick={() => Data("Business")}>Business / Events</button>
                    <button className='btn btn-link' onClick={() => Data("childcare")}>Childcare</button>
                    <button className='btn btn-link' onClick={() => Data("driving")}>Driving School</button>
                    <button className='btn btn-link' onClick={() => Data("Ecommerce")}>Ecommerce</button>
                    <button className='btn btn-link' onClick={() => Data("FoodIndustary")}>Food Industary</button>
                    <button className='btn btn-link' onClick={() => Data("Medical")}>Medical / Malvern Neurology</button>
                    <button className='btn btn-link' onClick={() => Data("NDIS")}>NDIS</button>
                    <button className='btn btn-link' onClick={() => Data("Other")}>Others</button>
                    <button className='btn btn-link' onClick={() => Data("painter")}>Painter/Plumber/Electrician</button>
                    <button className='btn btn-link' onClick={() => Data("realestate")}>Real Estate</button>
                    <button className='btn btn-link' onClick={() => Data("security")}>Security</button>
                    <button className='btn btn-link' onClick={() => Data("sport")}>Sports</button>
                </div>
            </div>
            <div className='container'>
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