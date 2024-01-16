import { useEffect, useState } from 'react';
import { fetchData } from "../apiConnection/apiService";
function Benefits(){
const [servicedata, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/unsere-benefits'); // Replace '/data' with the API endpoint you want to fetch
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

    return(
        <section className='main-section unsere-section'>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <h2 className='section-title text-dark mb-5' data-aos="fade-up" data-aos-duration="1000">Unsere Benefits</h2>
            </div>
            {servicedata && servicedata.map((item, index) => (  
            <div className='col-lg-4 col-md-4 col-6 benefit-col' data-aos="zoom-in" data-aos-duration="1000" key={index}>
                <div className='benefit-box'>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                </div>
            </div>
            ))
            }

        </div>
    </div>
  </section>
    )
}
export default Benefits;