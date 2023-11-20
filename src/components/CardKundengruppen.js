import Button from "./Button";
import { fetchData } from "@/apiConnection/apiService";
import { useState, useEffect } from 'react';
function KundengruppenCard(){
  const [animated, setAnimate] = useState(1000);
    const [kundengruppendata, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/customerGroup'); // Replace '/data' with the API endpoint you want to fetch
            setData(responseService);
            setLoading(false);
           // Aos.init({duration: 1700});
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
 <div key={index} className='col-lg-4 col-md-6 col-sm-12 col-12 ' data-aos="fade-up"
 data-aos-anchor-placement="top-bottom" data-aos-duration={1000*(index+1)}>
  <div className="kundengrup-card">
  <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              {item.image?<img src={item.image?`https://teamwebdevelopers.com/charge_construct/public/images/customerGroup/${item.image}`:''}/>:''}
                <div className='flip-front-card-contents'>
                {item.title?<h3>{item.title}</h3>:''}
                {/* <p>{item.src_des}</p> */}
                </div>
              </div>

              <div className="flip-card-back">
              {item.title?<h4>{item.title}</h4>:''}
      <p>{item.description}</p>
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