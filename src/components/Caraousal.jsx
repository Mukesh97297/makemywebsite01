import React from 'react'
import a from '../images/misurgeon.png'
import b from '../images/ninoklapcic.png'
import c from '../images/infinitelygreen.png'
import d from '../images/Coburns-Rise.png'
import e from '../images/Augment-Group.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Caraousel() {
    const Option = {
        items: 2,
        nav: ["color:white"],
        center: true,
        autoplay: true,
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
            <div style={{position:"relative"}}>
                <video className='Carousal-vedio-tag' src="https://www.makemywebsite.com.au/wp-content/uploads/2021/03/ccc.mp4" autoPlay muted loop type="video/mp4"></video>
                <OwlCarousel {...Option} className='owl-theme OwlCarousal-about-tag' loop margin={50}>
                    <div className='item pt-5'>
                        <a href="/">
                            <img src={a} className="img-fluid" alt="" />
                        </a>
                        <h2>Mi Surgeon</h2>
                        <a href="https://www.misurgeon.com.au/">https://www.misurgeon.com.au</a>
                    </div>
                    <div className='item pt-5'>
                        <a href="/">
                            <img src={b} className="img-fluid" alt="" />
                        </a>
                        <h2>Nino klapcic</h2>
                        <a href="https://www.ninoklapcic.com/"><u>https://www.ninoklapcic.com</u></a>
                    </div>
                    <div className='item pt-5'>
                        <a href="/">
                            <img src={c} className="img-fluid" alt="" />
                        </a>
                        <h2>Infinitely Green</h2>
                        <a href="https://infinitelygreen.com.au/">https://infinitelygreen.com.au</a>
                    </div>
                    <div className='item pt-5'>
                        <a href="/">
                            <img src={d} className="img-fluid" alt="" />
                        </a>
                        <h2>Coburns Rise</h2>
                        <a href="https://www.coburnsrise.com.au/">https://www.coburnsrise.com.au</a>
                    </div>
                    <div className='item pt-5'>
                        <a href="/">
                            <img src={e} className="img-fluid" alt="" />
                        </a>
                        <h2>Augment Group</h2>
                        <a href="https://www.augmentgroup.com.au/">https://www.augmentgroup.com.au</a>
                    </div>

                </OwlCarousel>
            </div>
        </div>
    )
}

export default Caraousel