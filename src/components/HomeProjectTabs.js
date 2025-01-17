import React, { useState, useEffect } from 'react';
import { fetchData } from "../apiConnection/apiService";
import Button from './Button';

const HomeprojectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ProjectTabdata, setData] = useState([]);
  const [Projectdata, setProjectDataPT] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseServicePT = await fetchData('/projectCategory');
        setData(responseServicePT);

        const projectData = {};
        for (const tab of responseServicePT) {
          const responsePost = await fetchData(`/project/${tab.slug}`);
          projectData[tab.slug] = responsePost;
        }
        setProjectDataPT(projectData);
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
        {ProjectTabdata.map((tab, index) => (
          <li
            key={index}
            data-id={index}
            data-cat={tab.slug}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className="tab-content overflow-hidden">
        <div className='tab-pane active' data-cat={ProjectTabdata[activeTab]?.slug}>
          <div className='row projects-row gap-1'>
            {Projectdata[ProjectTabdata[activeTab]?.slug]?.map((tab, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-6 col-sm-12 projects-col mb-4"
                data-cat={index}
                style={index === 0 || index === index + 2 ? { backgroundImage: `url(https://teamwebdevelopers.com/charge_construct/public/images/project/${tab.image})` } : {}}
              >
                <div className='project-details'>
                  {/* {index === 0 || index === index + 2 ? "" : tab.logo && <img src={`${process.env.imgpath}/project/logo/${tab.logo}`} alt={tab.sub_title} />} */}
                  <div className={index === 0 || index === index + 2 ? "projects-insights-details with_image_view" : "projects-insights-details"}>
                    {tab.sub_title && <h5>{tab.sub_title}</h5>}
                    {tab.title && <h3>{tab.title}</h3>}
                    {index === 0 || index === index + 2 ? "" : <div className="home-tabs-content" dangerouslySetInnerHTML={{ __html: tab.content }} />}
                    <Button title="Ganzer Beitrag" link={tab.category ? `../projects/${tab.slug}` : ''} target="_blank" />
                  </div>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeprojectTabs;
