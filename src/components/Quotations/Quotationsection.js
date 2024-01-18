import { useEffect, useState } from 'react';
import Aos from 'aos';
import { fetchData } from "../../apiConnection/apiService";
function QuotationSection() {
  const [secData, setSecData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Aos = require('aos');
      Aos.init({ duration: 1700 });
    }
  }, []);
  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseSection = await fetchData('/page-section');
        setSecData(responseSection);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, []);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <>
      {/* {secData.map( (data) => (
      <div className="col-lg-10 col-md-10 col-12">
        <h4> <div dangerouslySetInnerHTML={{ __html: data.description }} /></h4>
      </div>
      ))} */}

      {secData.map((data) => {
        if (data.order_no === 1) {
          return (
            <section key={data.id} className="section-for-order-1">
              <section className="main-section about_die" data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="1000">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-md-10 col-12">
                      <h4> <div dangerouslySetInnerHTML={{ __html: data.description }} /></h4>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          );
        } else if (data.order_no === 2) {
          return (
            <section key={data.id} className='main-section folgende-section'>
              <div className="container">
                <div className="row">
                  <div className='12'>
                    <h2> <div dangerouslySetInnerHTML={{ __html: data.description }} /></h2>
                    {/* <h2 className='section-title text-dark mb-4' data-aos="fade-up" data-aos-easing="linear"
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
                    </ul> */}
                  </div>
                </div>
              </div>
            </section>
          );
        } else if (data.order_no === 3) {
          return (
            <section key={data.id} className='main-section versprechen'>
              <div className='container'>
                <div className='row quotations' data-aos="fade-up" data-aos-easing="linear"
                  data-aos-duration="1000">
                  <div className="col-lg-10 col-md-10 offset-lg-1 offset-md-1 col-12 text-center form-header">
                  <p> <div dangerouslySetInnerHTML={{ __html: data.description }} /></p>
                  </div>
                </div>
              </div>
            </section>
          )
        }
        return null;
      })}
    </>
  )

}

export default QuotationSection;