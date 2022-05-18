import React from 'react';
import './App.css';
import './WebDesignDevlopment.css';
import './Services.css'
import './DigitalMarketing.css'
import './Branding.css'
import './WebEmailHosting.css'
import './PhotoGraphyVideoGraphy.css'
import './CustomerCare.css'
import './OurPortfolio.css'
import './CaseStudy.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from './components/Services';
import WebDesignDevlopment from './components/WebDesignDevlopment';
import Branding from './components/Branding';
import WebEmailHosting from './components/WebEmailHosting';
import CustomerCare from './components/CustomerCare';
import DigitalMarkeing from './components/DigitalMarkeing';
import PhotoGraphyVideoGraphy from './components/PhotoGraphyVideoGraphy';
import OurPortfolio from './components/OurPortfolio';
import Works from './components/Works';
import Casestudy from './components/Casestudy';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />}/>
          <Route path="/WebDesignDelovpment" element={<WebDesignDevlopment />} />
          <Route path="/DigitalMarkeing" element={<DigitalMarkeing />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/WebEmailHosting" element={<WebEmailHosting />} />
          <Route path="/PhotoGraphyVideoGraphy" element={<PhotoGraphyVideoGraphy />} />
          <Route path="/CustomerCare" element={<CustomerCare />} />
        </Routes>
        <Footer />

      </BrowserRouter>
      {/* <Navbar/>
      <Works/> */}
     {/* <OurPortfolio/> */}
    {/* <Casestudy/> */}
    </div>
  );
}

export default App;
