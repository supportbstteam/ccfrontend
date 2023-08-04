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
  {item.kun_title?<h3 data-aos="fade-in"
 data-aos-anchor-placement="top-bottom" data-aos-duration={1000*(index+1)}>{item.kun_title}</h3>:''}
  {item.kun_img?<img src={item.kun_img?`assets/images/kundengruppen/${item.kun_img}`:''}/>:''}
  </div>
    </div>
        ))}
        </>
    )

}
export default KundengruppenCard;