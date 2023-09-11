import React, { useState,useEffect } from 'react';
import { fetchData } from "../../apiConnection/apiService";
const data = [
  {
    name: "Hearts",
    value: 4000,
    icon: "/assets/images/enbw.png", // Replace with the actual path to your image
  },
  {
    name: "Clubs",
    value: 3000,
    icon: "/assets/images/enbw.png", // Replace with the actual path to your image
  },
  {
    name: "Diamonds",
    value: 2000,
    icon: "/assets/images/enbw.png", // Replace with the actual path to your image
  },
  {
    name: "Spades",
    value: 2780,
    icon: "/assets/images/enbw.png", // Replace with the actual path to your image
  },
];

function SocialProfile() {
  const [BarData, setBarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/social-profile');
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
    <ul className="social-follow">
   {BarData?BarData.map((item, index) => (
  <li key={item.id}><a href={item.link}><img src={`https://teamwebdevelopers.com/charge_construct/public/images/social/${item.logo_icon}`} alt={item.title}/></a></li>
   )):''}
   </ul>
  );
}

export default SocialProfile;
