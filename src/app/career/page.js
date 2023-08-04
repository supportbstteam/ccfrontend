"use client"
import { useEffect } from 'react';
import Button from '@/components/Button';
import Aos from 'aos';
import ImageGallery from '@/components/GalleryView';
import VacancyPost from '@/components/Vacancy/vacancyPost';
import FaqList from '@/components/Faq';
const sliderbg = {
    backgroundImage: `url('../../assets/images/career/banner.jpg')`,
}

function careerContent(){

    useEffect(()=>{
        Aos.init({duration: 1700});
    },[])

    const Faqs = [
        {
            id: "1",
            question: "Was macht das Arbeiten bei uns so besonders?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: "2",
            question: "Was mache ich, wenn ich nicht innerhalb von einer Woche von euch eine Rückmeldung erhalte?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: "3",
            question: "Arbeitet ihr Remote oder im Office?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: "4",
            question: "Kann ich mich auch initiativ bewerben?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: "5",
            question: "Kann ich mich auch auf zwei Stellen gleichzeitig bewerben?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

    useEffect( () => { 
        document.querySelector("body").removeAttribute("class", '');
        document.querySelector("body").classList.add("career-template")
    });
    return(
        <>
         <section className='career-banner position-relative' style={sliderbg}>
      
        <div className="carousel-caption d-md-block"  data-aos="fade-up">
        <h1 data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1000">Bewege mit uns die Zukunft bei<br/>Charge Construct!</h1>
        <p data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200">Charge Construct ist mehr als (d)ein Arbeitgeber. Wir sind ein Team. Mehr noch: Wir sind eine<br/>
        Familie. Wir möchten unseren Beitrag zum Wandel hin zu einer elektrischen und nachhaltigen<br/>
        Mobilität leisten. Dabei gestalten wir die Zukunft der E-Mobilität konsequent, nachhaltig und<br/>
        ganzheitlich aktiv mit.<br/>
        <br/>
        Bist Du dabei?</p>
        <Button link="#" title="Jetzt bewerben" data-aos="fade-up"  data-aos-easing="linear"
     data-aos-duration="1500"/>
  </div>
  </section>

  <section className='career-subbanner-content bg-black'>
  <div className='container py-5'>
    <div className='row align-items-end'>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12 company-award p-0'>
<img src='../../assets/images/top-company.png' data-aos="zoom-in" className="img-fluid"/>

<img src='../../assets/images/2022.png' data-aos="zoom-in" className="img-fluid"/>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12 socials-content'>
        <h5>Finde uns auf</h5>
        <ul className="social-follow">
                <li data-aos="zoom-in" data-aos-duration="1700"><a href="#"><img src='../../assets/images/li.png'/><span>Linkedin</span></a></li>
                <li data-aos="zoom-in" data-aos-duration="1800"><a href="#"><img src='../../assets/images/xa.png'/><span>Xing</span></a></li>
                <li data-aos="zoom-in" data-aos-duration="1900"><a href="#"><img src='../../assets/images/fb.png'/><span>Facebook</span></a></li>
                <li data-aos="zoom-in" data-aos-duration="2000"><a href="#"><img src='../../assets/images/in.png'/><span>Instagram</span></a></li>
            </ul>
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
           <VacancyPost/>
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

  <section className='main-section unsere-section'>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <h2 className='section-title text-dark mb-5' data-aos="fade-up" data-aos-duration="1000">Unsere Benefits</h2>
            </div>
            <div className='col-3' data-aos="zoom-in" data-aos-duration="1000">
                <div className='benefit-box'>
                    <h5>Lorem ipsum dolre firm solace<br/>
                    lorem ipsum dolre firm solace</h5>
                </div>
            </div>

            <div className='col-3' data-aos="zoom-in" data-aos-duration="1200">
                <div className='benefit-box'>
                    <h5>Lorem ipsum dolre firm solace<br/>
                    lorem ipsum dolre firm solace</h5>
                </div>
            </div>

            <div className='col-3' data-aos="zoom-in" data-aos-duration="1400">
                <div className='benefit-box'>
                    <h5>Lorem ipsum dolre firm solace<br/>
                    lorem ipsum dolre firm solace</h5>
                </div>
            </div>

            <div className='col-3' data-aos="zoom-in" data-aos-duration="1600">
                <div className='benefit-box'>
                    <h5>Lorem ipsum dolre firm solace<br/>
                    lorem ipsum dolre firm solace</h5>
                </div>
            </div>

            <div className='col-3' data-aos="zoom-in" data-aos-duration="1800">
                <div className='benefit-box'>
                    <h5>Lorem ipsum dolre firm solace<br/>
                    lorem ipsum dolre firm solace</h5>
                </div>
            </div>

            <div className='col-3' data-aos="zoom-in" data-aos-duration="2000">
                <div className='benefit-box'>
                    <h5>Lorem ipsum dolre firm solace<br/>
                    lorem ipsum dolre firm solace</h5>
                </div>
            </div>

            <div className='col-3' data-aos="zoom-in" data-aos-duration="2200">
                <div className='benefit-box'>
                    <h5>Lorem ipsum dolre firm solace<br/>
                    lorem ipsum dolre firm solace</h5>
                </div>
            </div>

            <div className='col-3' data-aos="zoom-in" data-aos-duration="2400">
                <div className='benefit-box'>
                    <h5>Lorem ipsum dolre firm solace<br/>
                    lorem ipsum dolre firm solace</h5>
                </div>
            </div>
        </div>
    </div>
  </section>

  <section className='position-relative warum-section bg-moredark d-flex align-items-center'>
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

  <section className='main-section deine-section py-5'>
    <div className='container'>
        <div className='row justify-content-between'>
            <div className='col-lg-8 col-md-8 col-sm-12 col-12'>
                <div className='contact-partner'>
                <h2 className='text-white mb-4' data-aos="fade-left" data-aos-duration="2100">Deine Ansprech Partner im HR</h2>
                <p className='text-white' data-aos="fade-left" data-aos-duration="2500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.<br/><br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-12 text-center' data-aos="fade-right" data-aos-duration="2500">
             <img src="/assets/images/hr.png" className='w-50' data-aos="zoom-in" data-aos-duration="1500"/>
             <h5 data-aos="zoom-in" data-aos-duration="1500">Alexander Hötzel </h5>
             <p className='text-center' data-aos="zoom-in" data-aos-duration="1500">HR Manager</p>
            </div>
        </div>
    </div>
  </section>

  <section className='main-section faq-section py-5'>
    <div className='container'>
        <div className='row'>
        <div className='col-12'>
            <h2 className='section-title text-dark mb-5 text-center' data-aos="fade-up" data-aos-duration="1500">FAQ</h2>
        </div>
        
        <div className='col-lg-8 col-md-8 col-sm-12 col-12 offset-lg-2 offset-md-2 '>
        <div className="accordion" id="faqlists">
        {Faqs.map((faq, index) =>
       <FaqList faq={faq} ids={index} key={index}/>
        )}
            </div>
            </div>
        </div>
    </div>
  </section>

  <section className='main-section become-team-section py-5' style={{backgroundImage: `url('../../assets/images/career/teampartner.jpg')`}}>
  <div className='container'>
        <div className='row'>
        <div className='col-6' data-aos="fade-up" data-aos-duration="1800">
            <h2 className='section-title mb-5'>Möchtest Du ein Teil unseres
Teams werden?</h2>
<p>Wir suchen motivierte und talentierte Persönlichkeiten, die unsere Vision einer flächendeckenden Ladeinfrastruktur teilen. Bist du bereit, gemeinsam mit uns die Herausforderungen auf diesem Weg zu meistern?
    <br/> <br/>Wir freuen uns auf deine Bewerbung!</p>
    <Button title="E-Mail schreiben" classs='no-arrow' link="#"/>
        </div>
        </div>
        </div>
  </section>
  </>
    );
}

export default careerContent;