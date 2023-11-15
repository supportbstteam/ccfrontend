import { fetchData } from "../../apiConnection/apiService";
import Link from "next/link";
import Button from "../Button";
import { useState, useEffect } from 'react';
function ProjectInsights(){

    const [projectInsightsdata, setProjectInsightData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responsehomenews = await fetchData('/category-blog/Insights');
            setProjectInsightData(responsehomenews);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
        fetchDataFromAPI();
      }, []);
//console.log(projectInsightsdata && JSON.stringify(projectInsightsdata)+' these are the list of posts to show');
    return(
        <section className="main-section newsroom-project-insights">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h2 className='section-title text-dark mb-5' data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000">Project Insights</h2>
                </div>
                

                {projectInsightsdata && projectInsightsdata.slice(0, 2).map((item,index) => (
                <>
<div className="col-lg-6 col-md-6 col-sm-12 col-12 overlay-posts" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
                    <div className="card bg-dark text-white border-0 rounded-0">
  <img src={`https://teamwebdevelopers.com/charge_construct/public/images/blogPost/${item.banner_img}`} className="card-img" alt="..."/>
  <div className="card-img-overlay">
  <p className="post-published"><span>Errichtung</span> - <span>Ladeinfrastruktur Betreiber</span></p>
    <h4 className="card-title">{item.post_title}</h4>
   <Button link={`insight/${item.slug}`} title="Ganzer Beitrag"/>
  </div>
</div>
</div>
</>
    ))}
                
{/* 
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 overlay-posts" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1800">
                    <div className="card bg-dark text-white border-0 rounded-0">
  <img src="../assets/images/newsroom/enbw.jpg" className="card-img" alt="..."/>
  <div className="card-img-overlay">
  <p className="post-published"><span>Errichtung</span> - <span>Ladeinfrastruktur Betreiber</span></p>
    <h4 className="card-title">Realisierung einer Ladewelt für EnBW</h4>
   <Button link="#" title="Ganzer Beitrag"/>
  </div>
</div>   </div> */}
            </div>
        </div>
    </section>
    )
}

export default ProjectInsights;