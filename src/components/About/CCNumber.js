import React,{ useEffect,useState } from 'react';
import { fetchData } from '@/apiConnection/apiService';
function InNumber(){
  const [CCNum,setNumbers] = useState(0);
  const [member,setMember] = useState(0);
  const [employee,setEmployee] = useState(0);
  const [project,setProject] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const ccnumbers = await fetchData('/number'); // Replace '/data' with the API endpoint you want to fetch
        setNumbers(ccnumbers);
        setLoading(false);
        console.log(CCNum?CCNum:'');
        //Aos.init({duration: 1700});
      } catch (error) {
        setError(error);
        setLoading(true);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (employee < 100) {
        setEmployee((prevEmployee) => prevEmployee + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [employee]);

  
    return(
        <section className="main-section charge_zahlen">
  <div className="container">
    <div className="row">
      <div className="col-12">
      <h2 className="section-title mb-4">Charge Construct in Zahlen</h2>
      </div>

      {CCNum?CCNum.map((item, index) => (
         <React.Fragment key={index}>
         {item.order == 1?
      <div className='col-lg-4 col-md-4 col-12 col-counter'>
        <div className='counter-box'>
          <h4>{item.number}</h4>
          <p>{item.title}</p>
          <div className='added_details'>
          <React.Fragment dangerouslySetInnerHTML={{ __html: item.description }}></React.Fragment>
        </div>
        </div>
      </div>
        :''}
        </React.Fragment>
      )):''}

{CCNum?CCNum.map((item, index) => (
         <React.Fragment key={index}>
         {item.order == 2?
      <div className='col-lg-4 col-md-4 col-12 col-counter'>
      <div className='counter-box'>
          <h4>{item.number}</h4>
          <p>{item.title}</p>
          <div className='added_details'>
          <React.Fragment dangerouslySetInnerHTML={{ __html: item.description }}></React.Fragment>
        </div>
        </div>
      </div>
        :''}
        </React.Fragment>
      )):''}


{CCNum?CCNum.map((item, index) => (
         <React.Fragment key={index}>
         {item.order == 3?
      <div className='col-lg-4 col-md-4 col-12 col-counter'>
      <div className='counter-box'>
      <h4>{item.number}</h4>
          <p>{item.title}</p>
          <div className='added_details'>
          <React.Fragment dangerouslySetInnerHTML={{ __html: item.description }}></React.Fragment>
        </div>
        </div>
      </div>
      :''}
        </React.Fragment>
      )):''}


{CCNum?CCNum.map((item, index) => (
         <React.Fragment key={index}>
         {item.order == 4?
      <div className='col-12'>
        <div className='stand_in'>
        <h4>{item.number}</h4>
          <p>{item.title}</p>
          <div className='added_details'>
          <React.Fragment dangerouslySetInnerHTML={{ __html: item.description }}></React.Fragment>
        </div>
        </div>
      </div>
 :''}
 </React.Fragment>
)):''}

    </div>
    </div>
    </section>
    )
}

export default InNumber;