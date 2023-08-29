import Button from "./Button";
import { fetchData } from "@/apiConnection/apiService";
import { useState, useEffect } from 'react';
import Aos from 'aos';
function BekanntLogo(){
    const [animated, setAnimate] = useState(1000);
    const [bekanntlogoData, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/know_us'); // Replace '/data' with the API endpoint you want to fetch
            setData(responseService);
            setLoading(false);
            Aos.init({duration: 1000});
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
        <><ul className="bekannt_logo_details">{bekanntlogoData.map((item, index) => (
 <li key={index}> {/* data-aos="zoom-in"
data-aos-anchor-placement="top-bottom" data-aos-duration={1000*(index+2)} */}
  {item.logo_img?<img src={item.logo_img?`assets/images/bekannt/${item.logo_img}`:''}/>:''}
  </li>
        ))}
       </ul> </>
    )

}
export default BekanntLogo;