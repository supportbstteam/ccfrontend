import { fetchData } from "../apiConnection/apiService";
import { useState, useEffect } from 'react';
function HomeNewsRoom(){
  const [homenewsdata, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responsehomenews = await fetchData('/homenewsroom'); // Replace '/data' with the API endpoint you want to fetch
        setData(responsehomenews[0]);
       // console.log(homenewsdata);
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

    return(
        <div className="d-flex mb-3 w-100 home_news_posts">
            <div className="newsroom-grids news-first-post">
<div className="bd-highlight" style={{backgroundImage: `url("assets/images/news/news-1.png")`}}>
    <img src="assets/images/news/news-1.png"/>
    <div className="newshome_content">
        <h3>Wir haben viele weitere Insights rund um die E-Mobility</h3>
        <div className="article_config">
            <span className="post_category">Article - </span>
            <span className="post_publish">Dezember 22, 2022</span>
        </div>
    </div>
    </div>
    </div>
<div className="flex-column d-flex">
<div className="newsroom-grids">
    <div className="align-self-end bd-highlight sub-height mb-2"  style={{backgroundImage: `url("assets/images/news/news-2.png")`}}>
        <img src="assets/images/news/news-2.png"/>
        <div className="newshome_content">
        <h3>Wir haben viele weitere Insights rund um die E-Mobility</h3>
        <div className="article_config">
            <span className="post_category">Insights - </span>
            <span className="post_publish">Dezember 22, 2022</span>
        </div>
    </div>
    </div>
    </div>
    <div className="newsroom-grids">
    <div className="align-self-end bd-highlight sub-height" style={{backgroundImage: `url("assets/images/news/news-3.png")`}}>
        <img src="assets/images/news/news-3.png"/>
        <div className="newshome_content">
        <h3>Wir haben viele weitere Insights rund um die E-Mobility</h3>
        <div className="article_config">
            <span className="post_category">Webinar - </span>
            <span className="post_publish">Dezember 22, 2022</span>
        </div>
    </div>    
    </div>
    </div>
</div>
<div className="flex-column d-flex">
<div className="newsroom-grids">
    <div className="align-self-end bd-highlight sub-height mb-2" style={{backgroundImage: `url("assets/images/news/news-4.png")`}}>
    <img src="assets/images/news/news-4.png"/>
        <div className="newshome_content">
        <h3>Wir haben viele weitere Insights rund um die E-Mobility</h3>
        <div className="article_config">
            <span className="post_category">Blog - </span>
            <span className="post_publish">Dezember 22, 2022</span>
        </div>
        </div>
        </div>
        </div>

        <div className="newsroom-grids">
    <div className="align-self-end bd-highlight sub-height" style={{backgroundImage: `url("assets/images/news/news-5.png")`}}>
        <img src="assets/images/news/news-5.png"/>
    <div className="newshome_content">
        <h3>Wir haben viele weitere Insights rund um die E-Mobility</h3>
        <div className="article_config">
            <span className="post_category">Podcast - </span>
            <span className="post_publish">Dezember 22, 2022</span>
        </div>
    </div>
    </div>
    </div>

</div>
<div className="newsroom-grids news-last-post">
<div className="bd-highlight" style={{backgroundImage: `url("assets/images/news/news-6.png")`}}>
    <img src="assets/images/news/news-6.png"/>
    <div className="newshome_content">
        <h3>Wir haben viele weitere Insights rund um die E-Mobility</h3>
        <div className="article_config">
            <span className="post_category">Article - </span>
            <span className="post_publish">Dezember 22, 2022</span>
        </div>
    </div>
    </div>
    </div>

  </div>
    )
}

export default HomeNewsRoom;