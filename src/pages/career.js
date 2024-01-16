import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Aos from 'aos';
import ImageGallery from '@/components/GalleryView';
import VacancyPost from '@/components/Vacancy/vacancyPost';
import Certifications from '@/components/GeneralDetails/Certifications';
import FaqList from '@/components/Faq';
import Layout from '@/components/Layout';
import AboutHR from '@/components/About/AboutHr';
import Benefits from '@/components/Benefits'
import SocialProfile from '@/components/GeneralDetails/SocialProfile';
import BecomeTeam from '@/components/BecomeTeam';

function careerContent(props){
  const [pageData, setPageData] = useState(props.data);
  const sliderbg = {
    backgroundImage: `url('${process.env.imgpath}/career/${pageData.image}')`,
}
    useEffect(()=>{
        Aos.init({duration: 1700});
    },[])

    return(
        <Layout title="About us" metaDescription="Wir errichten die Ladeinfrastruktur von und für morgen. Steckerfertig, ganzheitlich und aus einer Hand.">
         <section className='career-banner position-relative' style={sliderbg}>
      
        <div className="carousel-caption d-md-block"  data-aos="fade-up">
        <h1 data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1000">{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.description}}></div>
        <Button link={pageData.btnlink} title={pageData.btntext} data-aos="fade-up"  data-aos-easing="linear"
     data-aos-duration="1500"/>
  </div>
  </section>

  <section className='career-subbanner-content bg-black'>
  <div className='container py-5'>
    <div className='row align-items-end'>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12 company-award p-0'>
            <Certifications/>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12 socials-content'>
        <h5>Finde uns auf</h5>
        <SocialProfile type='follow'/>
        </div>
    </div>
  </div>
  </section>

  <section  data-aos="fade-up"  data-aos-easing="ease-in-sine">
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-center py-5 career-post-detail'>
<h2 className=' py-5'>Offene Stellen</h2>
            </div>
        </div>
    </div>
  </section>

  <section className='vacancies_section pb-5'>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-11 col-md-11 col-sm-12 col-12 bg-white vacancy-cols'>
           {/* <VacancyPost/> */}
            </div>
        </div>
    </div>
  </section>

  <section className='main-section emobili-section'>
    <div className='container'>
        <div className='row'>
            <div className='col-12' data-aos="fade-up" data-aos-duration="1200">
            <h2 className='section-title text-dark mb-5'>Volle Energie fur die E-Mobilitat</h2>
            </div>
        </div>
    </div>
    <div className='container-fluid'>
        <ImageGallery />
    </div>
  </section>  
<Benefits/>
  <section className='position-relative warum-section bg-moredark d-flex align-items-end'>
  <video autoPlay loop muted className='w-100'>
		<source src="../../assets/images/teamscc.mp4" type='video/mp4' />
	  </video>
      <div className='container career-video-content'>
        <div className='row'>
            <div className='col-12' data-aos="fade-up" data-aos-duration="1000">
                <h2 className='mb-4 text-white'>Warum bist DU bei Charge Construct</h2>
                <Button link="#" title="Ganzes Video anschauen"/>
            </div>
        </div>
    </div>
  </section>

  <AboutHR/>

  <section className='main-section faq-section py-5'>
    <div className='container'>
        <div className='row'>
        <div className='col-12'>
            <h2 className='section-title text-dark mb-5 text-center' data-aos="fade-up" data-aos-duration="1500">FAQ</h2>
        </div>
        
        <div className='col-lg-8 col-md-8 col-sm-12 col-12 offset-lg-2 offset-md-2 '>
        <div className="accordion" id="faqlists">
       <FaqList />
            </div>
            </div>
        </div>
    </div>
  </section>

  <BecomeTeam/>
  </Layout>
    );
}

export async function getServerSideProps() {
    try {
      // Fetch data from an API or any other data source
      const response = await fetch('https://teamwebdevelopers.com/charge_construct/api/career');
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

export default careerContent;