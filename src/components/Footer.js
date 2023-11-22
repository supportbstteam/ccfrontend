import { Fragment, useEffect, useState } from "react";
import React from "react";
import InputField from "./Forms/InputField";
import { fetchData } from "@/apiConnection/apiService";
import ContactDetails from "./GeneralDetails/ContactDetails";
import SocialProfile from "./GeneralDetails/SocialProfile";
import Aos from 'aos';
import Newsletter from "./Newsletter";
function footer(){

  const [footerdata, setData] = useState(null);
  const [footerdata2, setData2] = useState(null);
  const [footerdata3, setData3] = useState(null);
  const [footerdata4, setData4] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responsefooter = await fetchData('/colom1'); // Replace '/data' with the API endpoint you want to fetch
        const responsefooter2 = await fetchData('/colom2');
        const responsefooter3 = await fetchData('/colom3');
        const responsefooter4 = await fetchData('/colom4');
        setData(responsefooter);
        setData2(responsefooter2);
        setData3(responsefooter3);
        setData4(responsefooter4);
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
  const renderSwitch = (param,contentdata) => {
    switch (param) {
      case 1:
        return (contentdata != '' && <img src={`${process.env.BASE_URL}/assets/images/footer_logo.png`} className="footer-logo" alt="Charge construct power on"/>);
      case 2:
        return(contentdata != '' && <div dangerouslySetInnerHTML={{ __html: contentdata }}></div>);
      case 3:
        return(contentdata != '' && <div dangerouslySetInnerHTML={{ __html: contentdata }}></div>);
      case 4:
        return(contentdata > 0 && <><h5>Socials</h5> <SocialProfile type="follow"/></>);
      case 6:
        return(contentdata > 0 && <><h3>Kontakt</h3> <ContactDetails/></>);
      case 5:
        return(contentdata > 0 && <Newsletter/>)
      }
  };
  
return (
    <footer>
        <div className="container">
        <div className="row mb-4">
                
                <div className="col-lg-4 col-md-6 col-sm-12 footer-col" >
                  <ul>
                  {footerdata && footerdata.map((tab, index) => (
                    <React.Fragment key={index}>
                     <li>{ renderSwitch(tab.id,tab.name)}</li>
                    </React.Fragment >
                ))}
                </ul>
                </div>
               
                <div className="col-lg-5 col-md-5 col-sm-7 footer-col">
                <ul>
                {footerdata2 && footerdata2.map((tab, index) => (
                 <React.Fragment key={index}>
                 <li>{ renderSwitch(tab.id,tab.name)}</li>
                </React.Fragment >
                ))}
                 </ul>
                </div>
                 <div className="col-lg-3 col-md-3 col-sm-5 footer-col contact-details">
                 <ul>
                 {footerdata3 && footerdata3.map((tab, index) => (
                <React.Fragment key={index}>
                <li>{ renderSwitch(tab.id,tab.name)}</li>
               </React.Fragment >
                ))}
                 </ul>
                 </div>
        </div>
        </div>
    </footer>
)
}

export default footer;