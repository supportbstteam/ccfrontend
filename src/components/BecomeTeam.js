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
    return(
      <>
      {servicedata && servicedata.map((teams, index) => (
        <section className='main-section become-team-section py-5' style={{backgroundImage: `url('${process.env.imgpath}/partteam/${teams.banner}')`}} key={index}>
        <div className='container'>
              <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12' data-aos="fade-up" data-aos-duration="1800">
              {teams.title && <h2 className='section-title mb-5'>{teams.title}</h2>}
     {teams.description && <div dangerouslySetInnerHTML={{ __html: teams.description }}></div>}
         {teams.btnlink && 
         
        //  <Button title={teams.btntext} classs='no-arrow' link={teams.btnlink}/>

        <a href="mailto:karriere@chargeconstruct.de" target='_blank' title={teams.btntext} 
   data-aos="fade-up" lasss='no-arrow' className='custom_button main-btn border-6 cc-button cc-transbutton no-arrow' data-aos-easing="linear" data-aos-duration="1500">
  {teams.btntext}
</a>
         
         
         }
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