import { fetchData } from "../apiConnection/apiService";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';
function HomeNewsRoom(){
  const [homenewsdata, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  //console.log(`Month: ${monthName}, Date: ${day}`);
  
  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responsehomenews = await fetchData('/homeBlogPost'); // Replace '/data' with the API endpoint you want to fetch
        setData(responsehomenews);
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
  //console.log(homenewsdata)
    return(
       
        <div className="d-flex mb-3 w-100 home_news_posts gap-2">
             {homenewsdata.map((item, index) => (
        <React.Fragment key={index}>
{item.order == 1 ?
<div className="newsroom-grids">
<div className="bd-highlight" style={{backgroundImage: `url(${process.env.imgpath}/blogPost/${item.banner_img})`}}>
    <Link href={`${item.post_category.name.toLowerCase()}/${item.slug}`} className="newshome_content">
        <h3>{item.post_title}</h3>
        <div className="article_config">
            <span className="post_category">{item.post_category.name} - </span>
            <span className="post_publish">
            {new Date(item.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
        </div>
    </Link>
    </div>
    </div>
:''}

</React.Fragment>
))}
<div className="flex-column d-flex justify-content-between">
{homenewsdata.map((item, index) => (
    <React.Fragment key={index}>
{item.order == 2?
<div className="newsroom-grids">
    <div className="align-self-end bd-highlight sub-height"  style={{backgroundImage: `url(${process.env.imgpath}/blogPost/${item.banner_img})`}}>
       <Link href={`${item.post_category.name.toLowerCase()}/${item.slug}`} className="newshome_content">
        <h3>{item.post_title}</h3>
        <div className="article_config">
            <span className="post_category">{item.post_category.name} - </span>
            <span className="post_publish">
            {new Date(item.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
        </div>
    </Link>
    </div>
    </div>
    :''}
    </React.Fragment>
    ))}
{homenewsdata.map((item, index) => (
   <React.Fragment key={index}>
    {item.order == 3?
    <div className="newsroom-grids">
    <div className="align-self-end bd-highlight sub-height" style={{backgroundImage: `url('${process.env.imgpath}/blogPost/${item.banner_img}')`}}>
    <Link href={`${item.post_category.name.toLowerCase()}/${item.slug}`} className="newshome_content">
        <h3>{item.post_title}</h3>
        <div className="article_config">
            <span className="post_category">{item.post_category.name} - </span>
            <span className="post_publish">
            {new Date(item.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
        </div>
    </Link>    
    </div>
    </div>
     :''}
     </React.Fragment>
     ))}
</div>

<div className="flex-column d-flex justify-content-between">
{homenewsdata.map((item, index) => (
    <React.Fragment key={index}>
{item.order == 4?
<div className="newsroom-grids">
    <div className="align-self-end bd-highlight sub-height" style={{backgroundImage: `url('${process.env.imgpath}/blogPost/${item.banner_img}')`}}>
    <Link href={`${item.post_category.name.toLowerCase()}/${item.slug}`} className="newshome_content">
        <h3>{item.post_title}</h3>
        <div className="article_config">
            <span className="post_category">{item.post_category.name} - </span>
            <span className="post_publish">
            {new Date(item.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
        </div>
        </Link>
        </div>
        </div>
:''}
</React.Fragment>
))}
{homenewsdata.map((item, index) => (
    <React.Fragment key={index}>
{item.order == 5?
<div className="newsroom-grids">
    <div className="align-self-end bd-highlight sub-height" style={{backgroundImage: `url('${process.env.imgpath}/blogPost/${item.banner_img}')`}}>
    <Link href={`${item.post_category.name.toLowerCase()}/${item.slug}`} className="newshome_content">
        <h3>{item.post_title}</h3>
        <div className="article_config">
            <span className="post_category">{item.post_category.name} - </span>
            <span className="post_publish">
            {new Date(item.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
        </div>
    </Link>
    </div>
    </div>
:''}
</React.Fragment>
))}
</div>

{homenewsdata.map((item, index) => (
    <React.Fragment key={index}>
{item.order == 6?
<div className="newsroom-grids news-last-post">
<div className="bd-highlight" style={{backgroundImage: `url('${process.env.imgpath}/blogPost/${item.banner_img}')`}}>
    <Link href={`${item.post_category.name.toLowerCase()}/${item.slug}`} className="newshome_content">
        <h3>{item.post_title}</h3>
        <div className="article_config">
            <span className="post_category">{item.post_category.name} - </span>
            <span className="post_publish">
            {new Date(item.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
        </div>
    </Link>
    </div>
    </div>
    :''}
    </React.Fragment>
    ))}
    </div>
    )
}

export default HomeNewsRoom;