import React, { useState, useEffect } from 'react';
import { fetchData } from "../apiConnection/apiService";
import Button from './Button';

const HomeprojectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ProjectTabdata, setData] = useState(null);
  const [Projectdata, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [CategoryPost, setCategory] = useState([]);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/projectCategory');
        setData(responseService);

        const initialCategory = responseService[0]?.name;
        if (initialCategory) {
          setCategory(initialCategory);
          const responsepost = await fetchData(`/project/${initialCategory}`);
          setProjectData(responsepost);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, []);

  async function fetchProjectApi(catname) {
    try {
      const responsepost = await fetchData(`/project/${catname}`);
      setProjectData(responsepost);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleTabClick = (tabId, catname) => {
    setCategory(catname);
    fetchProjectApi(catname);
    console.log(Projectdata);
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
            onClick={() => handleTabClick(index, tab.slug)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <div className='tab-pane active' data-cat={CategoryPost}>
          <div className='row projects-row'>
            {Projectdata ? Projectdata.slice(0, 4).map((tab, index) => {
              return (
                <div key={index} className="col-lg-6 col-md-6 col-sm-12 projects-col mb-4" data-cat={index}>
                  <div className='project-details'>
                    {tab.logo && <img src={`https://teamwebdevelopers.com/charge_construct/public/images/project/logo/${tab.logo}`} />}
                    <div className='projects-insights-details'>
                      {tab.sub_title && <h5>{tab.sub_title}</h5>}
                      {tab.title && <h3>{tab.title}</h3>}
                      {tab.content && <p dangerouslySetInnerHTML={{ __html: tab.content }} />}
                      <Button title="Ganzer Beitrag" link={tab.category?`../project/${tab.slug}`:''} />
                    </div>
                  </div>
                </div>
              );
            }) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeprojectTabs;