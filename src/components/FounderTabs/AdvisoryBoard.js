import { useState,useEffect } from 'react';
import aos from 'aos';
import { fetchData } from '@/apiConnection/apiService';
function AdvisoryBoard(){

    const [board, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchDataFromAPI() {
        try {
          const responseService = await fetchData('/team/advisory_board'); // Replace '/data' with the API endpoint you want to fetch
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
        <div className='row'>
        <h3 className='text-dark'>Berater</h3>
            {board.map((tab, i) =>
             <div className='col-lg-3 col-md-6 col-sm-6 col-6 text-vs-center mb-5 px-0 member-col' data-aos="fade-up" data-aos-duration={1300*(i+2)} key={i}>
    { tab.image && <img src={`${process.env.imgpath}/team/${tab.image}`} alt={tab.name} className='img-fluid border-6 mb-3'/> }
               {tab.name &&  <h5>{tab.name}</h5> }
                {tab.profession && <h6>{tab.profession}</h6>}
                {/* <span className="follow_linked"><a href={tab.linkedin_profile}><img src="../../assets/images/linkedin.png" className='img-fluid'/></a></span> */}
                </div>
            )}
            
        </div>
    )
}

export default AdvisoryBoard;