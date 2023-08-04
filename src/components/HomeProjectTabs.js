import React, { useState,useEffect } from 'react';
import { fetchData } from "../apiConnection/apiService";
import Button from './Button';
import Aos from 'aos';
const HomeprojectTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [ProjectTabdata, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/homeproject_tabs'); // Replace '/data' with the API endpoint you want to fetch
        setData(responseService);
        setLoading(false);
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

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs-container">
      <ul className="tabs">
        {ProjectTabdata.map((tab) => (
          <li
            key={tab.id}
            data-id={activeTab}
            className={`tab ${activeTab == tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.category}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {ProjectTabdata.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab == tab.id ? 'active' : ''}`}>
            <div className='row projects-row'>
             <div className="col-lg-6 col-md-6 col-sm-12 projects-col">
             {tab.image?<img className="w-100 border-6" src={tab.image?`assets/images/projects/${tab.image}`:''}/>:''}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 projects-col">
        <div className='project-details'>
            {tab.logo?<img src={tab.logo?`assets/images/projects/${tab.logo}`:''}/>:''}
        <div className='projects-insights-details'>
        <h5>{tab.sub_title}</h5>
        <h3>{tab.title}</h3>
        <p>{tab.content}</p>
        </div>
        <Button title="Ganzer Beitrag" link="#"/>
        </div>
        </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeprojectTabs;
