import React, { useEffect,useState} from 'react';
import Tabs from '@/components/FounderTabs/Tabs';
import TeamLeiter from '@/components/FounderTabs/Teamleiter';
import Aos from 'aos';
import HomeForm from '@/components/HomForm';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import { fetchData } from '@/apiConnection/apiService';
import InNumber from '@/components/About/CCNumber';
import AboutPromise from '@/components/About/AboutPromise';
import RequestProject from '@/components/About/RequestProject';
function About(props) {
  const [pageData, setPageContent] = useState(props.data);
  const [secData, setSecData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id, title, description,banner,video,metatitle,metadesc } = pageData;

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseSection = await fetchData('/about-section');
        setSecData(responseSection);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, []);
  console.log(secData);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
    return (
<Layout title={pageData.metatitle && pageData.metatitle} metaDescription={pageData.metadesc && pageData.metadesc}>
{ pageData.banner &&  <section>
      <div className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={`${process.env.imgpath}/banner/${pageData.banner}`} className="d-block w-100" alt={pageData.title}/>
    </div>
  </div>
</div> 
</section> }
<section className="main-section about_die" data-aoss="fade-right">
  <div className="container">
    <div className="row">
  <div className="col-lg-8 col-md-8 col-sm-12 col-12" dangerouslySetInnerHTML={{ __html: pageData.description }}>
      </div>
    </div>
  </div>
</section>

<section className="main-section about_who_we">
  <div className="container">
    <div className="row">
      {pageData.title && <div className="col-lg-8 offset-lg-1 col-md-12 col-sm-12 col-12">
       <h2 className="section-title mb-4">{pageData.title}</h2>
      </div>}
      {pageData.video &&  <div className="col-12 justify-content-end d-flex">
      <video className="about-video" height="515" src={`${process.env.imgpath}/video/${pageData.video}`} controls muted autoPlay></video>
      {/* <iframe className="about-video" height="515" src="https://www.youtube.com/embed/mCEob8Jyecw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/mCEob8Jyecw><img src=assets/images/teamwork.jpg alt=‘Your ALT Text'></a>" allowFullScreen></iframe> */}
      </div>}
    </div>
  </div>
</section>
{secData?secData.map((item,index) => (
  <React.Fragment key={index}>
  { item.order%2 ===0 ?
<section className="main-section why_we_exist">
  <div className="container">
    <div className="row">
      {item.title && 
      <div className='offset-lg-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
      <h2 className="section-title mb-4">{item.title}</h2>
      </div>
      }
      {item.image && 
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
      <img src={`${process.env.imgpath}/aboutsection/${item.image}`} className='img-fluid float-img-to-right' title={item.title}/>
      </div>
      }
      {item.description && 
      <div className="col-lg-6 col-md-12 col-sm-12 col-12" data-aoss="fade-left">
      <div dangerouslySetInnerHTML={{__html: item.description}}></div>
      </div>
      }
    </div>
    </div>
    </section>
:
<section className="main-section our_values">
  <div className="container">
    <div className="row">
    {item.title && 
      <div className='col-12'>
      <h2 className="section-title mb-4">{item.title}</h2>
      </div>
       }
      {item.description &&
      <div className="col-lg-6 col-md-12 col-sm-12 col-12 cc-left-col"  data-aoss="fade-right">
      <div dangerouslySetInnerHTML={{__html: item.description}}></div>
     </div> }
        {item.image &&
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <img src={`${process.env.imgpath}/aboutsection/${item.image}`} className='img-fluid float-left' alt={item.title}/>
      </div>
      }
    </div>
    </div>
    </section>
}
    </React.Fragment>
)):''}
    <section className="main-section meet_teams">
  <div className="container">
    <div className="row">
      <div className="col-12">
      <h2 className="section-title mb-4">Meet the team</h2>
      <div className='col-12'>
        <Tabs/>
      </div>
      </div>
    </div>
    </div>
    </section>

    <section className="main-section teamleiter">
  <div className="container">
    <div className="row">
      <div className='col-12'>
        <TeamLeiter/>
      </div>
    </div>
    </div>
    </section>
<InNumber/>
<AboutPromise/>
<RequestProject/>
<HomeForm/>
</Layout>
    );
  }

  export async function getServerSideProps() {
    try {
      // Fetch data from an API or any other data source
      const response = await fetch(`${process.env.API_URL}/about-us`);
      const data = await response.json(); // Parse the JSON content
       //console.log('hii testing tested...............................');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return {
        props: { data },
      };
    } catch (error) {
     // console.error('Error fetching data:', error);
      return {
        props: {
          data: null, // You can set a default value or handle errors as needed
        },
      };
    }
  }

export default About;