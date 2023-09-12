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

function Bars() {
  const [BarData, setBarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/infra-structure');
        //console.log(chartData);
        setBarData(responseService[0]);
        //console.log(BarData);
      } catch (error) {
        setError(error);
        setLoading(false);
      } 
    }
    fetchDataFromAPI();
  }, []);
//console.log(BarData?BarData:'');
  const {title,footer_content,infracat} = BarData?BarData:'';
  //console.log(title);
  return (
    <>
    <div className="branche-figure">
      <div className="branche-cols">
      <h5>{title?title:''}</h5>
      </div> 
   <div className="bar-charts"> 
   {infracat?infracat.map((item, index) => (
    <div className="progress" key={index}>
  <img src={`https://teamwebdevelopers.com/charge_construct/public/images/infracat/${item.image}`}/>
  <div className="progress-bar" role="progressbar" style={{ width: `${(item.number / 1000) * 100}%` }} aria-valuenow="5" aria-valuemin="0" aria-valuemax="1000">{item.number}</div>
</div>
   )):''}
 {/* <div className="progress">
  <img src="assets/images/enbw.png"/>
  <div className="progress-bar" role="progressbar" style={{width : '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">523</div>
</div>
<div className="progress">
<img src="assets/images/bppu.png"/>
  <div className="progress-bar" role="progressbar" style={{width : '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">245</div>
</div>
<div className="progress">
<img src="assets/images/tesla.png"/>
  <div className="progress-bar" role="progressbar" style={{width : '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">160</div>
</div>
<div className="progress">
<img src="assets/images/ionity.png"/>
  <div className="progress-bar" role="progressbar" style={{width : '33%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">240</div>
</div>
<div className="progress">
<img src="assets/images/pealzwerke.png"/>
  <div className="progress-bar" role="progressbar" style={{width : '20%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">240</div>
</div>
<div className="progress">
<img src="assets/images/citywatt.png"/>
  <div className="progress-bar" role="progressbar" style={{width : '50%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">240</div>
</div> */}
   </div>
   <div className="barcharts-footer">
   <p>{footer_content?footer_content:''}</p>
   </div>
   </div>
   </>
  );
}

export default Bars;
