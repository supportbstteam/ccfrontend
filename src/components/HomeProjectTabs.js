  import React, { useState,useEffect } from 'react';
  import { fetchData } from "../apiConnection/apiService";
  import Button from './Button';
  import Aos from 'aos';
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
          const postcat = responseService[0].name;
          setData(responseService);
          setCategory(postcat);
  
          // Load initial Projectdata here
          const responsepost = await fetchData(`/project/${postcat}`);
          setProjectData(responsepost);
  
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
      fetchDataFromAPI();
    }, []);

  
      async function fetchProjectApi(catnamshow) {
        try {
          console.log(CategoryPost);
          const responsepost = await fetchData(`/project/${catnamshow}`); // Replace '/data' with the API endpoint you want to fetch
          setProjectData(responsepost);
          console.log(responsepost);
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
      setActiveTab(tabId);
    };

    return (
      <div className="tabs-container">
        <ul className="tabs">
          {ProjectTabdata.map((tab,index) => (
            <li
              key={index}
              data-id={index}
              data-cat={tab.slug}
              className={`tab ${activeTab == index ? 'active' : ''}`}
              onClick={() => handleTabClick(index,tab.slug)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
        <div className="tab-content">
          <div className='tab-pane active' data-cat={CategoryPost}>
              <div className='row projects-row'>
              {Projectdata ? Projectdata.slice(0, 4).map((tab,index) => {
                if (index == 0 || index == 3 || index == 5) {
                 return <div key={index} className="col-lg-6 col-md-6 col-sm-12 projects-col mb-4" data-cat={index} style={tab.image?{backgroundImage:`url(https://teamwebdevelopers.com/charge_construct/public/images/project/${tab.image})`}:''}>  {/* style={tab.image?{backgroundImage:`url(https://teamwebdevelopers.com/charge_construct/public/images/project/${tab.image})`}:''} */}
                      {/* {tab.image ? <img className="w-100 border-6" src={tab.image ? `https://teamwebdevelopers.com/charge_construct/public/images/project/${tab.image}` : ''} /> : ''} */}
                      <div className='projects-insights-details with_image_view'>
                      {tab.sub_title?<h5>{tab.sub_title}</h5>:''}
                      {tab.title?<h3>{tab.title}</h3>:''}
                          <Button title="Ganzer Beitrag" link="#" />
                          </div>
                  </div>
                   } else {
                return <div key={index} className="col-lg-6 col-md-6 col-sm-12 projects-col mb-4" data-cat={index}>
                      <div className='project-details'>
                          {tab.logo ? <img src={tab.logo ? `https://teamwebdevelopers.com/charge_construct/public/images/project/logo/${tab.logo}` : ''} /> : ''}
                          <div className='projects-insights-details'>
                          {tab.sub_title?<h5>{tab.sub_title}</h5>:''}
                          {tab.title?<h3>{tab.title}</h3>:''}
                          {tab.content?<p dangerouslySetInnerHTML={{ __html: tab.content}}/>:''}
                          </div>
                          <Button title="Ganzer Beitrag" link='#' />
                      </div>
                  </div>
                    }
                }) : ''}
              </div>
          </div>
  
  </div>

      </div>
    );
  };

  export default HomeprojectTabs;
