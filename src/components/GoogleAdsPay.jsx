import React from 'react'
import '../GoggleAdsPay.css'
import GooglePay from '../images/ppc1.png'
import ServiceDelivery from './ServiceDelivery'
function GoogleAdsPay() {
  return (
    <div>
      <div className="container-fluid pl-5 pt-3" id="about-container">
        <div className="row pt-5">
          <div className="col-md-12 pt-5 pl-5 webDesignDevelopment">
            <h1 className='pl-4 pt-3'>
              Google Ads & Pay Per Click
              <hr className='hr'></hr>
            </h1>
            <h2 className='pl-4 mb-2'>
              Working Meticulously To Get You A <br /> Return On Every Dollar You Spend

            </h2>
            <div id="about-main-elemontor">
              <div id="about-rcircle">
                <div id="about-welcome-shape-1"></div>
                <div id="about-welcome-shape-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-md-7 Goggle-pay-per-click'>
              <p>Paid Promotions are as necessary as your organic marketing techniques. It’s a good blend of both that yields results on digital forums such as your website and your demographic’s online spaces of interest. Paid Ads on Google help you get the attention of the right people looking for your product or service and thus gets leads faster and easier.</p>
              <p>While managing all the ads requires some skill, running them in the places that are most effective and visible to your targeted audience takes some professional experience. Our team helps you manage your existing ads, publish new ones in the places that meet your requirements and collectively build a network that boosts engagements, conversion rates and improves your quality of communication with the client base.</p>
            </div>
            <div className='col-md-5'>
              <img src={GooglePay} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{ backgroundColor: "#f5f5f5" }}>
        <div className='container py-5'>
          <div className='Goggle-pay-per-click-1'>
            <h3>How Google Ads & PPC take you ahead in the game:</h3>
            <p><i className="fa-solid fa-circle-check Google-pay" /> Let’s you reach out and hit your specific target group</p>
            <p><i className="fa-solid fa-circle-check Google-pay" /> Brings you into the limelight of your targeted audience</p>
            <p><i className="fa-solid fa-circle-check Google-pay" /> Builds and supports the efficiency of your organic reach</p>
            <p><i className="fa-solid fa-circle-check Google-pay" /> Let’s your content reach the specific groups it’s created for</p>
            <p><i className="fa-solid fa-circle-check Google-pay" /> Boosts your rankings on Search Engine Result Pages</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='py-5 Goggle-pay-per-click-2'>
          <p>Our Google Ads expert allows a seamless set-up as per your business and targets keywords relevant to your niche to get you the results.</p>
          <p>However, it is surely an expensive marketing vertical, as you are charged on a “per-click” basis. We are happy to have a chat to understand your business, goals, and long-term vision, to recommend you the right marketing solutions for your business.</p>
          <p>It is always good to blend certain methodologies as per your needs and goals, and this is exactly what we do whilst creating a strategic digital marketing plan for you. </p>
          <p>Get in touch with us today! </p>
          
        </div>
      </div>
      <ServiceDelivery />
    </div>
  )
}

export default GoogleAdsPay