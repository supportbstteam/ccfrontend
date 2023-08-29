import Button from './Button';
import { fetchData } from "../apiConnection/apiService";
import { useState, useEffect } from 'react';
import Aos from 'aos';
function ServiceCard() {
  const [animated, setAnimate] = useState(1000);
  const [servicedata, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/homeservices'); // Replace '/data' with the API endpoint you want to fetch
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {servicedata.map((item, index) => (
        
     <div key={index} className='col-lg-3 col-md-6 col-sm-12 cust-responsive col-12'>
        <div className='card-service' data-aos="fade-up" data-aos-duration={1000*(index+1)}> 
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              {item.src_img?<img src={item.src_img?`https://teamwebdevelopers.com/charge_construct/public/images/service/${item.src_img}`:''}/>:''}
                <a href={item.ser_btn_txt}>{item.ser_btn_label}</a>
                <div className='flip-front-card-contents'>
                <h3>{item.src_title}</h3>
                <p>{item.src_des}</p>
                </div>
              </div>

              <div className="flip-card-back">
      <h4>Konzeptberatung</h4>
      <p>Sie möchten Ladeinfrastruktur errichten, sind jedoch mit dieser Thematik grundsätzlich überfordert?

Charge Construct vermittelt Ihnen das Einmaleins der Elektromobilität und berät Sie als unabhängiger Partner in der frühen Phase des Vorhabens, um von Anfang an alles richtig zu machen. Auf Basis einer Standortbegehung (auf Wunsch auch digital) werden unter Berücksichtigung der jeweiligen Anforderungen an das...</p>
   <Button title="lorem ipsum" link="#" classs='cc-transbutton text-decoration-none'/>
    </div>
              </div>
          </div>
        </div>
      </div>
       ))}
    </>
  )
}

export default ServiceCard;