import React from 'react'
import { Link } from 'react-router-dom'
import "../Poput.css"
function Popup() {
    return (
        <div>
            <div className='containar-fluid popup'>
                <div className='row popup1 pt-5'>
                    <div className='col-lg-6 Popup-col-black mb-5'>
                        <div className='Popup-col-left'>
                            <section className='Popup-column'>
                                <h3>Born in sydney, Grown in melbourne</h3>
                            </section>
                            <div className='popup-icon-section'>
                                <div className='row justify-content-center text-center'>
                                    <div className='col-md-6 '>
                                        <div className='compass'>
                                            <span><i className='far fa-compass '></i></span>
                                        </div>
                                        <div className='compass-title'>
                                            <h3><span>80% of websites were delivered within 2 weeks</span></h3>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='desktop'>
                                            <span><i className='fas fa-desktop'></i></span>
                                        </div>
                                        <div className='desktop-title'>
                                            <h3><span>200+ websites in 2020 (150 during covid)</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Popup-Social-Media-icons'>
                                <Link to="/" onClick={() => { window.open("https://www.facebook.com/makemywebsite.com.au") }}>
                                    <i className="fa-brands fa-facebook"></i>
                                </Link>
                                <Link to="/" onClick={() => { window.open("https://www.instagram.com/makemywebsite.mmw/") }}>
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                                <Link to="/" onClick={() => { window.open("https://www.linkedin.com/company/make-my-website-pty-ltd/") }}>
                                    <i className="fa-brands fa-linkedin"></i>
                                </Link>
                                <Link to="/" onClick={() => { window.open("https://twitter.com/makemywebsite16") }}>
                                    <i className="fa-brands fa-twitter-square"></i>
                                </Link>
                                <Link to="/" onClick={() => { window.open("https://www.youtube.com/channel/UCWZs6OlOLKKFKQP7Ldn7jGQ") }}>
                                    <i className="fa-brands fa-youtube"></i>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 Popup-col-white mb-5'>
                        <div className='Popup-col-right'>
                            <div className='popup-form'>
                                <h3>We’d love to hear from you! Reach out to us for all your queries.</h3>
                            </div>
                            <div className='Popup-form-1'>
                                <a href="tel:1300769302"><i className="fa-solid fa-phone Popup-us-i"></i> 1300769302</a>
                            </div>
                            <div className='Popup-form-1 mb-5'>
                                <a href="mailto:info@makemywebsite.com.au"><i className="fa-solid fa-envelope Popup-envelope-i"></i> info@makemywebsite.com.au</a>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 Popup-form-input-list'>
                                    <label htmlFor="Name" className=''>Name</label>
                                    <input type="Name" className='form-control' />
                                </div>
                                <div className='col-md-6 Popup-form-input-list'>
                                    <label htmlFor="email" className=''>Email</label>
                                    <input type="Email" className='form-control' />
                                </div>
                                <div className='col-md-6 Popup-form-input-list'>
                                    <label htmlFor="number" className=''>Phone</label>
                                    <input type="Phone" className='form-control' />
                                </div>
                                <div className='col-md-6 Popup-form-input-list'>
                                    <label htmlFor="sub" className=''>Subject</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col-md-12 Popup-form-input-list'>
                                    <label htmlFor="discription" className=''>Project Description or Message</label>
                                    <textarea type="text" className="form-control" style={{ height: "100px" }}></textarea>
                                </div>
                                <div className='col-md-4 pt-2 Popup-form-input-list'>
                                    <a href="/" className='btn btn-dark Popup-us-submit' role='button'>SUBMIT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup