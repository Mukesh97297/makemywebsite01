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
        center: true,
        autoplay: true,  
        responsive: {
            0: {
                items: 1,
            },
            600:{
                item:2,
            },
            1000:{
                item:2,
            }
        }
    }
    return (
        <div>
            <OwlCarousel {...Option} className='owl-theme' loop margin={50} nav>
                <div className='item'>
                    <a href="/">
                        <img src={a} className="img-fluid" alt="" />
                    </a>
                    <h2>misurgeon</h2>
                    <a href="https://www.misurgeon.com.au/">https://www.misurgeon.com.au/</a>
                </div>
                <div className='item'>
                    <a href="/">
                        <img src={b} className="img-fluid" alt="" />
                    </a>
                    <h2>ninoklapcic</h2>
                    <a href="https://www.ninoklapcic.com/">https://www.ninoklapcic.com/</a>
                </div>
                <div className='item'>
                    <a href="/">
                        <img src={c} className="img-fluid" alt="" />
                    </a>
                    <h2>infinitelygreen</h2>
                        <a href="https://infinitelygreen.com.au/">https://infinitelygreen.com.au/</a>
                </div>
                <div className='item'>
                    <a href="/">
                        <img src={d} className="img-fluid" alt="" />
                    </a>
                    <h2>coburnsrise</h2>
                    <a href="https://www.coburnsrise.com.au/">https://www.coburnsrise.com.au/</a>
                </div>
                <div className='item'>
                    <a href="/">
                        <img src={e} className="img-fluid" alt="" />
                    </a>
                    <h2>augmentgroup</h2>
                    <a href="https://www.augmentgroup.com.au/">https://www.augmentgroup.com.au/</a>
                    <h2>augmentgroup</h2>
                </div>

            </OwlCarousel>
        </div>
    )
}

export default Caraousel