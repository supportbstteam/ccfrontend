import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { fetchData } from '@/apiConnection/apiService';
import RelatedPostGridList from "@/components/PostGrid/RelatedPostGrid";
function ArticleList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [postList, setpostList] = useState(null);
     useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/category-blog/podcast');
            setpostList(responseService);
          } catch (error) {
            setError(error);
            setLoading(false);
          } 
        }
        fetchDataFromAPI();
      }, []);
      // if (loading) {
      //   return <div>Loading...</div>;
      // }
    
      // if (error) {
      //   return <div>Error: {error.message}</div>;
      // }
    return (
        <Layout>
          <section className="post-category-banners">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="assets/images/post-banners.jpg" alt="Podcast"/>
      <div class="carousel-caption d-none d-md-block">
    <h1>Podcast</h1>
  </div>
    </div>
  </div>
</div>
</section>
            <section className="post-lists">
                <div className="container">
                    <div className="row">
                        { postList && postList.map((item, index) => (
            <RelatedPostGridList key={index} postdata={item}/>
            ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ArticleList;