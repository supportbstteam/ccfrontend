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
//console.log(subcategory);

useEffect(() => {
  if (slug) {
    async function fetchDataFromAPI() {
      try {
        const responsehomenews = await fetchData(`/blogPost/${slug}`);
        //console.log(responsehomenews);
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
       // console.log(relCat);
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
//console.log(related);
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
        <h1 className="text-white">{post_title}</h1>
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
            <SocialProfile type="share" path={`${process.env.BASE_URL}/${category && category.toLowerCase()}/${slug}`}/>
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
    <HomeForm/>
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