import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import tree from "../assets/tree.jpg"
import img1 from "../assets/desola-lanre-ologun-7d4LREDSPyQ-unsplash.jpg"
import img2 from "../assets/gema-saputera-pJaocJrXGFQ-unsplash.jpg"
import img3 from "../assets/irvan-smith-ymn_TY_MBn8-unsplash.jpg"
import img4 from "../assets/sigmund-F_m44ut3XTw-unsplash.jpg"
import img5 from "../assets/gema-saputera-pJaocJrXGFQ-unsplash.jpg"
const HeaderBanner = () => {
  return (
    <Carousel className='Carousel_part'>
                <div>
                    <img src={tree} alt='' className='Bannercarousel' />
                    <p className="legend">claim now</p>
                </div>
                <div>
                    <img src={img1} alt='' className='Bannercarousel' />
                    <p className="legend">grab 50% off</p>
                </div>
                <div>
                    <img src={img2}  alt='' className='Bannercarousel'/>
                    <p className="legend">donot be too late to grab</p>
                </div>
                <div>
                    <img src={img3}  alt='' className='Bannercarousel'/>
                    <p className="legend">try it now</p>
                </div>
                <div>
                    <img src={img4}  alt='' className='Bannercarousel'/>
                    <p className="legend">visit soon</p>
                </div>
                <div>
                    <img src={img5}  alt='' className='Bannercarousel'/>
                    <p className="legend">time limited offer 10% off</p>
                </div>
               
            </Carousel>
  )
}

export default HeaderBanner