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
 // console.log(props.data);
  const [pageData, setPageContent] = useState(props.data);
  const [secData, setSecData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id, title, description,banner,video,metatitle,metadesc } = pageData;
  //const [isHovered, setIsHovered] = useState(false);
  
  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseOut = () => {
  //   setIsHovered(false);
  // };

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
      <Layout title="About us" metaDescription="Wir errichten die Ladeinfrastruktur von und für morgen. Steckerfertig, ganzheitlich und aus einer Hand.">
    <section>
      <div className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={`https://teamwebdevelopers.com/charge_construct/public/images/banner/${banner}`} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div> 
</section>
<section className="main-section about_die" data-aoss="fade-right">
  <div className="container">
    <div className="row">
  <div className="col-lg-8 col-md-8 col-sm-12 col-12" dangerouslySetInnerHTML={{ __html: description }}>
      </div>
    </div>
  </div>
</section>

<section className="main-section about_who_we">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-1 col-md-12 col-sm-12 col-12">
       <h2 className="section-title mb-4">{title}</h2>
      </div>
      <div className="col-12 justify-content-end d-flex">
      <iframe className="about-video" height="515" src="https://www.youtube.com/embed/mCEob8Jyecw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  </div>
</section>
{secData?secData.map((item,index) => (
  <React.Fragment key={index}>
  { item.order%2 ===0 ?
<section className="main-section why_we_exist">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
      <img src={`https://teamwebdevelopers.com/charge_construct/public/images/aboutsection/${item.image}`} className='img-fluid float-img-to-right'/>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-12" data-aoss="fade-left">
      <h2 className="section-title mb-4">{item.title}</h2>
      <div dangerouslySetInnerHTML={{__html: item.description}}></div>
      </div>
    </div>
    </div>
    </section>
:
<section className="main-section our_values">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 col-12 cc-left-col"  data-aoss="fade-right">
      <h2 className="section-title mb-4">{item.title}</h2>
      <div dangerouslySetInnerHTML={{__html: item.description}}></div>
     </div>

      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <img src={`https://teamwebdevelopers.com/charge_construct/public/images/aboutsection/${item.image}`} className='img-fluid float-left'/>
      </div>
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
<section className="main-section">
    <div className="container">
    <div className="row">
      <div className='col-12'>
     <h2 data-aoss="fade-up" className='section-title text-dark'>Ihr Draht zu uns</h2>
    <p className='text-dark section-desciption'>Sie haben individuelle Anforderungen an die Errichtung der Ladeinfrastruktur? Kein Problem! Wir helfen Ihnen weiter und erarbeiten ein für Sie passendes Konzept.
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
    );
  }

  export async function getServerSideProps() {
    try {
      // Fetch data from an API or any other data source
      const response = await fetch('https://teamwebdevelopers.com/charge_construct/api/about-us');
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