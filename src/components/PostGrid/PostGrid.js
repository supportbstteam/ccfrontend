import Aos from "aos";
import { useEffect } from "react";
function GridPostList(){

  useEffect(()=>{
    Aos.init({duration: 1700});
},[])

    return(
        <div className="row card-post-grids">
               <div className="col-12">

                <div className="card mb-4" data-aos="fade-up"
     data-aos-duration="1100">
  <div className="row g-0">
    <div className="col-md-7 top-posts">
      <img src="../assets/images/newsroom/toppost.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-5 top-posts-card">
      <div className="card-body ">
      <p className="post-published"><span>Podcast</span>, <span>Dezember 12, 2022</span></p>
        <h4 className="card-title">Lorem ipsum dolore radum daresorium: 5 top lorem</h4>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
       <div className="posts-authors">
        <ul>
            <li><img src="../assets/images/newsroom/author-1.png"/></li>
            <li><img src="../assets/images/newsroom/author-2.png"/></li>
            <li>von John Doe</li>
            <li>John Doe</li>
        </ul>
       </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-4 col-sm-12 col-12" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
    <div className="card mb-3 post-card">
  <img src="../assets/images/newsroom/post-1.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="post-published"><span>Podcast</span>, <span>Dezember 12, 2022</span></p>
    <h5 className="card-title">Lorem ipsum dolore radum daresorium: 5 top lorem</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
    <p className="authors">Von John Doe, John Doe</p>
    </div>
</div>
</div>

<div className="col-md-4 col-sm-12 col-12" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="2000">
 <div className="card mb-3 post-card  middle-post">
  <img src="../assets/images/newsroom/post-2.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <p className="post-published"><span>Podcast</span>, <span>Dezember 12, 2022</span></p>
    <h5 className="card-title">Lorem ipsum dolore radum daresorium: 5 top lorem</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
    <p className="authors">Von John Doe, John Doe</p>
  </div>
</div>
</div>

<div className="col-md-4 col-sm-12 col-12" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="2500">
  <div className="card mb-3 post-card">
  <img src="../assets/images/newsroom/post-3.png" className="card-img-top" alt="..."/>
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