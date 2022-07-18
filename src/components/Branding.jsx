import React from 'react'
import '../Branding.css'
import Lottie from 'lottie-react'
import brand from '../animation/Branding.json';
import ServiceDelivery from './ServiceDelivery';
import BrandAni from '../animation/BrandingAni.json'
import aos from 'aos';
import 'aos/dist/aos.css'
aos.init()
function Branding() {
    return (
        <div>
            <div className="container-fluid" id="about-container">  
                <div className="row paragraph1">
                    <div className="col-md-6 paragraph">
                        <h1>
                            Branding <hr className='hr'></hr>
                        </h1>
                        <h2>
                            Designs That Communicate The <br /> Essence Of Your Brand
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container py-5'>
                    <div className='row branding-info py-5'>
                        <p>Branding in itself takes a lot of understanding of brand values and the identity you want the world to
                            remember you with as a brand. Branding has various realms including designing logos, business cards,
                            letterheads, brochures that stretches onto creating business taglines, prints, and finalizing on fonts
                            and the overall connecting quotient of the brand in the market. How the audience resonates with
                            your brand largely depends on what are the projections from the tiniest of elements that represent it.
                        </p>
                        <p>Branding is actually strategizing the representation of your brand, an effective branding lets
                            the audience connect with the real potential of the brand. This is why branding aspects from the
                            prints and fonts to logos and company names, is one field that takes planning and constant
                            up-gradation of designs. Adapting as per the demands and projections of your demographic,
                            lets you hold leverage at a lot of points. This comes from a thorough understanding of your
                            audience and how the symbols, prints and texture
                            of everything creates an impact that may not be explicitly visible but vastly influential.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: "#E8E8E86B" }}>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-7 Graphic-design'>
                            <h3 >Graphic Design</h3>
                            <p >When it comes to graphic designs, the sky’s the limit as everything that takes some
                                shape and is utilised by your brand as its own representative is your graphic design.
                                Graphics play a huge role in determining how the audience and clients interpret
                                your brand as the human mind thinks in images and corresponding shapes. This makes
                                your graphic designs a direct communicator to the minds of the people watching or engaging with you.
                            </p>
                            <p  >A good and effective graphic design subtly communicates to your audiences but imparts
                                every piece of information that needs to go out. A captivating logo, impressive
                                business card, statement letterhead, with taglines and prints that unleash your
                                exquisiteness with every glance is how impactful graphics in design can be.
                            </p>
                        </div>
                        <div className='col-lg-5' >
                            <Lottie animationData={brand} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                    <div className='row py-5'>
                        <div className='graphic'>
                            <h4  className='py-2'>Why Graphic Design is the backbone of every business’s representative qualitative:</h4>
                            <p  ><i className="fa-solid fa-circle-check brand-i"></i> It speaks to your audience without having to speak</p>
                            <p  ><i className="fa-solid fa-circle-check brand-i"></i> Gives your brand the attention it deserves</p>
                            <p  ><i className="fa-solid fa-circle-check brand-i"></i> Let’s you graphically depict your brand’s vision and ideals</p>
                            <p  ><i className="fa-solid fa-circle-check  brand-i"></i> Builds a solid brand identity that connects people with you</p>
                            <p  ><i className="fa-solid fa-circle-check brand-i"></i> Allows you to establish a familiarity with your audience</p>
                            <h5  className='py-2'>We design everything from Logos, Business Cards, Letterheads, and Brochures to Staff books, Handbooks, E-books and more!</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h3  className='wordplay-identity'>Brand’s Wordplay Identity</h3>
                <div className='row py-5'>
                    <div className='col-lg-7 Design'>
                        <p >A Brand’s vision is translated through its graphic representations but at
                           the same time is supported through its taglines, slogan, and foremost
                           the name that you hold. Every print and even your main brand logo is only a supporting agent of
                           the name and brand tagline that you speak to your audiences with.
                        </p>
                        <p  >An intelligently named venture, speaks directly to the demand of the market, addresses it,
                           and translates into high conversion rates of your leads. The work of business taglines
                           and titles is to hold the audiences the minute they hear of your business’s utility and deliverables.
                           Without the support of taglines, the graphic designs would lack depth and overall meaning.
                        </p>
                    </div>
                    <div className='col-lg-5'>
                    <Lottie animationData={BrandAni} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                    </div>
                </div>
                <div className='business mb-5'>
                    <h4 className='py-3'>How your brand’s wordplay and identity establish your value as a business:</h4>
                    <p  ><i className="fa-solid fa-circle-check brand-i"></i> It allows your brand to stand up to its authenticity with the audience</p>
                    <p  ><i className="fa-solid fa-circle-check brand-i"></i> Let’s you establish your purposefulness and goal-oriented task forces</p>
                    <p  ><i className="fa-solid fa-circle-check brand-i"></i> Motivates your team and professionals to match up to the brand ideals</p>
                    <p  ><i className="fa-solid fa-circle-check brand-i"></i> Gives you a clear & distinctive path to follow in delivering</p>
                    <p  ><i className="fa-solid fa-circle-check brand-i"></i> Let’s you create an exclusive style of functionality</p>
                </div>
            </div>
            <ServiceDelivery />
        </div>
    )
}

export default Branding