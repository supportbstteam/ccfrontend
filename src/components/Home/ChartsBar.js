import React from "react";

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

  return (
    <>
    <div className="branche-figure">
      <div className="branche-cols">
      <h5>Wir arbeiten mit dem größten Ladeinfrastrukturbetreibern in Deutschland zusammen und konnten mit diesen schon zahlreiche Projekte realisieren.</h5>
      </div>
   <div className="bar-charts">
 <div className="progress">
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
</div>
   </div>
   <div className="barcharts-footer">
   <p>Stand 08.2023 - Datenbasis: goingelectric.de</p>
   </div>
   </div>
   </>
  );
}

export default Bars;
