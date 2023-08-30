import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/components/Button";
import GridPostList from "@/components/PostGrid/PostGrid";
import HomeForm from "@/components/HomForm";
import Layout from "@/components/Layout";
function Blog(){
    const [data, setData] = useState(null);
    const [sectionData, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(()=>{
        Aos.init({duration: 1700});
    },[])

    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseData = await fetchData('/blogPost'); // Replace '/data' with the API endpoint you want to fetch
             setData(responseData);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
    
        fetchDataFromAPI();
      }, []);

    const { id,post_title, banner_img, post_content,post_date,post_author,tags,category,recommendation_blog} = data;
    // {{ category.map((datas)=>{
    //     console.log(datas.name);
    // })}}
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

    useEffect(() => {
        document.querySelector("body").removeAttribute("class", '');
        document.querySelector("body").classList.add("newsroom-template")
    });
    return(
        <Layout>
        <section className="main-section pt-0">
            <div className="container-fluid p-0">
                <div className="row single-blog-row">
                    <div className="offset-lg-1 offset-md-1 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                    <div className="newsroom-col" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1000">
        <div className="post-category">
            {category.map((datas) =>
            (<span key={datas.id}>{datas.name}</span>))
            } - {post_date}</div>
        <h4 className="text-white">{post_title}</h4>
            </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12 top-post-slider" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1000">
                   <div className="podcast-post">
                   {banner_img?<img src={banner_img?`assets/images/newsroom/${banner_img}`:''}/>:''}
                   </div>
                    </div>
                </div>
            </div>
        </section>

<section className="single-post">
    <div className="container">
        <div className="row">
            <div className="col-lg-7 col-mg-7 col-12 post-content">
           <p>This year in Amsterdam, with over eight thousand attendees representing more than 2,300 companies and 90 countries, Money20/20 Europe once again showcased its centrality to the global conversation on FinTech.

From startups and entrepreneurs to the world’s biggest banks, this three-day conference connected all types of innovators and disruptors within the money ecosystem through groundbreaking workshops, renowned speakers, and the latest FinTech products. Money20/20 is a leading global platform that enables individuals and organizations to achieve their goals and grow, while ultimately driving change in the overall industry – and we want to be the first to bring you the biggest highlights from the event.

Here is your insider’s look at the future trends in FinTech and banking technology innovation from the conversations, panel discussions and insights shared by the industry’s leading experts.</p> 

<img src="assets/images/newsroom/gemacht.jpg"/>
<h4>Lorem ipsum dolore radum daresorium: 5 top lorem</h4>
<p>This year in Amsterdam, with over eight thousand attendees representing more than 2,300 companies and 90 countries, Money20/20 Europe once again showcased its centrality to the global conversation on FinTech.

From startups and entrepreneurs to the world’s biggest banks, this three-day conference connected all types of innovators and disruptors within the money ecosystem through groundbreaking workshops, renowned speakers, and the latest FinTech products. Money20/20 is a leading global platform that enables individuals and organizations to achieve their goals and grow, while ultimately driving change in the overall industry – and we want to be the first to bring you the biggest highlights from the event.

Here is your insider’s look at the future trends in FinTech and banking technology innovation from the conversations, panel discussions and insights shared by the industry’s leading experts.
</p>
<h4>Lorem ipsum dolore radum daresorium: 5 top lorem</h4>
<p>This year in Amsterdam, with over eight thousand attendees representing more than 2,300 companies and 90 countries, Money20/20 Europe once again showcased its centrality to the global conversation on FinTech.

From startups and entrepreneurs to the world’s biggest banks, this three-day conference connected all types of innovators and disruptors within the money ecosystem through groundbreaking workshops, renowned speakers, and the latest FinTech products. Money20/20 is a leading global platform that enables individuals and organizations to achieve their goals and grow, while ultimately driving change in the overall industry – and we want to be the first to bring you the biggest highlights from the event.

Here is your insider’s look at the future trends in FinTech and banking technology innovation from the conversations, panel discussions and insights shared by the industry’s leading experts.
</p>
<h4>Lorem ipsum dolore radum daresorium: 5 top lorem</h4>
<p>This year in Amsterdam, with over eight thousand attendees representing more than 2,300 companies and 90 countries, Money20/20 Europe once again showcased its centrality to the global conversation on FinTech.

From startups and entrepreneurs to the world’s biggest banks, this three-day conference connected all types of innovators and disruptors within the money ecosystem through groundbreaking workshops, renowned speakers, and the latest FinTech products. Money20/20 is a leading global platform that enables individuals and organizations to achieve their goals and grow, while ultimately driving change in the overall industry – and we want to be the first to bring you the biggest highlights from the event.

Here is your insider’s look at the future trends in FinTech and banking technology innovation from the conversations, panel discussions and insights shared by the industry’s leading experts.
</p>
<img src="assets/images/newsroom/ladepark.jpg"/>
<h4>Lorem ipsum dolore radum daresorium: 5 top lorem</h4>
<p>This year in Amsterdam, with over eight thousand attendees representing more than 2,300 companies and 90 countries, Money20/20 Europe once again showcased its centrality to the global conversation on FinTech.

From startups and entrepreneurs to the world’s biggest banks, this three-day conference connected all types of innovators and disruptors within the money ecosystem through groundbreaking workshops, renowned speakers, and the latest FinTech products. Money20/20 is a leading global platform that enables individuals and organizations to achieve their goals and grow, while ultimately driving change in the overall industry – and we want to be the first to bring you the biggest highlights from the event.

Here is your insider’s look at the future trends in FinTech and banking technology innovation from the conversations, panel discussions and insights shared by the industry’s leading experts.
</p>
<h4>Lorem ipsum dolore radum daresorium: 5 top lorem</h4>
<p>This year in Amsterdam, with over eight thousand attendees representing more than 2,300 companies and 90 countries, Money20/20 Europe once again showcased its centrality to the global conversation on FinTech.

From startups and entrepreneurs to the world’s biggest banks, this three-day conference connected all types of innovators and disruptors within the money ecosystem through groundbreaking workshops, renowned speakers, and the latest FinTech products. Money20/20 is a leading global platform that enables individuals and organizations to achieve their goals and grow, while ultimately driving change in the overall industry – and we want to be the first to bring you the biggest highlights from the event.

Here is your insider’s look at the future trends in FinTech and banking technology innovation from the conversations, panel discussions and insights shared by the industry’s leading experts.
</p>
            </div>
            <div className="col-lg-5 col-mg-5 col-12 d-flex justify-content-center">
                <div className="post-btn-group">
            <Button link="#" title="Entdecke Sie wie unser Team auch Ihnen helfen kann" classs="withoutbtn no-arrow kann-btn"/>
            <Button link="#" title="Kontakt aufnahmen" classs="withoutbtn no-arrow"/>
            </div>
            </div>
        </div>

        <div className="row align-items-end mt-4">
            <div className="col-lg-7 col-md-7 col-sm-12">
                <h4>Ähnliche Themen</h4>
                <ul className="blog-tags">
                {tags.map((datas) =>
            (<li><a href={datas.link} className="post-tags">{datas.name}</a></li>))
            } 
                </ul>
                
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
                <ul className="share-blogs">
                <li><h5>Share</h5></li>
                <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/></svg></li>
                <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"/></svg></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></li>
                </ul>
            </div>
        </div>
    </div>
</section>

    <section className="main-section single-suggest-posts all-insights">
        <div className="container">
            <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
                <h2 className='section-title text-dark mb-5'>Das könnte dir auch gefallen...</h2>
                </div>
                <div className="col-lg-5 col-md-5 col-12">
            <Button link="#" title="Mehr Insights" classs="withoutbtn blog-insights"/>
            </div>
            </div>
            
        <GridPostList bloglist={{recommendation_blog}}/>
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

export default Blog;