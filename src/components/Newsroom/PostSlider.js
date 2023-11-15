import Slider from "react-slick";
import { useState, useEffect } from 'react';
import { fetchData } from "../../apiConnection/apiService";
function PostSlider(){
    const [PostSliderdata, setPostSliderdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responsehomenews = await fetchData('/category-blog/podcast'); // Replace '/data' with the API endpoint you want to fetch
            setPostSliderdata(responsehomenews);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
        fetchDataFromAPI();
      }, []);

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
    <section className="main-section pt-0">
    <div className="container-fluid p-0">
        <div className="row">
            <div className="offset-lg-1 offset-md-1 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <div className="newsroom-col" data-aos="fade-right" data-aos-easing="linear"
data-aos-duration="1000">
            <h1 className='section-title text-dark mb-5'>Newsroom</h1>
            <h4 className="text-dark">Fachwissen zu den Themengebieten Elektromobilität und Ladeinfrastruktur kompakt an einem Ort</h4>
            <p className="text-dark">In unserem Newsroom findest du Beiträge zu den wichtigsten Themen im Bereich Elektromobilität und Ladeinfrastruktur. Außerdem findest Du hier unsere Empfehlungen für die Errichtung und den Betrieb von
Ladeinfrastruktur. Zusätzlich findest du hier Pressemitteilungen und unsere Beiträge in den Medien.
<br/>
<br/>
Alles kompakt und an einem Ort, sodass keine Fragen offen bleiben.</p>
</div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 top-post-slider" data-aos="fade-left" data-aos-easing="linear"
data-aos-duration="1000">
            <Slider {...settings}>
                {PostSliderdata && PostSliderdata.map((news,i) => (
                <div className="podcast-post" key={i}>
                    <img src="../assets/images/newsroom/post.jpg"/>
                    <div className="newsroom-post-slides">
                    <p><span>{news.category}</span>, <span>{new Date(news.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</span></p>
                    <h4>{news.post_title}</h4>
                    </div>
                </div>
                ))
                }
            </Slider>
            </div>
        </div>
    </div>
</section>
)
}


export default PostSlider;