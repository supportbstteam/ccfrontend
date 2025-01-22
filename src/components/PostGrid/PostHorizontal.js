import { useState } from "react";
import Link from "next/link";
function GridPostHorizontal(props){
    // console.log('Details posts: '+JSON.stringify(props.postdata));
    const post_view = props.postdata;
    const [Horpostdata,setHorPostData] = useState(post_view?post_view:'');
    const [categorydata,setCategoryData] = useState(Horpostdata.post_category?Horpostdata.post_category:'');
    const sliderbg = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${process.env.imgpath}/blogPost/${Horpostdata.banner_img}')`,
    }
    
    return(
             <div className="col-12">
                <Link className="card-title text-decoration-none" href={`blog/${Horpostdata.slug}`}>
<div className="card mb-4" data-aos="fade-up"
data-aos-duration="1100">
<div className="row g-0 miin-height ">
<div className="col-md-7 top-posts post-main-custom">
<img src={`${process.env.imgpath}/blogPost/${Horpostdata.banner_img}`}/></div>
<div className="col-md-5 top-posts-card">
<div className="card-body ">
<p className="post-published"><span>{categorydata.name}</span>, <span>{new Date(Horpostdata.post_date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</span></p>
<h5>{Horpostdata.post_title}</h5>
{/* <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p> */}
<div className="posts-authors">
<ul>
<li>{categorydata.author && categorydata.author.toUpperCase()}</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</Link>
</div>
    )
}
export default GridPostHorizontal;