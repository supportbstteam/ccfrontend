import React, { useState,useEffect } from 'react';
import { fetchData } from "../../apiConnection/apiService";

function ContactDetails() {
  const [BarData, setBarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/contact-details');
        //console.log(chartData);
        setBarData(responseService);
        //console.log(BarData);
      } catch (error) {
        setError(error);
        setLoading(false);
      } 
    }
    fetchDataFromAPI();
  }, []);

  return (
    <ul>
   {BarData?BarData.map((item, index) => (
    <React.Fragment key={item.id}>
  <li><a href={item.Address}>{item.Address}</a></li>
  <li><a href={`mailto:${item.Email}`}>{item.Email}</a></li>
  <li><a href={`tel:${item.Phone}`}>{item.Phone}</a></li>
  <li><a href={`faxto:${item.fax}`}>{item.fax}</a></li>
  </React.Fragment>
   )):''}
   </ul>
  );
}

export default ContactDetails;
