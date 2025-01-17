import Aos from 'aos';
import { fetchData } from "../../apiConnection/apiService";
import { useState, useEffect } from 'react';
import AdvisoryBoard from './AdvisoryBoard';
function TeamLeiter(){

    const [servicedata, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchDataFromAPI() {
        try {
          const responseService = await fetchData('/team/team_leader'); // Replace '/data' with the API endpoint you want to fetch
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

    return(
        <div className='container teams-boards-member'>
            <div className='row'>
            <h3 className='text-dark 121121'>Teamleiter</h3>
                {servicedata.map((tab, i) =>
                 <div className='col-lg-3 col-md-6 col-sm-6 col-6 text-vs-center mb-5 px-0 member-col' data-aos="fade-up" data-aos-duration={1000*(i+2)} key={i}>
        {tab.image && <img src={`${process.env.imgpath}/team/${tab.image}`} alt={tab.name} className='img-fluid border-6 mb-3'/> }
                   { tab.name && <h5>{tab.name}</h5> }
                  {tab.profession &&  <h6>{tab.profession}</h6> }
                   </div>
                )}
                
            </div>
            <AdvisoryBoard/>
            </div>
    )
}

export default TeamLeiter;