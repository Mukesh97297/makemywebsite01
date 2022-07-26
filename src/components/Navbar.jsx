import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../images/mmw-light-logo-min.png'
import { Link } from 'react-router-dom';
function Navbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY < 80 || window.Navbar) {
      setColor(true)
    } else {
      setColor()
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return () => {
      window.removeEventListener('scroll', changeColor)
    }
  }, []);
  window.onscroll = function () {
    scrollDown()
  }
  function scrollDown() {
    var Logo = document.getElementById("Logo");
    var Navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      Logo.style.height = "50px";
      Navbar.style.padding = "15px 0px 15px 0px";
    }
    else {
      Logo.style.height = "65px"
    }
  }
  return (
    <div>
      <nav id='navbar' className={`navbar navbar-expand-lg navbar-dark fixed-top ${color && 'nav_blue'}`}>
        <div className="container navbar-container">
          <Link to='/' className="navbar-brand">
            <img src={logo} height="65px" alt="logo" id='Logo' />
          </Link>
          <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#mainNavigation" area-control="mainNavigation" area-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="mainNavigation">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" id='nav-link'>HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active" id='nav-link'>ABOUT US</Link> 
              </li>
              <li className="nav-item dropdown">            
                <Link to="/service" className="nav-link active" id='nav-link'>SERVICES +</Link> 
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li >
                    <Link to="/service/WebDesignDelovpment" className='dropdown-item'>Web Design & Development</Link>
                  </li>
                  <li className='dropdown ' >
                    <Link to="/service/DigitalMarkeing" className='dropdown-item mb-2 dropdwon-1'>Digital Marketing +</Link>
                    <ul className='dropdown-menu shadow dropdwnleft'>
                      <li>
                        <Link to="/DigitalMarkeing/SearchEngine" className='dropdown-item' >Search Engine Optimization</Link>
                      </li>
                      <li><Link to="/WebDesignDelovpment/SocialMedia" className='dropdown-item'>Social Media Marketing</Link></li>
                      <li><Link to="/WebDesignDelovpment/ContentMarketing" className='dropdown-item'>Content-Marketing</Link></li>
                      <li><Link to="/WebDesignDelovpment/GooglePay" className='dropdown-item'>Google Ads & Pay Per Click</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/service/branding" className='dropdown-item'>Branding</Link></li>
                  <li><Link to="/service/WebEmailHosting" className='dropdown-item'>Web And Email Hosting</Link></li>
                  <li><Link to="/service/PhotoGraphyVideoGraphy" className='dropdown-item'>Photography and Vediography</Link></li>
                  <li><Link to="/service/CustomerCare" className='dropdown-item'>Customer Care</Link></li>
                </ul>
              </li>
              <li className="nav-item  dropdown">
                <Link to="/ourportfolio" className="nav-link active" id='nav-link'> OUR PORTFOLIO +</Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li >
                    <Link to="/WebDesignPortfolio" className='dropdown-item'>Web Design Portfolio</Link>
                  </li>
                  <li >
                    <Link to="/Graphicportfolio" className='dropdown-item'>Graphic Portfolio</Link>
                  </li>
                  <li >
                    <Link to="/phtographyportfolio" className='dropdown-item'>Photography Portfolio</Link>
                  </li>
                  <li > <Link to="/VedioPortfolio" className='dropdown-item'>Vedio Portfolio</Link>
                  </li>
                  <li >
                    <Link to="/Casestudy" className='dropdown-item'>Case Studies</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Blog" className="nav-link active" id='nav-link'>BLOG</Link>
              </li>
              <li className="nav-item">
                <Link to='/ContactUs' className="nav-link active" id='nav-link'>CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link to="tel:1300769303" id='navbar-btn' className="btn"><i className='fas fa-phone'></i>1300 769 302</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </div>
  )
}

export default Navbar