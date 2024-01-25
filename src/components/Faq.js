import Aos from "aos";
import { useEffect, useState } from 'react';
import { fetchData } from "../apiConnection/apiService";
function FaqList() {
  const [servicedata, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggling, setToggling] = useState(false);
  const [error, setError] = useState(null);
  const [activeFaq, setactiveFaq] = useState(null);

  // function toggleOpened(ids) {
  //   console.log(ids);
  //   setactiveFaq(ids);
  //   setToggling(!toggling);
  //   //console.log(activeFaq);
  // }

  function toggleOpened(ids) {
    setactiveFaq((prevFaq) => (prevFaq === ids ? null : ids));
  }

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/faq'); // Replace '/data' with the API endpoint you want to fetch
        setData(responseService);
        setLoading(false);
        //Aos.init({duration: 1700});
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, []);

  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      {/* {servicedata ? <section className='main-section faq-section py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='section-title text-dark mb-5 text-center' data-aos="fade-up" data-aos-duration="1500">FAQ</h2>
            </div>
            <div className='col-lg-8 col-md-8 col-sm-12 col-12 offset-lg-2 offset-md-2 '>


              <div className="accordion" id="faqlists">
                {servicedata && servicedata.map((que, index) => (
                  <div className="accordion-item" data-aos="fade-up" data-aos-duration="1500" onClick={() => toggleOpened(que.id)} key={index}>
                    <h2 className="accordion-header" id="headingOne">
                      <button className={"accordion-button " + (que.id === activeFaq && toggling ? '' : 'collapsed')} type="button" data-bs-toggle="collapse" data-bs-target={`#` + que.id} aria-expanded={activeFaq ? 'true' : 'false'} aria-controls={`#` + que.id}>
                        <span>{que.title}</span>
                      </button>
                    </h2>
                    <div id={que.id} className={que.id === activeFaq && toggling ? 'show' : '' + `accordion-collapse collapse`} aria-labelledby="headingOne" data-bs-parent="#faqlists">
                      <div className="accordion-body">
                        <div dangerouslySetInnerHTML={{ __html: que.description }}></div>
                      </div>
                    </div>
                  </div>
                ))
                }</div>
            </div>
          </div>
        </div>
      </section> : ''} */}
     {servicedata ? (
        <section className='main-section faq-section py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h2 className='section-title text-dark mb-5 text-center' data-aos="fade-up" data-aos-duration="1500">FAQ</h2>
              </div>
              <div className='col-lg-8 col-md-8 col-sm-12 col-12 offset-lg-2 offset-md-2 '>
                <div className="accordion" id="faqlists">
                  {servicedata.map((que) => (
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      onClick={() => toggleOpened(que.id)}
                      key={que.id}
                    >
                      <h2 className="accordion-header" id={`heading-${que.id}`}>
                        <button
                          className={`accordion-button ${que.id === activeFaq ? '' : 'collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${que.id}`}
                          aria-expanded={que.id === activeFaq ? 'true' : 'false'}
                          aria-controls={que.id}
                        >
                          <span>{que.title}</span>
                        </button>
                      </h2>
                      <div
                        id={que.id}
                        className={`accordion-collapse collapse ${que.id === activeFaq ? 'show' : ''}`}
                        aria-labelledby={`heading-${que.id}`}
                        data-bs-parent="#faqlists"
                      >
                        <div className="accordion-body">
                          <div dangerouslySetInnerHTML={{ __html: que.description }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : ''}
    </>
  )
}

export default FaqList;