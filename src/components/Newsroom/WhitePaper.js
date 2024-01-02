import { fetchData } from "../../apiConnection/apiService";
import Link from "next/link";
import Button from "../Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
function Whitepaper() {

  const [WhitePaperdata, setWhitePaperData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  var settings2 = {
    dots: true, // Show dots navigation
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in milliseconds
    autoplay: true, // Enable autoplay
    autoplaySpeed: 6000, // Autoplay interval in milliseconds
    accessibility: true,
		className: 'post-sliding',
		slidesToShow: 2,
    slidesToScroll: 1
  };

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responsehomenews = await fetchData('/whitepaper'); // Replace '/data' with the API endpoint you want to fetch
        setWhitePaperData(responsehomenews);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, []);

  return (
    <section className="main-section whitepaper-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className='section-title text-dark mb-5'>Whitepaper & Leitfäden</h2>
          </div>
          <Slider {...settings2}>
          {WhitePaperdata && WhitePaperdata.slice(0, 2).map((item,index)=>(
<div className="overlay-posts" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" key={index}>
<div className="card bg-dark text-white border-0 rounded-0">
  <img src={`${process.env.imgpath}/whitepaper/${item.image}`} className="card-img" alt={item.title} />
  <div className="card-img-overlay">
    <p className="post-published"><span>{item.category}</span></p>
    <h4 className="card-title">{item.title}</h4>
    <Button link={`blog/${item.slug}`} title="Zum Whitepaper" />
  </div>
</div>
</div>
))}
</Slider>
        </div>
      </div>
    </section>

  )
}

export default Whitepaper;