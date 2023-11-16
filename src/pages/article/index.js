import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { fetchData } from '@/apiConnection/apiService';
import GridPostList from "@/components/PostGrid/PostGrid";
function ArticleList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [postList, setpostList] = useState(null);
     useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/category-blog/article');
            setpostList(responseService);
          } catch (error) {
            setError(error);
            setLoading(false);
          } 
        }
        fetchDataFromAPI();
      }, []);
    return (
        <Layout>
            <section className="post-category-banners">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="assets/images/post-banners.jpg" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h1>Article</h1>
  </div>
    </div>
  </div>
</div>
</section>
            <section className="post-lists">
                <div className="container">
                    <div className="row">
                        { postList && postList.map((item, index) => (
            <GridPostList key={index} postdata={item}/>
            ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ArticleList;