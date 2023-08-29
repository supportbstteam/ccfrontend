import Button from "./Button";
import { fetchData } from "@/apiConnection/apiService";
import { useState, useEffect } from 'react';
import Aos from 'aos';
function KundengruppenCard(){
  const [animated, setAnimate] = useState(1000);
    const [kundengruppendata, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/kundengruppen'); // Replace '/data' with the API endpoint you want to fetch
            setData(responseService);
            setLoading(false);
            Aos.init({duration: 1700});
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


    return(
        <> {kundengruppendata.map((item, index) => (
 <div key={index} className='col-lg-4 col-md-4 col-sm-6' data-aos="fade-up"
 data-aos-anchor-placement="top-bottom" data-aos-duration={1000*(index+1)}>
  <div className="kundengrup-card">
  
 

  <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              {item.kun_img?<img src={item.kun_img?`assets/images/kundengruppen/${item.kun_img}`:''}/>:''}
                <div className='flip-front-card-contents'>
                {item.kun_title?<h3>{item.kun_title}</h3>:''}
                <p>{item.src_des}</p>
                </div>
              </div>

              <div className="flip-card-back">
              {item.kun_title?<h4>{item.kun_title}</h4>:''}
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
export default KundengruppenCard;