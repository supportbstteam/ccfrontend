import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/components/Button";
import HomeForm from "@/components/HomForm";
import Layout from "@/components/Layout";
import { fetchData } from '@/apiConnection/apiService';
import SocialProfile from "@/components/GeneralDetails/SocialProfile";
import RelatedPostGridList from "@/components/PostGrid/RelatedPostGrid";

function Blog({ mainpost, related, error }) {
  if (error) {
    return <div>Error: {error} </div>;
  }

const { id, title, metatitle, metadesc, image, content, post_date, post_author, tags, category, recommendation_blog } = mainpost && mainpost[0] || {};
//console.log(mainpost[0].title);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout title={metatitle} metaDescription={metadesc}>
      <section className="main-section pt-0">
        <div className="container-fluid p-0">
          <div className="row single-blog-row">
            <div className="offset-lg-1 offset-md-1 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
              <div className="newsroom-col" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                <h1 className="text-white">{title}</h1>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 top-post-slider" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
              <div className="podcast-post">
                {image ? <img className="img-fluid" src={image ? `${process.env.imgpath}/project/${image}` : ''} alt={title} /> : ''}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="single-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-mg-7 col-12 post-content" dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className="col-lg-5 col-mg-5 col-12 d-flex justify-content-center">
              <div className="post-btn-group">
                <Button link="/quotation" title="Entdecke Sie wie unser Team auch Ihnen helfen kann" classs="withoutbtn no-arrow kann-btn" />
                <Button link="/contact" title="Kontakt aufnahmen" classs="withoutbtn no-arrow" />
              </div>
            </div>
          </div>

          <div className="row align-items-end mt-4">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <h4>Ähnliche Themen</h4>
              <ul className="blog-tags">
                {tags && tags.map((datas, index) => (
                  <li key={index}><a href={`${process.env.BASE_URL}/${datas.link}`} className="post-tags">{datas.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
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
              <Button link={`../${category ? category.toLowerCase() : ''}`} title={`Mehr ${category && category}`} classs="withoutbtn blog-insights" />
            </div>
            {related && related.map((item, index) => (
              <RelatedPostGridList key={index} postdata={item} />
            ))}
          </div>
        </div>
      </section>

      <HomeForm />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  try {
    const responsehomenews = await fetchData(`/project/${slug}`);
    const mainpost = responsehomenews;
    const subcategory = mainpost?.post && mainpost.post.length > 0 ? mainpost.post[0].category : null;
    let related = null;

    if (subcategory) {
      const relpost = await fetchData(`/project/${subcategory}`);
      related = relpost;
    }

    return {
      props: {
        mainpost,
        related,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const projects = await fetchData(`/projects`);
    const paths = projects.map(project => ({
      params: { slug: project.slug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}

export default Blog;
