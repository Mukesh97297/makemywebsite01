import React from 'react'
import { useState } from 'react'
import AutoScrollImages from './AutoScrollImages'

function AutoScroll() {
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
            <div className='container my-3'>
                <div className='row head-btn'>
                    <button className='btn btn-link' onClick={allItem}>All</button>
                    <button className='btn btn-link' onClick={() => Data("logo")}>Account</button>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    {
                        images.map((value) => {
                            return (
                                <div className='col-md-4 mb-5'>
                                    <div className='autoscroll'>
                                        <img src={value.image} alt="" className='img-fluid'/>
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

export default AutoScroll