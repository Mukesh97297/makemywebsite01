import React from 'react'
import a from '../images/misurgeon.png'
import b from '../images/ninoklapcic.png'
import c from '../images/infinitelygreen.png'
import d from '../images/Coburns-Rise.png'
import e from '../images/Augment-Group.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'

function Caraousel() {
    const Option = {
        items: 2,
        nav: true,
        center: true,
        autoplay: true,
        navText : ["<i class='fa fa-chevron-left prew-slide'></i>","<i class='fa fa-chevron-right prew-slide'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                item: 2,
            },
            1000: {
                item: 1,
            }
        }
    }
    return (
        <div>
            <div style={{ position: "relative" }}>
                <video className='Carousal-vedio-tag' src="https://www.makemywebsite.com.au/wp-content/uploads/2021/03/ccc.mp4" autoPlay muted loop type="video/mp4"></video>
                <OwlCarousel dots={false} {...Option} className='owl-theme OwlCarousal-about-tag' loop margin={50}>
                    <div className='item pt-5'>
                        <div>
                            <img src={a} className="img-fluid" alt="" />
                        </div>
                        <h2>Mi Surgeon</h2>
                        <Link to="/" onClick={() => { window.open("https://www.misurgeon.com.au/") }}><u>https://www.misurgeon.com.au</u></Link>
                    </div>
                    <div className='item pt-5'>
                        <div>
                            <img src={b} className="img-fluid" alt="" />
                        </div>
                        <h2>Nino klapcic</h2>
                        <Link to="/" onClick={() => { window.open("https://www.ninoklapcic.com/") }}><u>https://www.ninoklapcic.com</u></Link>
                    </div>
                    <div className='item pt-5'>
                        <div>
                            <img src={c} className="img-fluid" alt="" />
                        </div>
                        <h2>Infinitely Green</h2>
                        <Link to="/" onClick={() => { window.open("https://infinitelygreen.com.au/") }}><u>https://infinitelygreen.com.au</u></Link>
                    </div>
                    <div className='item pt-5'>
                        <div>
                            <img src={d} className="img-fluid" alt="" />
                        </div>
                        <h2>Coburns Rise</h2>
                        <Link to="/" onClick={() => { window.open("https://www.coburnsrise.com.au/") }}><u>https://www.coburnsrise.com.au</u></Link>
                    </div>
                    <div className='item pt-5'>
                        <div>
                            <img src={e} className="img-fluid" alt="" />
                        </div>
                        <h2>Augment Group</h2>
                        <Link to="/" onClick={() => { window.open("https://www.augmentgroup.com.au/") }}><u>https://www.augmentgroup.com.au</u></Link>
                    </div>

                </OwlCarousel>
            </div>
        </div>
    )
}

export default Caraousel