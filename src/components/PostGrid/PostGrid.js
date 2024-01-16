import Aos from "aos";
import { useEffect, useState } from "react";
import Link from "next/link";
function GridPostList(props){
  //console.log('Details posts: '+JSON.stringify(props.postdata));
  const post_list = props.postdata;
  const [postdata,setPostData] = useState(post_list?post_list:'');
  const [categoryPostdata,setCategoryPostdata] = useState(postdata.post_category?postdata.post_category:'');
  useEffect(()=>{
    Aos.init({duration: 1700});
},[])
    return(
<div className="col-md-4 col-sm-12 col-12" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
      <Link className="card-title text-decoration-none" href={`/${categoryPostdata && categoryPostdata.name.toLowerCase()}/${postdata.slug && postdata.slug}`}>
    <div className="card mb-3 post-card">
    <div className="post-img">
  <img src={`${process.env.imgpath}/blogPost/${postdata.banner_img}`} className="card-img-top" alt={postdata.post_title}/>
  </div>
  <div className="card-body">
    <p className="post-published">{categoryPostdata.name && <span>{categoryPostdata.name}, </span>}<span>{new Date(postdata.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</span></p>
    <Link className="card-title text-decoration-none" href={`/${categoryPostdata && categoryPostdata.name.toLowerCase()}/${postdata.slug && postdata.slug}`}>
      <h4>{postdata.post_title}</h4>
    </Link>
    <p className="authors">{categoryPostdata.author && categoryPostdata.author.toUpperCase()}</p>
    </div>
</div>
</Link>
</div>
    )
}

export default GridPostList;