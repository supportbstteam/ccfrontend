import { useState, useEffect } from 'react';
import Aos from "aos";
import { fetchData } from "../../apiConnection/apiService";
function AboutHR(){
  const [AboutHr, setAboutHR] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/prtner-hr');
            setAboutHR(responseService);
          } catch (error) {
            setError(error);
            setLoading(false);
          } 
        }
        fetchDataFromAPI();
      }, []);

      useEffect(()=>{
        Aos.init();
    },[]);

    return(
        <section className='main-section deine-section py-5'>
    <div className='container'>
        <div className='row justify-content-between'>
          {AboutHr?(
            <>
            <div className='col-lg-8 col-md-8 col-sm-12 col-12'>
            <div className='contact-partner'>
            {AboutHr.title && <h2 className='text-white mb-4' data-aos="fade-left" data-aos-duration="2100">{AboutHr.title}</h2>}
           {AboutHr.description && <p className='text-white' data-aos="fade-left" data-aos-duration="2500" dangerouslySetInnerHTML={{ __html: AboutHr.description }}></p>}
            </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 col-12 text-center' data-aos="fade-right" data-aos-duration="2500">
        {AboutHr.image && <img src={`${process.env.imgpath}/partner/${AboutHr.image}`} alt={`${AboutHr.title}`} className='w-50' data-aos="zoom-in" data-aos-duration="1500"/> }
        {AboutHr.name && <h5 data-aos="zoom-in" data-aos-duration="1500">{AboutHr.name}</h5>}
        {AboutHr.profession && <p className='text-center' data-aos="zoom-in" data-aos-duration="1500">{AboutHr.profession}</p>}
        </div>
        </>
          ):''}
            
        </div>
    </div>
  </section>
    )
}

export default AboutHR