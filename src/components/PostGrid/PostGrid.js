import Aos from "aos";
import { useEffect } from "react";
function GridPostList(props){
const recom_blog = props.bloglist.recommendation_blog;
  const post_list = [
    {
    "id": 3,
     "title":"Lorem ipsum dolore radum daresorium: 5 top lorem",
     "post_img":"post-1.png",
     "post_category":"PODCAST",
     "post_data":"Dezember 12, 2022",
     "post_content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c"
   },
   {
    "id": 7,
     "title":"Lorem ipsum dolore radum daresorium: 5 top lorem",
     "post_img":"post-2.png",
     "post_category":"PODCAST",
     "post_data":"Dezember 12, 2022",
     "post_content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c"
   },
   {
    "id": 11,
     "title":"Lorem ipsum dolore radum daresorium: 5 top lorem",
     "post_img":"post-3.png",
     "post_category":"PODCAST",
     "post_data":"Dezember 12, 2022",
     "post_content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c"
   }
  ]
  useEffect(()=>{
    Aos.init({duration: 1700});
},[])

    return(
        <div className="row card-post-grids">
          {recom_blog.map((data) => (<span key={data}><h2>{data}</h2></span>))}
<div className="col-md-4 col-sm-12 col-12" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
    <div className="card mb-3 post-card">
    <div className="post-img">
  <img src="../assets/images/newsroom/post-1.png" className="card-img-top" alt="..."/>
  </div>
  <div className="card-body">
    <p className="post-published"><span>Podcast</span>, <span>Dezember 12, 2022</span></p>
    <h5 className="card-title">Lorem ipsum dolore radum daresorium: 5 top lorem</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
    <p className="authors">Von John Doe, John Doe</p>
    </div>
</div>
</div>
 </div>
    )
}

export default GridPostList;