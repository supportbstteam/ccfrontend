import Slider from "react-slick";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { fetchData } from "../../apiConnection/apiService";
function PostSlider(props){
    const [PostSliderdata, setPostSliderdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <section className="main-section newsroom-sliders">
    <div className="container-fluid p-xl-0 p-lg-0 p-md-0">
        <div className="row">
            <div className="offset-lg-1 offset-md-1 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <div className="newsroom-col" data-aos="fade-right" data-aos-easing="linear"
data-aos-duration="1000">
    { props.title && <h1 className='section-title text-dark mb-5'>{props.title}</h1>}
    {props.description && <div dangerouslySetInnerHTML={{ __html: props.description }}></div>}
</div>
            </div>
            { props.banner && <div className="col-lg-5 col-md-5 col-sm-12 col-12 top-post-slider" data-aos="fade-left" data-aos-easing="linear"
data-aos-duration="1000">
    <img src={`${process.env.imgpath}/newsroom/${props.banner}`} className="img-fluid"/>
          
            </div> }
        </div>
    </div>
</section>
)
}


export default PostSlider;