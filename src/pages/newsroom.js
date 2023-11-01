"use client"
import { useEffect } from "react";
import Slider from "react-slick";
import Aos from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/components/Button";
import HomeForm from "@/components/HomForm";
import Layout from "@/components/Layout";
import NewReleasePost from "@/components/Newsroom/NewRelease";
import ProjectInsights from "@/components/Newsroom/ProjectInsights";
import Whitepaper from "@/components/Newsroom/WhitePaper";
import AllinSIghts from "@/components/Newsroom/AllSights";
function NewsRoom(){

    useEffect(()=>{
        Aos.init({duration: 1700});
    },[])
    
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
        <Layout>
        <section className="news-post-fillter bg-dark">
            <div className="container" data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000">
                <div className="row align-items-center py-3">
        <div className="col-12">
        <h5 className="text-white mb-0 text-center">“Entdecken Sie unsere Beiträge und seien Sie immer auf den neusten Stand”</h5>
        </div>
        {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center g-2 entdecken-gap">
            <select className="col-lg-3 col-md-3 col-12">
                <option>Alle Industrien</option>
                <option>Alle Industrien</option>
                <option>Alle Industrien</option>
            </select>
        <select className="col-lg-3 col-md-3 col-12">
                <option>Jegliche Services</option>
                <option>Jegliche Services</option>
                <option>Jegliche Services</option>
            </select>
          <select className="col-lg-3 col-md-3 col-12">
                <option>Alle Content Typen</option>
                <option>Alle Content Typen</option>
                <option>Alle Content Typen</option>
            </select>
        </div> */}
             
        </div>
            </div>
        </section>
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
                        {newsroom.map((news,i) => (
                        <div className="podcast-post" key={i}>
                            <img src="../assets/images/newsroom/post.jpg"/>
                            <div className="newsroom-post-slides">
                            <p><span>{news.category}</span>, <span>{news.published}</span></p>
                            <h4>{news.title}</h4>
                            </div>
                        </div>
                        ))
                        }
                    </Slider>
                    </div>
                </div>
            </div>
        </section>

        <section className="main-section">
            <div className="container">
            <div className="col-12">
                <h2 className='section-title text-dark mb-5'  data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000">Neue Veröffentlichungen </h2>
                </div>
                <NewReleasePost/>
                </div>
                </section>
            <ProjectInsights/>

            <Whitepaper/>
    <section className="main-section min-height bg-dark d-flex align-items-center" data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <h2 className="section-title mb-4"> Who we are</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Button title="Ganzes Video anschauen" link="#"/>
                </div>
            </div>
        </div>
    </section>

    <section className="main-section all-insights">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <h2 className='section-title text-dark mb-5'>Alle Insights</h2>
                </div>
            </div>
           

           <AllinSIghts/>
        </div>
    </section>

    <section className="main-section">
    <div className="container">
    <div className="row">
      <div className='col-12'>
     <h2 data-aos="fade-down" className='section-title text-dark'>Ihr Draht zu uns</h2>
    <p className='text-dark section-desciption' data-aos="fade-down">Sie haben individuelle Anforderungen an die Errichtung der Ladeinfrastruktur? Kein Problem! Wir helfen Ihnen weiter und erarbeiten ein für Sie passendes Konzept.
<br/>
<br/>
Schreiben Sie uns, oder rufen Sie uns an <a href='+4984149399122'>+49-841-49399122</a></p>
      </div>
    <div className='col-12'>
  <HomeForm/>
    </div>
    </div>
    </div>
    </section>
        </Layout>
    )
}

export default NewsRoom;

export async function getServerSideProps() {
    try {

      // Fetch data from an API or any other data source
      const response = await fetch(`https://teamwebdevelopers.com/charge_construct/api/blogPost/`);
      const data = await response.json(); // Parse the JSON content
      //console.log("value of response "+response);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
       
      return {
        props: { data },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          data: null, // You can set a default value or handle errors as needed
        },
      };
    }
  }