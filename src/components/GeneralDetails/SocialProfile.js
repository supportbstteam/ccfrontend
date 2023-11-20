import React, { useState, useEffect } from 'react';
import { fetchData } from '../../apiConnection/apiService';

function SocialProfile(props) {
  const [BarData, setBarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var st;
  if (props.type === 'follow') {
    st = 1;
  } else if (props.type === 'share') {
    st = 2;
  }
  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData(`/social-profile/${st}`);
        setBarData(responseService);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, [st]);

  if (props.type === 'follow') {
    return (
      <ul className="social-follow">
        {BarData
          ? BarData.map((item, index) => (
              <li key={item.id}>
                <a href={item.link}>
                  <img src={`${process.env.imgpath}/social/${item.logo_icon}`} alt={item.title} />
                  {props.accept === 'title' ? <span>{item.title}</span> : ''}
                </a>
              </li>
            ))
          : ''}
      </ul>
    );
  } else if (props.type === 'share') {
    return (
      <ul className="share-blogs">
         <li><h5>Share</h5></li>
        { BarData
          ? BarData.map((item, index) => (
    <React.Fragment key={item.id}>
      {item.title.toLowerCase()== 'linkedin'?<li key={item.id}><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.path}`} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" /></svg>
              </a></li>:''}

      {item.title.toLowerCase()== 'facebook'?<li>
                <a href={`https://www.facebook.com/sharer.php?u=${props.path}/`} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="33px" height="33px">    <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" /></svg>
                </a></li>:''}
      {item.title.toLowerCase()== 'twitter'?<li>
                <a href={`https://www.twitter.com/share?url=${props.path}`} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a></li>:''}
             </React.Fragment> ))
      :''}
      </ul>
    );
  } else {
    return null; // or fallback UI if props.type doesn't match 'follow' or 'share'
  }
}

export default SocialProfile;
