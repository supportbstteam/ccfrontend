import Aos from "aos";
import { useEffect, useState } from 'react';
import { fetchData } from "../apiConnection/apiService";
function FaqList(){
    const [servicedata, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFaq, setactiveFaq] = useState(null);

    function toggleOpened(ids){
      setactiveFaq(ids);
      console.log(activeFaq);
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

    useEffect(()=>{
      Aos.init();
  },[])
    return (
      <>
      {servicedata && servicedata.map((que, index) => (
        <div className="accordion-item" data-aos="fade-up" data-aos-duration="1500" onClick={() =>toggleOpened(que.id)} key={index}>
          <h2 className="accordion-header" id="headingOne">
            <button className={"accordion-button " + (que.id === activeFaq?'':'collapsed')} type="button" data-bs-toggle="collapse" data-bs-target={`#`+que.id} aria-expanded={activeFaq?'true':'false'} aria-controls={`#`+que.id}>
             <span>{que.title}</span>
            </button>
          </h2>
          <div id={que.id} className={que.id === activeFaq?'show':''+`accordion-collapse collapse`} aria-labelledby="headingOne" data-bs-parent="#faqlists">
            <div className="accordion-body">
            <div dangerouslySetInnerHTML={{ __html: que.description }}></div>
            </div>
          </div>
        </div>
     ))
    }
    </>
    )
}

export default FaqList;