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
                <a href="/" className="nav-link active mx-3" id='nav-link'>HOME</a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link active mx-3" id='nav-link'>ABOUT US</a>
              </li>
              <li className="nav-item dropdown">
                <a href="/about" className="nav-link active mx-3 " role='button'  type='button' data-toggle="dropdown" id='nav-link'>SERVICE +</a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li className='mb-2'><a href="/WebDesignDelovpment" className='dropdown-item'>Web Design & Development</a></li>
                  <li className='dropdown ' >
                    <a href="/DigitalMarkeing" className='dropdown-item mb-2' type='button' role='button' data-toggle="dropdown">Digital Marketing +</a>
                    <ul className='dropdown-menu shadow dropdwnleft'>
                      <li className='mb-2'><a href="/" className='dropdown-item' >Search Engine Optimization</a></li>
                      <li className='mb-2'><a href="/" className='dropdown-item'>Social Media Marketing</a></li>
                      <li className='mb-2'><a href="/" className='dropdown-item'>Content-Marketing</a></li>
                    </ul>
                  </li>
                  <li className='mb-2'><a href="/branding" className='dropdown-item'>Branding</a></li>
                  <li className='mb-2'><a href="/WebEmailHosting" className='dropdown-item'>Web And Email Hosting</a></li>
                  <li className='mb-2'><a href="/PhotoGraphyVideoGraphy" className='dropdown-item'>Photography and Vediography</a></li>
                  <li className='mb-2'><a href="/CustomerCare" className='dropdown-item'>Customer Care</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active mx-3" id='nav-link'> OUR PORTFOLIO +</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active mx-3" id='nav-link'> BLOG</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active mx-3" id='nav-link'> CONTACT US</a>
              </li>
              <li className="nav-item">
                <a href="/" id='navbar-btn' className="btn active mx-3"><i className='	fas fa-phone' id='navbar-btn'></i>1300 769 302</a>
              </li>
            </ul>

          </div>
        </div>
      </nav >
    </div>

  )
}

export default Navbar