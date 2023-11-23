import { Fragment, useEffect, useState } from "react";
import React from "react";
import InputField from "./Forms/InputField";
import { fetchData } from "@/apiConnection/apiService";
import ContactDetails from "./GeneralDetails/ContactDetails";
import SocialProfile from "./GeneralDetails/SocialProfile";
import Aos from 'aos';
import Newsletter from "./Newsletter";

function Footer() {
  const [fotData0, setfotData0] = useState([]);
  const [fotData1, setfotData1] = useState([]);
  const [fotData2, setfotData2] = useState([]);
  const [fotData3, setfotData3] = useState([]);
  const [footerdata, setFooterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responsefooter = await fetchData('/colom1'); // Replace '/data' with the API endpoint you want to fetch
        const responsefooter2 = await fetchData('/colom2');
        const responsefooter3 = await fetchData('/colom3');
        const responsefooter4 = await fetchData('/colom4');
        setFooterData([responsefooter, responsefooter2, responsefooter3, responsefooter4]);
        setfotData0(responsefooter);
        setfotData1(responsefooter2);
        setfotData2(responsefooter3);
        setfotData3(responsefooter4);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    console.log(footerdata);
    fetchDataFromAPI();
    Aos.init({ duration: 1700 }); // Initialize Aos here
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const renderSwitch = (param, contentdata) => {
    switch (param) {
      case 10005:
        return (contentdata !== '' && <div data-id={`${param}`} className="col-lg-4 col-md-6 col-sm-12 footer-col"><img src={`${process.env.BASE_URL}/assets/images/footer_logo.png`} className="footer-logo" alt="Charge construct power on" /></div>);
      case 2:
        return (contentdata !== '' && <div data-id={`${param}`} className="col-lg-4 col-md-6 col-sm-12 footer-col" dangerouslySetInnerHTML={{ __html: contentdata }}></div>);
      case 3:
        return (contentdata !== '' && <div data-id={`${param}`} className="col-lg-4 col-md-6 col-sm-12 footer-colfooter-menu" dangerouslySetInnerHTML={{ __html: contentdata }}></div>);
      case 4:
        return (contentdata > 0 && <div data-id={`${param}`} className="col-lg-4 col-md-6 col-sm-12 footer-colfooter-menu"><h5>Socials</h5> <SocialProfile type="follow" /></div>);
      case 6:
        return (contentdata > 0 && <div data-id={`${param}`} className="col-lg-4 col-md-6 col-sm-12 footer-colfooter-menu"><h3>Kontakt</h3> <ContactDetails /></div>);
      case 5:
        return (contentdata > 0 && <div data-id={`${param}`} className="col-lg-4 col-md-6 col-sm-12 footer-colfooter-menu"><h3>Kontakt</h3> <Newsletter /></div>)
      default:
        return null;
    }
  };
  return (
    <footer>
  <div className="container">
  {footerdata.map((data, i) => (
    <> 
      <div className="row mb-4 d-flex" key={i}>
        {(data.map((array) => array[i])).map((val, i) => (
         
      <React.Fragment>
        {data.length > 0 ? renderSwitch(data[i].id, data[i].name) : null}
      </React.Fragment>
        ))}
      
      </div>
      </>
    ))}
  </div>
</footer>

  
  );
}

export default Footer;
