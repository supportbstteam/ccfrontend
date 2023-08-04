import { useState } from 'react';
import { useEffect } from 'react';
import Button from '../Button';
import Popper from 'popper.js';
import Aos from 'aos';
//import $ from 'jquery';
//import 'bootstrap/dist/js/bootstrap.bundle.js';
import AllVacancy from './VacancyAllPost';
function VacancyPost(){
    const [isShowing, setIsShowing] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [SearchValue, setSearchValue] = useState('');
    const [IsSearch, setIsSearch] = useState(false);

    useEffect(()=>{
        Aos.init();
    },[])

    const toggle = (e) => {
        
        if(e.target.id){
            document.getElementsByClassName('vacancy-content')[0].style.display = 'none';
        setcurrentAcco(e.target.id);
        }
        else{
            setcurrentAcco('');
        }
    }
    const [currentTab, setCurrentTab] = useState('0');
    const [currentAcco, setcurrentAcco] = useState('');
    const tabs = [
        {
            id: 1,
            category: 'Construction',
            title: 'Projekt- Und Bauleiter (w/m/d)',
            founder_img : "adrian.png",
            profession: "Permanent employee",
            period: "Full-time",
            city: "Ingolstadt",
            content: 'Construction Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            category: 'Finance and Controlling',
            tabTitle: 'Finance and Controlling Tim Schwenk',
            title: 'Tim Schwenk',
            founder_img : "tim.png",
            profession: "Working Student",
            period: "part-time",
            city: "Ingolstadt",
            content: 'Finance and Controlling Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 3,
            category: 'Installation',
            tabTitle: 'Tim Schwenk',
            title: 'Installation Tim Schwenk',
            founder_img : "tim.png",
            profession: "Trainee",
            period: "Full, part-time",
            city: "Ingolstadt",
            content: 'Installation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 4,
            category: 'Operations',
            tabTitle: 'Operations Tim Schwenk',
            title: 'Operations Tim Schwenk',
            founder_img : "tim.png",
            profession: "Permanent employee",
            period: "full, part-time",
            city: "Ingolstadt",
            content: 'Operations Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 5,
            category: 'Planning and Calculation',
            tabTitle: 'Tim Schwenk',
            title: 'Planning and Calculation Tim Schwenk',
            founder_img : "tim.png",
            profession: "Trainee",
            period: "Full or part-time",
            city: "Ingolstadt",
            content: 'Planning and Calculation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 6,
            category: 'Projekt-und Standortentwicklung',
            tabTitle: 'Tim Schwenk',
            title: 'Projekt-und Standortentwicklung Tim Schwenk',
            founder_img : "tim.png",
            profession: "Working Student",
            period: "full, part-time",
            city: "Ingolstadt",
            content: 'Projekt-und Standortentwicklung Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];

    const handleTabClick = (e) => {
     //console.log(e.target.id);
     setCurrentTab(e.target.id);
    }
    const searchfields = (e ) => {
        if(e.target.value){
        setIsShowing(true);
        var keyword = e.target.value;
        const filtered = tabs.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));
        setInputValue(keyword);
        setSearchValue(filtered)
        console.log(SearchValue);
    }
    else{
        setInputValue('');
        setIsSearch(false);
    }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 p-0'>
                    <div className='search-vacancy'>
                    <img src='../assets/images/search.png'/>
                    <input value={inputValue}
        onChange={searchfields} placeholder='Search Positions' name="find_vacancy" type='text' className='search-input'/>
                    <input type="Submit" name='Search' className='cc-button search-submit' text="Search"/>
                    </div>
                </div>
            </div>
            <ul className='tabsview founders-tabs'>
            <li className={currentTab === '0'?'actives':''} id='0' onClick={(handleTabClick)}>
                   All
            </li>
                {tabs.map((tab, i) =>
    <li  key={i} className={currentTab === `${tab.id}`?'actives':''} id={tab.id} onClick={(handleTabClick)} data-aos="zoom-in" data-aos-duration={1000*(i+1)}>
                    {tab.category}
                </li>
                )}
            </ul>
            <div className='tabs-content'>
                {isShowing == false ?
                tabs.map((tab, i) =>
                (currentTab === `0` ?
 <AllVacancy tab={tab} key={i}/>:
(currentTab === `${tab.id}` &&
<div className="accordion" id={tab.id} key={i}>
                            <h3>{tab.category}</h3>
  <div className="accordion-item border-0" data-aos="zoom-in" data-aos-duration={1200*(i+1)}>
    <div className="accordion-header" id="headingTwo">
      <span className="accordion-button positions-details flex-column align-items-baseline vacancy-accordion collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#`+tab.id+`a`} aria-expanded="false" aria-controls="collapseTwo">
     <h4>{tab.title}</h4>
      <p><span>{tab.profession}</span>, <span>{tab.period}</span> . <span>{tab.city}</span></p>
      </span>
    </div>
    <div id={tab.id+`a`} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent={`#`+tab.id}>
      <div className="accordion-body">
      <p className='vacancy-content px-1'>
        {tab.content}
      </p>
       </div>
    </div>
  </div>
</div>)
)):SearchValue.map((tab, i) =>{
    // Searched Values for tabs
    <>
    <AllVacancy tab={tab}/>
    </>
})
}


            </div>
        </div>
    );
}

export default VacancyPost;