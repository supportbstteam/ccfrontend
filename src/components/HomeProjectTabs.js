import React, { useState, useEffect } from 'react';
import { fetchData } from "../apiConnection/apiService";
import Button from './Button';

const HomeprojectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ProjectTabdata, setData] = useState(null);
  const [Projectdata, setProjectDataPT] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [CategoryPost, setCategory] = useState([]);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseServicePT = await fetchData('/projectCategory');
        setData(responseServicePT);

        const initialCategory = responseServicePT[0]?.name;
        if (initialCategory) {
          setCategory(initialCategory);
          const responsepost = await fetchData(`/project/${initialCategory}`);
          setProjectDataPT(responsepost);
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
      setProjectDataPT(responsepost);
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
            onClick={() => handleTabClick(index, tab.slug)}> {tab.name} </li>
        ))}
      </ul>
      <div className="tab-content overflow-hidden">
        <div className='tab-pane active' data-cat={CategoryPost}>
          <div className='row projects-row gap-1'>
           {Projectdata ? Projectdata.map((tab,index) => {
               return ( <div key={index} className="col-lg-6 col-md-6 col-sm-12 projects-col mb-4" data-cat={index} style={index === 0 || index === index+2 ? { backgroundImage: `url(https://teamwebdevelopers.com/charge_construct/public/images/project/${tab.image})` } : {}}>
                  <div className='project-details'>
                  {index === 0 || index === index+2 ? "" : tab.logo &&<img src={`${process.env.imgpath}/project/logo/${tab.logo}`} alt={tab.sub_title}/>}
                    <div className= {index === 0 || index === index+2 ? "projects-insights-details with_image_view" : "projects-insights-details"}>
                      {tab.sub_title && <h5>{tab.sub_title}</h5>}
                      {tab.title && <h3>{tab.title}</h3>}
                      {index === 0 || index === index+2 ? "":<div className="home-tabs-content" dangerouslySetInnerHTML={{ __html: tab.content }}/>}
                      <Button title="Ganzer Beitrag" link={tab.category?`../project/${tab.slug}`:''} target="_blank"/>
                    </div>
                  </div>
                </div>
                )
            }) : null}
        </div>
      </div>
      </div>
    </div>
  );
};
export default HomeprojectTabs;