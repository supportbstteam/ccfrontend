import React, { useState,useEffect } from 'react';
import { fetchData } from "../../apiConnection/apiService";

function Certifications() {
  const [CertificationData, setCertificationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/certificate');
        setCertificationData(responseService);
      } catch (error) {
        setError(error);
        setLoading(false);
      } 
    }
    fetchDataFromAPI();
  }, []);
  //console.log('Again list : '+CertificationData.length);
  
  return (
    <ul>
   {CertificationData && CertificationData.map((item, index) => (
    <React.Fragment key={index}>
      {item.image &&
  <li>
    <img src={`${process.env.imgpath}/certificate/${item.image}`} alt={item.title} data-aos="zoom-in" className="img-fluid"/>
    </li>
    }
  </React.Fragment>
   ))}
   </ul>
  );
}

export default Certifications;
