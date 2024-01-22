import { useEffect } from "react";
//import Aos from 'aos';
import Button from "./Button";
function MainSlider(slide){
    //console.log(slide);
    return (
        <>
    <div className="banner-slider" style={{backgroundImage: `url(${process.env.imgpath}/slider/${slide.slider[0].sld_img})`}}>
    {slide.slider[0].subtitle && <div className="container">
        <div className="row">
            <div className="offset-lg-0 col-lg-5 offset-md-1 col-md-10 col-sm-12">
          <div className="banner-content" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: slide.slider[0].subtitle }}></div>
            </div>
        </div>
        </div>}
        {slide.slider[0].subtitle && <div className="container dynamic-banner-2">
        <div className="row">
            <div className="offset-lg-3 col-lg-6 offset-md-1 col-md-10 col-12">
            <div className="banner-content-2 text-center" data-aos="fade-down"
     data-aos-anchor-placement="top-bottom"  dangerouslySetInnerHTML={{ __html: slide.slider[0].description }}>
         </div>
        </div>
        </div>
        </div>
        }
        </div>
        </>)
}

export default MainSlider;