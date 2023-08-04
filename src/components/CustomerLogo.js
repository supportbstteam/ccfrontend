import Button from "./Button";
import { fetchData } from "@/apiConnection/apiService";
import { useState, useEffect } from 'react';
import Aos from 'aos';
function CustomerLogo(){
    const [customerlogoData, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/customerlogo'); // Replace '/data' with the API endpoint you want to fetch
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
        <><ul className="custom_logo_details">{customerlogoData.map((item, index) => (
 <li key={index} data-aos={(index%2 !== 0?"fade-up":"fade-down")} data-aos-duration={1500*(index+2)}>
  {item.cust_logo?<img src={item.cust_logo?`assets/images/customer/${item.cust_logo}`:''}/>:''}
  </li>
        ))}
       </ul> </>
    )

}
export default CustomerLogo;