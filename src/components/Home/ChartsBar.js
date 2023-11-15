import React, { useState,useEffect } from 'react';
import { fetchData } from "../../apiConnection/apiService";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Page Af',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
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
        console.log(BarData.infracat);
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
   {/* {infracat?infracat.map((item, index) => (
    <div className="progress" key={index}>
  <img src={`https://teamwebdevelopers.com/charge_construct/public/images/infracat/${item.image}`}/>
  <div className="progress-bar" role="progressbar" style={{ width: `${(item.number / 1000) * 100}%` }} aria-valuenow="5" aria-valuemin="0" aria-valuemax="1000">{item.number}</div>
</div>
   )):''} */}

<BarChart
          width={600}
          height={400}
          data={BarData?BarData.infracat:''}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis dataKey="title" scale="point" padding={{ left: 25, right: 25 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="number" fill="#fbb900" background={{ fill: '#eee' }} />
        </BarChart>

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
