import { useState,useEffect } from 'react';
import aos from 'aos';
import { fetchData } from '@/apiConnection/apiService';
function Tabs(){
    const [data, setData] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchDataFromAPI() {
        try {
          const responseData = await fetchData('/team/founder');
          const upData = responseData;
          setData(upData);
          setLoading(false);
        } catch (error) {
          console.log('something wrong');
          setError(error);
          setLoading(false);
        }
      }
      fetchDataFromAPI();
    }, []); // Empty dependency array to run this effect only once on mount
    

      if (loading) {
        return <div className='loadings'><h2>Loading content</h2></div>;
      }
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    const tabs = [
        {
            id: 1,
            tabTitle: 'Adrian',
            title: 'Adrian Zierer',
            image : "adrian.png",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            tabTitle: 'Tim Schwenk',
            title: 'Tim Schwenk',
            image : "tim.png",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];

    const handleTabClick = (e) => {
       setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs founders-tabs' data-aos="fade-in">
                <h4 className='text-dark'>Founders</h4>
                {data.map((tab, i) =>
            <img key={i} className={currentTab==i?'active':''} src={`https://teamwebdevelopers.com/charge_construct/public/images/team/`+tab.image}  id={i}  onClick={(handleTabClick)}/>
                )}
            </div>
            <div className='tabs-content founders-list'>
                {data.map((tab, i) =>
                    <div key={i} className={currentTab==i?'show container p-0':'hide container p-0'}>
                         <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-12 col-12 text-sm-center mb-4'>
                            <img key={i} src={`https://teamwebdevelopers.com/charge_construct/public/images/team/`+tab.image} className='img-fluid border-6 founder-profile'/>
                            </div>
                            <div className='col-lg-7 col-md-6 mx-lg-4 mx-sm-0 mx-md-0 mx-0 col-sm-12 col-12'>
                            <h2 className="section-title">{tab.name}</h2>
                            <p>{tab.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;