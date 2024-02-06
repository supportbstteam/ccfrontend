import React, { useState,useEffect } from 'react';
import { fetchData } from "../../apiConnection/apiService";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const gridcolor = ['#895364','#f39178','#e2b747','#88b6ba','#ff6c86']
// const data = [
//   {
//     name: 'Page Af',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

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
       // console.log(BarData.infracat);
      } catch (error) {
        setError(error);
        setLoading(false);
      } 
    }
    fetchDataFromAPI();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledColors = shuffleArray(gridcolor);

//console.log(BarData?BarData:'');
  const {title,footer_content,infracat} = BarData?BarData:'';
  //console.log(title);
  return (
    <>
    <div className="branche-figure" data-aos="fade-up">
      <div className="branche-cols">
      <h5>{title?title:''}</h5>
      </div> 
   <div className="bar-charts">
   {infracat?infracat.map((item, index) => (
    <div className="progress" key={index}>
<div className="progress-bar" role="progressbar" datawidth={(item.number / 500) * 100} style={{ width: `0%`, background: `${shuffledColors[index % shuffledColors.length]}` }} aria-valuenow="5" aria-valuemin="0" aria-valuemax="500">
    {item.number} </div>
    <div><img src={`https://teamwebdevelopers.com/charge_construct/public/images/infracat/${item.image}`}/></div>
</div>
   )):''}

{/* <BarChart width={600}
          height={400}
          data={BarData?BarData.infracat:''}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          barSize={35}
        >
          <XAxis dataKey="title" scale="point" padding={{ left: 25, right: 25 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="number" fill="#fbb900" background={{ fill: '#eee' }} animationBegin={0} animationDuration={1000}/>
        </BarChart> */}
   </div>
   <div className="barcharts-footer">
   <p>{footer_content?footer_content:''}</p>
   </div>
   </div>
   </>
  );
}

export default Bars;
