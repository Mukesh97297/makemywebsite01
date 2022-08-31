import React from 'react'
import '../Blog.css'
import AutoBlogs from './BlogsImages'
import { useState } from 'react'
function Blog() {
    const [images, setImages] = useState(AutoBlogs);
    
    return (
        <div>
            <div className="container-fluid" id="about-container">
                <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Blog
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2>
                            Adding Value To Your Business By Spilling Facts, And Sharing Knowledge
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container main-blog'>
                <div className='row'>
                    {
                        images.map((value) => {
                          console.log(value.text)
                            return (
                                < div className='col-xl-4 col-md-6 mb-4' >
                                   <a href={value.link}>
                                   <div className='card blogs-card'>
                                        <img src={value.image} alt="" className='img-fluid' />
                                        <div className='abc-btn py-1 px-3'>{value.categary}</div>
                                        <div className='card-body'>
                                            <h4 key={1}>{value.text}</h4>
                                        </div>
                                        <div className='card-footer'>
                                            <p>{value.date}</p>
                                        </div>
                                    </div>
                                   </a>
                                </div>
                            )
                        })
                    }
                    {/* <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={blog2} alt="" />
                            <div className='abc-btn py-1 px-3'>Blogs</div>
                            <div className='card-body'>
                                <h4>How SEO can Boost your Small Business</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin . 04/02/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6  mb-4'>
                        <div className='card blogs-card'>
                            <img src={blog1} alt="" />
                            <div className='abc-btn py-1 px-3'>Blogs</div>
                            <div className='card-body'>
                                <h4>How SEO can Boost your Small Business</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin . 04/02/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={blog3} alt="" />
                            <div className='abc-btn py-1 px-3'>Blogs</div>
                            <div className='card-body'>
                                <h4>How SEO can Boost your Small Business</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin . 04/02/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={blog4} alt="" />
                            <div className='abc-btn py-1 px-3'>Blogs</div>
                            <div className='card-body'>
                                <h4>How SEO can Boost your Small Business</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin . 04/02/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={blog5} alt="" />
                            <div className='abc-btn py-1 px-3'>Blogs</div>
                            <div className='card-body'>
                                <h4>How SEO can Boost your Small Business</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin . 04/02/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={design1} alt="" />
                            <div className='abc-btn py-1 px-3'>Design</div>
                            <div className='card-body'>
                                <h4>Reasons to Improve your Website Design</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  31/01/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={design2} alt="" />
                            <div className='abc-btn py-1 px-3'>Design</div>
                            <div className='card-body'>
                                <h4>Reasons to Improve your Website Design</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  31/01/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={design3} alt="" />
                            <div className='abc-btn py-1 px-3'>Design</div>
                            <div className='card-body'>
                                <h4>How is having a Good Web Design Synonymous to Visual Merchandising?</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  27/02/2019</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={design4} alt="" />
                            <div className='abc-btn py-1 px-3'>Design</div>
                            <div className='card-body'>
                                <h4>5 reasons why Tradies need a website</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  16/02/2019</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={design5} alt="" />
                            <div className='abc-btn py-1 px-3'>Design</div>
                            <div className='card-body'>
                                <h4>Introduction to key areas in a Website</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  25/02/2019</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card' >
                            <img src={sco1} alt="" />
                            <div className='abc-btn py-1 px-3'>Sco</div>
                            <div className='card-body'>
                                <h4>How Does An SEO Agency Help Increase Organic Traffic?</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  27/01/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4' >
                        <div className='card blogs-card'>
                            <img src={business5} alt="" />
                            <div className='abc-btn py-1 px-3'>Business</div>
                            <div className='card-body'>
                                <h4>Tips To Improve Your Google My Business Ranking</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  21/01/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4' >
                        <div className='card blogs-card' >
                            <img src={sco2} alt="" />
                            <div className='abc-btn py-1 px-3'>Sco</div>
                            <div className='card-body'>
                                <h4>3 Things To Include In a Website For Better Ranking</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  30/10/2019</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card' >
                            <img src={sco3} alt="" />
                            <div className='abc-btn py-1 px-3'>Sco</div>
                            <div className='card-body'>
                                <h4>What Makes For High-Quality Content</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  21/09/2021</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card' >
                            <img src={sco4} alt="" />
                            <div className='abc-btn py-1 px-3'>Sco</div>
                            <div className='card-body'>
                                <h4>How To Do Better Online Marketing</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  28/09/2021</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4' >
                        <div className='card blogs-card' >
                            <img src={sco5} alt="" />
                            <div className='abc-btn py-1 px-3'>Sco</div>
                            <div className='card-body'>
                                <h4>The Backbone of Digitization (Edition 2020) : Website Optimisation</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  06/08/2020</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={business1} alt="" />
                            <div className='abc-btn py-1 px-3'>Business</div>
                            <div className='card-body'>
                                <h4>Tips To Improve Your Google My Business Ranking</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  21/01/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={business2} alt="" />
                            <div className='abc-btn py-1 px-3'>Business</div>
                            <div className='card-body'>
                                <h4>Tips To Improve Your Google My Business Ranking</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  21/01/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={business3} alt="" />
                            <div className='abc-btn py-1 px-3'>Business</div>
                            <div className='card-body'>
                                <h4>Tips To Improve Your Google My Business Ranking</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  21/01/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={business4} alt="" />
                            <div className='abc-btn py-1 px-3'>Business</div>
                            <div className='card-body'>
                                <h4>Tips To Improve Your Google My Business Ranking</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  21/01/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='card blogs-card'>
                            <img src={business5} alt="" />
                            <div className='abc-btn py-1 px-3'>Business</div>
                            <div className='card-body'>
                                <h4>Tips To Improve Your Google My Business Ranking</h4>
                            </div>
                            <div className='card-footer'>
                                <p>Admin  21/01/2022</p>
                            </div>
                        </div>
                    </div>*/}
                </div>
                <div className='py-5 blog-footer-end' >
                    <p>No more posts to show</p>
                </div>
            </div>
        </div >
    )
}

export default Blog