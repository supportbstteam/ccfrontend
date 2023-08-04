import { useState } from 'react';
import aos from 'aos';
function Tabs(){

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Adrian',
            title: 'Adrian Zierer',
            founder_img : "adrian.png",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            tabTitle: 'Tim Schwenk',
            title: 'Tim Schwenk',
            founder_img : "tim.png",
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
                {tabs.map((tab, i) =>
            <img key={i} src={`../../assets/images/pages/`+tab.founder_img} className={currentTab === `${tab.id}`?'active':''} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}/>
                )}
            </div>
            <div className='tabs-content'>
                {tabs.map((tab, i) =>
                    <div className='container p-0' key={i}>
                        {currentTab === `${tab.id}` && 
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-12 text-sm-center mb-4'>
                            <img key={i} src={`../../assets/images/pages/`+tab.founder_img} className='img-fluid border-6 founder-profile'/>
                            </div>
                            <div className='col-lg-7 col-md-7 mx-lg-4 mx-sm-0 mx-md-0 mx-0 col-sm-12 col-12'>
                            <h2 className="section-title">{tab.title}</h2>
                            <p>{tab.content}</p>
                            </div>
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;