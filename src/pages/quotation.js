import { useEffect } from 'react';
import Aos from 'aos';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
const sliderbg = {
    backgroundImage: `url('../../assets/images/quotation/quotation-banner.jpg')`,
}
function quotationContent(){
    useEffect(()=>{
        Aos.init({duration: 1700});
    },[])
    useEffect( () => { 
        document.querySelector("body").removeAttribute("class", '');
        document.querySelector("body").classList.add("quotation-template")
    });

    return(
        <Layout>
        <section className='main-section d-flex align-items-center quotation-banner ' style={sliderbg}>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-7 col-md-7 col-12'>
      <div className="banner-content" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1000">
        <h1>Power Readiness Check</h1>
        <p>Jeder Standort ist unterschiedlich! Um für Sie und hr Vorhaben ein belastbares Angebot für die Errichtung der Ladeinfrastruktur erstellen zu können, ist eine Standortbegehung notwendig. Deshalb haben wir den Power Readiness Check entwickelt!</p>
        <Button link="#" title="Jetzt bewerben"/>
        <p>Die Kosten für den Power Readiness Check werden Ihnen bei einer Beauftragung für die Realisierung vollständig gutgeschrieben!</p>
        </div>
        </div>
        </div>

  </div>
  </section>

  <section className="main-section about_die" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1000">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 col-md-10 col-12">
        <h4>Innerhalb des Power Readiness Checks analysieren wir Ihren Standort
hinsichtlich der Errichtung von Ladeinfrastruktur. Vor Ort verschaffen wir uns
gemeinsam mit Ihnen einen Überblick über die Begebenheiten, nehmen hierbei
alle relevanten Daten und Informationen auf und beaten im Hinblick auf die
optimale Umsetzung des Vorhabens unter Beachtung 
der Aspekte Kosten und Nutzen.</h4>
      </div>
    </div>
  </div>
</section>

<section className='main-section folgende-section'>
<div className="container">
    <div className="row">
        <div className='12'>
        <h2 className='section-title text-dark mb-4' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1000">Folgende Leistungen sind im Power Readiness Check enthalten:</h2>
        <ul className='services-list'>
            <li data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1000">An- und Abreise zu Ihrem Standort</li>
            <li data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200">Durchführung Standortbegehung durch einen unserer Experten</li>
            <li data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">Dokumentation der Standortbegehung inkl. einer Konzeptplanung</li>
            <li data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1600">Passgenaues Angebot</li>
        </ul>
        </div>
        </div>
        </div>
</section>

<section className='main-section versprechen'>
    <div className='container'>
        <div className='row quotations' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1000">
            <div className="col-lg-10 col-md-10 offset-lg-1 offset-md-1 col-12 text-center form-header">
                <p>Wir geben Ihnen somit alles in die Hand, um in der frühen Phase des Projektes eine fundierte Entscheidung treffen zu können und alles richtig zu machen.
Fordern Sie heute noch Ihr Angebot für den Power Readiness Check an, indem Sie das nachfolgende Formular ausfüllen!</p>
            </div>

            {/* <div className='col-lg-10 col-md-10 offset-lg-1 offset-md-1 col-12'>
                <div className='quotation-form'>
                    <div className='quotation-form-titles text-dark text-center'>
                    <h3>Angebotsanfrage</h3>
                        <p>Bitte füllen Sie nachstehendes Formular aus.
Sie erhalten umgehend ein freibleibendes Richtangebot.</p>
                    </div>
                    <form>
                       
                    </form>
                </div>
            </div> */}
        </div>
    </div>
</section>

</Layout>
    )

}

export default quotationContent;