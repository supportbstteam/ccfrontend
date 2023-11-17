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

function standortempfehlung(props) {
    const [pageData, setPageData] = useState(props.data);
    const sliderbg = {
        backgroundImage: `url('${process.env.BASE_URL}/assets/images/pages/standortemp.jpg')`,
    }
    useEffect(() => {
        Aos.init({ duration: 1700 });
    }, [])

    return (
        <Layout>
            <section className='stand-banner position-relative' style={sliderbg}>

                <div className="carousel-caption d-md-block">
                    <h1>Charge Construct-Standort Partner werden</h1>
                </div>
            </section>
            <section className="main-section text-dark p-0">
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6 col-12 stand-content">
                    <h2 className="section-title">Neukunden Gewinnen</h2>
                    <p className="section-desciption aos-init" data-aos="fade-up">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                    </p>
                </div>
                <div className="col-md-6 p-0">
                    <img src="assets/images/pages/neukunden.jpg" className='w-100'/>
                </div>
                </div>
                </div>
                </section>

                <section className="main-section text-dark p-0">
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6 p-0">
                    <img src="assets/images/pages/schnell.jpg" className='w-100'/>
                </div>
                <div className="col-md-6 col-12 stand-content">
                    <h2 className="section-title">Schnell & Unkompliziert</h2>
                    <p className="section-desciption aos-init" data-aos="fade-up">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                    </p>
                </div>
                
                </div>
                </div>
                </section>
                <section className="main-section text-dark p-0">
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6 col-12 stand-content">
                    <h2 className="section-title">Neukunden Gewinnen</h2>
                    <p className="section-desciption aos-init" data-aos="fade-up">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                    </p>
                </div>
                <div className="col-md-6 p-0">
                    <img src="assets/images/pages/immer.jpg" className='w-100'/>
                </div>
                </div>
                </div>
                </section>

                <section className="main-section bg-dark standort-partner">
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6 col-12 stand-content pt-0">
                    <h2 className="section-title">Charge Construct Standort Partner werden</h2>
                </div>
                <div className="col-md-6">
                <form className='stand-forms'>
  <div className="form-group">
    <input type="text" id="ihrname" placeholder="Ihr Name *"/>
  </div>
  <div className="form-group">
    <input type="text" id="telefon" placeholder="Telefonnummer*"/>
  </div>
  <div className="form-group">
    <input type="text" id="email" placeholder="E-Mail*"/>
  </div>
  <div className="form-group">
    <input type="text" id="firmenname" placeholder="Firmenname"/>
  </div>
  <div className="form-group">
    <input type="text" id="firmenname" placeholder="Firmenname"/>
  </div>
  <div className="form-group">
    <select id="funktion">
      <option>Funktion des Kontakes</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <div className="form-group">
    <select id="artdes">
      <option>Art des Standortes</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <div className="form-group">
    <select id="adressedes">
      <option>Adresse des Grundstücks</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <div className="form-group">
    <select id="zusatzliche">
      <option>Zusätzliche Anmerkungen</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <button type="submit" className="main-btn border-6 cc-button">Senden</button>
</form>
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

export default standortempfehlung;