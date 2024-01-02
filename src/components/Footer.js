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
      case 0:
        return (contentdata != '' && <li><img src={`${process.env.BASE_URL}/assets/images/footer_logo.png`} className="footer-logo" alt="Charge construct power on"/></li>);
      case 1:
        return(contentdata != '' && <li><div dangerouslySetInnerHTML={{ __html: contentdata }}></div></li>);
      case 2:
        return(contentdata != '' && <li><div className="footer-menu" dangerouslySetInnerHTML={{ __html: contentdata }}></div></li>);
      case 3:
        return(contentdata > 0 && <li><h5>Socials</h5> <SocialProfile type="follow"/></li>);
      case 4:
        return(contentdata > 0 && <li><h3>Kontakt</h3> <ContactDetails/></li>);
      case 5:
        return(contentdata > 0 && <li><Newsletter/></li>)
      }
  };
  
return (
    <footer>
        <div className="container">
        <div className="row mb-4">
                
                <div className="col-lg-4 col-md-6 col-sm-12 footer-col" >
                  <ul className="fot-box">
                  {footerdata && footerdata.map((tab, index) => (
                    <React.Fragment key={index}>
                    { renderSwitch(tab.id,tab.name)}
                    </React.Fragment >
                ))}
                </ul>
                </div>
               
                <div className="col-lg-5 col-md-5 col-sm-7 footer-col">
                <ul className="fot-box">
                {footerdata2 && footerdata2.map((tab, index) => (
                 <React.Fragment key={index}>
                { renderSwitch(tab.id,tab.name)}
                </React.Fragment >
                ))}
                 </ul>
                </div>
                 <div className="col-lg-3 col-md-3 col-sm-5 footer-col contact-details">
                 <ul className="fot-box">
                 {footerdata3 && footerdata3.map((tab, index) => (
                <React.Fragment key={index}>
               { renderSwitch(tab.id,tab.name)}
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