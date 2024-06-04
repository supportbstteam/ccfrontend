import Slider from "react-slick";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { fetchData } from "../../apiConnection/apiService";
function PostSlider(props){
    const [PostSliderdata, setPostSliderdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responsehomenews = await fetchData('/category-blog/podcast'); // Replace '/data' with the API endpoint you want to fetch
            setPostSliderdata(responsehomenews);
            console.log('list grid start here '+JSON.stringify(responsehomenews));
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
        fetchDataFromAPI();
      }, []);
//console.log(PostSliderdata);
const newsroom = [
    {
        "id": 1,
        "img": "post.jpg",
        "title": "Lorem ipsum dolore radum daresorium: 5 top lorem",
        "category": "Podcast",
        "published": "Dezember 12, 2022"
    },
    {
        "id": 2,
        "img": "post.jpg",
        "title": "Lorem ipsum dolore radum daresorium: 5 top lorem",
        "category": "Podcast",
        "published": "Dezember 12, 2022"
    },
    {
        "id": 3,
        "img": "post.jpg",
        "title": "Lorem ipsum dolore radum daresorium: 5 top lorem",
        "category": "Podcast",
        "published": "Dezember 12, 2022"
    },
    {
        "id": 4,
        "img": "post.jpg",
        "title": "Lorem ipsum dolore radum daresorium: 5 top lorem",
        "category": "Podcast",
        "published": "Dezember 12, 2022"
    },
    {
        "id": 5,
        "img": "post.jpg",
        "title": "Lorem ipsum dolore radum daresorium: 5 top lorem",
        "category": "Podcast",
        "published": "Dezember 12, 2022"
    },
    {
        "id": 6,
        "img": "post.jpg",
        "title": "Lorem ipsum dolore radum daresorium: 5 top lorem",
        "category": "Podcast",
        "published": "Dezember 12, 2022"
    },
    {
        "id": 7,
        "img": "post.jpg",
        "title": "Lorem ipsum dolore radum daresorium: 5 top lorem",
        "category": "Podcast",
        "published": "Dezember 12, 2022"
    }
]
var settings = {
    dots: false, // Show dots navigation
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in milliseconds
    autoplay: true, // Enable autoplay
    autoplaySpeed: 6000, // Autoplay interval in milliseconds
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
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 top-post-slider" data-aos="fade-left" data-aos-easing="linear"
data-aos-duration="1000">
   {props.banner &&  <img src={`${process.env.imgpath}/newsroom/${props.banner}`} class="img-fluid"/> }
            {/* <Slider {...settings}>
                {PostSliderdata && PostSliderdata.map((news,i) => (
                <div className="podcast-post" key={i}>
                    <img src={`${process.env.imgpath}/blogPost/${news.banner_img}`} class="img-fluid"/>
                    <div className="newsroom-post-slides">
                        <Link href={news.category?`../${news.category.toLowerCase()}/${news.slug}`:''}>
                    <p><span>{news.category}</span>, <span>{new Date(news.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</span></p>
                    <h4>{news.post_title}</h4>
                    </Link>
                    </div>
                </div>
                ))
                }
            </Slider> */}
            </div>
        </div>
    </div>
</section>
)
}


export default PostSlider;