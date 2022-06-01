import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../images/mmw-light-logo-min.png'

function Navbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 50) {
      setColor(false)
    } else {
      setColor(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return () => {
      window.removeEventListener('scroll', changeColor)
    }
  }, [])

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${color && 'nav_blue'}`}>
        <div className="container py-2">
          <a href="/" className="navbar-brand">
            <img src={logo} height="50px" alt="" />
          </a>
          <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#mainNavigation" area-control="mainNavigation" area-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link active" id='nav-link'>HOME</a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link active" id='nav-link'>ABOUT US</a>
              </li>
              <li className="nav-item dropdown">
                <a href="/service" className="nav-link active"  id='nav-link'>SERVICE +</a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li className='mb-2'><a href="/service/WebDesignDelovpment" className='dropdown-item'>Web Design & Development</a></li>
                  <li className='dropdown ' >
                    <a href="/service/DigitalMarkeing" className='dropdown-item mb-2'>Digital Marketing +</a>
                    <ul className='dropdown-menu shadow dropdwnleft'>
                      <li className='mb-2'><a href="/DigitalMarkeing/SearchEngine" className='dropdown-item' >Search Engine Optimization</a></li>
                      <li className='mb-2'><a href="/WebDesignDelovpment/SocialMedia" className='dropdown-item'>Social Media Marketing</a></li>
                      <li className='mb-2'><a href="/WebDesignDelovpment/ContentMarketing" className='dropdown-item'>Content-Marketing</a></li>
                      <li className='mb-2'><a href="/WebDesignDelovpment/GooglePay" className='dropdown-item'>Google Ads & Pay Per Click</a></li>
                    </ul>
                  </li>
                  <li className='mb-2'><a href="/service/branding" className='dropdown-item'>Branding</a></li>
                  <li className='mb-2'><a href="/service/WebEmailHosting" className='dropdown-item'>Web And Email Hosting</a></li>
                  <li className='mb-2'><a href="/service/PhotoGraphyVideoGraphy" className='dropdown-item'>Photography and Vediography</a></li>
                  <li className='mb-2'><a href="/service/CustomerCare" className='dropdown-item'>Customer Care</a></li>
                </ul>
              </li>
              <li className="nav-item  dropdown">
                <a href="/ourportfolio" className="nav-link active" id='nav-link'> OUR PORTFOLIO +</a>
                <ul ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                      <li className='mb-2'><a href="/WebDesignPortfolio" className='dropdown-item' >Web Design Portfolio</a></li>
                      <li className='mb-2'><a href="/Graphicportfolio" className='dropdown-item'>Graphic Portfolio</a></li>
                      <li className='mb-2'><a href="/phtographyportfolio" className='dropdown-item'>Photography Portfolio</a></li>
                      <li className='mb-2'><a href="/VedioPortfolio" className='dropdown-item'>Vedio Portfolio</a></li>
                      <li className='mb-2'><a href="/Casestudy" className='dropdown-item'>Case Studies</a></li>
                    </ul>
              </li>
              <li className="nav-item">
                <a href="/Blog" className="nav-link active" id='nav-link'> BLOG</a>
              </li>
              <li className="nav-item">
                <a href="/ContactUs" className="nav-link active" id='nav-link'> CONTACT US</a>
              </li>
              <li className="nav-item">
                <a href="/" id='navbar-btn' className="btn active"><i className='	fas fa-phone' id='navbar-btn'></i>1300 769 302</a>
              </li>
            </ul>

          </div>
        </div>
      </nav >
    </div>

  )
}

export default Navbar