import { useEffect, useState } from 'react';
import { fetchData } from "../apiConnection/apiService";
import Button from './Button';
function BecomeTeam(){
const [servicedata, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/part-tem'); // Replace '/data' with the API endpoint you want to fetch
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
      console.log(servicedata && servicedata);
    return(
      <>
      {servicedata && servicedata.map((teams, index) => (
        <section className='main-section become-team-section py-5' style={{backgroundImage: `url('../../assets/images/career/teampartner.jpg')`}} key={index}>
        <div className='container'>
              <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12' data-aos="fade-up" data-aos-duration="1800">
                  <h2 className='section-title mb-5'>{teams.title}</h2>
     <div dangerouslySetInnerHTML={{ __html: teams.description }}></div>
          <Button title={teams.btntext} classs='no-arrow' link={teams.btnlink}/>
              </div>
              </div>
              </div>
        </section>
      ))
    }
    </>
    )
}

export default BecomeTeam;