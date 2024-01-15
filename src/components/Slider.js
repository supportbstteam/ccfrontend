import { useEffect } from "react";
//import Aos from 'aos';
import Button from "./Button";
function MainSlider(slide){
    const { id, sld_img, title,subtitle,description,btnlink } = slide.slider[0];
   // const { id1, sld_img1, title1,subtitle1,description1,link1,btnlink1 } = slide.slider[1];
   // console.log(slide.slider[1].id);
    //const { id, sld_img, title,subtitle,description,link } = slide.slider;

    // useEffect(()=>{
    //     Aos.init({duration: 1700});
    // },[])

    return (
        <>
    <div className="banner-slider" style={{backgroundImage: `url(${process.env.imgpath}/slider/${slide.slider[0].sld_img})`}}>
      <div className="container">
        <div className="row">
            <div className="offset-lg-0 col-lg-5 offset-md-1 col-md-10 col-sm-12">
            <div className="banner-content" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000">
            <h2>{slide.slider[1].title}</h2>
            <h1>{slide.slider[1].subtitle}</h1>
            <p>{slide.slider[1].description}</p>
            <Button title={slide.slider[1].btnlink.title} classs="main-btn border-6 cc-button cc-transbutton" link={slide.slider[1].btnlink.link}/>
        </div>
            </div>
        </div>
        </div>
        <div className="container dynamic-banner-2">
        <div className="row">
            <div className="offset-lg-3 col-lg-6 offset-md-1 col-md-10 col-12">
            <div className="banner-content-2 text-center" data-aos="fade-down"
     data-aos-anchor-placement="top-bottom">
            <h1>{slide.slider[0].title}</h1>
            <p>{slide.slider[0].description}</p>
           
           <Button title={slide.slider[0].btnlink.title} classs="cc-transbutton" link={slide.slider[0].btnlink.link}/>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>)
}

export default MainSlider;