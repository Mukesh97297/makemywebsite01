import React,{useState} from 'react'
import '../WebDesignPorfolio.css'
import WebDesignImags from './WebDesignImages'


function WebDesignPortfolio() {
    const [images, setImages] = useState(WebDesignImags)
    const allItem = () => {
        const finalData = WebDesignImags.filter((value) => {
            return value;
        })
        setImages(finalData)
    }
    const Data = (categariesItem) => {
        const finalData = WebDesignImags.filter((value) => {
            return value.categary === categariesItem
        })
        setImages(finalData)
    }
    return (
        <div>
            <div className="container-fluid py-4" id="about-container">
               <div className='container'>
               <div className="row pt-5">
                    <div className="col-md-12 py-5  webDesignDevelopment">
                        <h1 className='pt-5'>
                            Web Design Portfolio <hr className='hr'></hr>
                        </h1>
                        <h2 className=''>
                            A Vast Portfolio Of Websites That <br /> Showcase Our Credibility
                        </h2>
                    </div>
                </div>
               </div>
            </div>
            <div className='container my-3'>
                <div className='row head-btn'>
                    <button className='btn btn-link' onClick={allItem}>All</button>
                    <button className='btn btn-link' onClick={() => Data("Account")}>Account</button>
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