import React from 'react';
import './App.css';
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
import Casestudy from './components/Casestudy';
import PhotographyPortfolio from './components/PhotographyPortfolio';
import GraohicPortfolio from './components/GraohicPortfolio';
import Blog from './components/Blog';
import VedioGraphyPortfolio from './components/VedioGraphyPortfolio';
import SearchEngineOptimization from './components/SearchEngineOptimization';
import SocialMediaMarketing from './components/SocialMediaMarketing';
import ContentMarketing from './components/ContentMarketing';
import GoogleAdsPay from './components/GoogleAdsPay';
import ContactUs from './components/ContactUs';
import WebDesignPortfolio from './components/WebDesignPortfolio';
import Sydney from './components/Sydney';
import WebBrisbane from './components/WebBrisbane';
import DesignPerth from './components/DesignPerth';
import AdalaideDesign from './components/AdalaideDesign';
import GeelongDesign from './components/GeelongDesign';
import GoldCost from './components/GoldCost';
import ModernWorld from './components/ModernWorld';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsCondition from './components/TermsCondition';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
        <Routes>
           <Route path="/" element={<Home />} /> 
       <Route path="/about" element={<About />} />
         <Route path="/service" element={<Services />} />
          <Route path="/service/WebDesignDelovpment" element={<WebDesignDevlopment />} />
          <Route path="/service/DigitalMarkeing" element={<DigitalMarkeing />} />
          <Route path="/DigitalMarkeing/SearchEngine" element={<SearchEngineOptimization />} />
          <Route path="/WebDesignDelovpment/SocialMedia" element={<SocialMediaMarketing />} />
          <Route path="/WebDesignDelovpment/ContentMarketing" element={<ContentMarketing />} />
          <Route path="/WebDesignDelovpment/GooglePay" element={<GoogleAdsPay />} />
          <Route path="/service/branding" element={<Branding />} />
          <Route path="/service/WebEmailHosting" element={<WebEmailHosting />} />
          <Route path="/service/PhotoGraphyVideoGraphy" element={<PhotoGraphyVideoGraphy />} />
          <Route path="/service/CustomerCare" element={<CustomerCare />} />
          <Route path="/ourportfolio" element={<OurPortfolio />} />
          <Route path='/WebDesignPortfolio' element={<WebDesignPortfolio />} />
          <Route path="/Casestudy" element={<Casestudy />} />
          <Route path="/VedioPortfolio" element={<VedioGraphyPortfolio />} />
          <Route path="/phtographyportfolio" element={<PhotographyPortfolio />} />
          <Route path="/Graphicportfolio" element={<GraohicPortfolio />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Sydney" element={<Sydney />} />
          <Route path="/WebBrisbane" element={<WebBrisbane />} />
          <Route path='/DesignPerth' element={<DesignPerth />} />
          <Route path='/LinkdalaideDesign' element={<AdalaideDesign />} />
          <Route path="/GeelongDesign" element={<GeelongDesign />} />
          <Route path="/GoldCost" element={<GoldCost />} />
          <Route path="/ModernWorld" element={<ModernWorld />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/termsCondition" element={<TermsCondition/>} /> 
         </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
