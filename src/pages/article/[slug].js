import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/components/Button";
import GridPostList from "@/components/PostGrid/PostGrid";
import HomeForm from "@/components/HomForm";
import Layout from "@/components/Layout";
import { useRouter } from 'next/router';
import { fetchData } from '@/apiConnection/apiService';
function Blog() {
  const router = useRouter();
  const {slug} = router.query;
const [relatedpost, setmainpost] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [related, setrelated] = useState(null);
const subcategory = relatedpost?.post && relatedpost.post.length > 0 ? relatedpost.post[0].category : null;
useEffect(() => {
  if (slug) {
    async function fetchDataFromAPI() {
      try {
        const responsehomenews = await fetchData(`/blogPost/${slug}`);
        console.log(responsehomenews);
        setmainpost(responsehomenews);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }
    async function fetchDataAPI() {
      if(relatedpost.post && relatedpost.post.length > 0) {
        const relCat = relatedpost.post[0].category;
        console.log(relCat);
        try {
          const relpost = await fetchData(`/category-blog/${subcategory}`);
          setrelated(relpost);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
    }
    fetchDataAPI();
}, [slug, subcategory]);
//   console.log('this is the list of value '+relatedpost.category[0].name);
  const { id, post_title,metatitle, metadesc, banner_img, post_content, post_date, post_author, tags, category, recommendation_blog } = relatedpost.post ? relatedpost.post[0] : {};

    var settings = {
        dots: false, // Show dots navigation
        infinite: true, // Loop the carousel
        speed: 500, // Transition speed in milliseconds
        autoplay: true, // Enable autoplay
        autoplaySpeed: 6000, // Autoplay interval in milliseconds
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Layout title={metatitle} metaDescription={metadesc}>
        <section className="main-section pt-0">
            <div className="container-fluid p-0">
                <div className="row single-blog-row">
                    <div className="offset-lg-1 offset-md-1 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                    <div className="newsroom-col" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1000">
      
         {/* <div className="post-category">
            {relatedpost['category'].map((datas) =>
            (<span key={datas.id}>{datas.name}</span>))
            } - {post_date}
            </div> */}
        <h4 className="text-white">{post_title}</h4>
            </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12 top-post-slider" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1000">
                   <div className="podcast-post">
                   {banner_img?<img className="img-fluid" src={banner_img?`https://teamwebdevelopers.com/charge_construct/public/images/blogPost/${banner_img}`:''}/>:''}
                   </div>
                    </div>
                </div>
            </div>
        </section>
    
    <section className="single-post">
    <div className="container">
        <div className="row">
            <div className="col-lg-7 col-mg-7 col-12 post-content" dangerouslySetInnerHTML={{ __html: post_content }}></div>
            <div className="col-lg-5 col-mg-5 col-12 d-flex justify-content-center">
                <div className="post-btn-group">
            <Button link="/quotation" title="Entdecke Sie wie unser Team auch Ihnen helfen kann" classs="withoutbtn no-arrow kann-btn"/>
            <Button link="/contact" title="Kontakt aufnahmen" classs="withoutbtn no-arrow"/>
            </div>
            </div>
        </div>
    
        <div className="row align-items-end mt-4">
            <div className="col-lg-7 col-md-7 col-sm-12">
                <h4>Ähnliche Themen</h4>
                <ul className="blog-tags">
                {relatedpost.tags && relatedpost.tags.map((datas, index) =>
            (<li key={index}><a href={`${process.env.BASE_URL}/${datas.link}`} className="post-tags">{datas.name}</a></li>))
                }
                </ul>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
                <ul className="share-blogs">
                <li><h5>Share</h5></li>
                <li>
                  
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.BASE_URL}/${category&&category.toLowerCase()}/${slug}`} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/></svg>
                  </a></li>
                <li>
                <a href={`https://www.facebook.com/sharer.php?u=${process.env.BASE_URL}/${category&&category.toLowerCase()}/${slug}/`} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="33px" height="33px">    <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"/></svg>
                  </a></li>
                <li>
                <a href={`https://www.twitter.com/share?url=${process.env.BASE_URL}/${category&&category.toLowerCase()}/${slug}`} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a></li></ul>
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
                <Button link={`../${category?category.toLowerCase():''}`} title={`Mehr ${category&&category}`} classs="withoutbtn blog-insights"/>
            </div>
            { related && related.map((item, index) => (
            <GridPostList key={index} postdata={item}/>
            ))}   
          </div>
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

// export async function getServerSideProps(context) {
//   var {slug} = context.query;
//   return {
//     props: {slug}
//   }
// }