import { useEffect,useState } from "react";
import Aos from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/components/Button";
import HomeForm from "@/components/HomForm";
import { fetchData } from "../apiConnection/apiService";
import Layout from "@/components/Layout";
import NewReleasePost from "@/components/Newsroom/NewRelease";
import ProjectInsights from "@/components/Newsroom/ProjectInsights";
import Whitepaper from "@/components/Newsroom/WhitePaper";
import AllinSIghts from "@/components/Newsroom/AllSights";
import PostSlider from "@/components/Newsroom/PostSlider";
function NewsRoom(){
  const [secData, setSecData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    useEffect(()=>{
        Aos.init({duration: 1700});
    },[])

    useEffect(() => {
      async function fetchDataFromAPI() {
        try {
          const responseSection = await fetchData('/news-room');
          setSecData(responseSection);
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
        <Layout title="Charge Construct Newsroom" metaDescription="Wir errichten die Ladeinfrastruktur von und für morgen. Steckerfertig, ganzheitlich und aus einer Hand.">
        <section className="news-post-fillter bg-dark">
            <div className="container" data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000">
                <div className="row align-items-center py-3">
        <div className="col-12">
        <h5 className="text-white mb-0 text-center">“Entdecken Sie unsere Beiträge und seien Sie immer auf den neusten Stand”</h5>
        </div>     
        </div>
            </div>
        </section>
     <PostSlider/>

        <section className="main-section">
            <div className="container">
            <div className="col-12">
                <h2 className='section-title text-dark mb-5'  data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000">Neue Veröffentlichungen </h2>
                </div>
                <NewReleasePost/>
                </div>
                </section>
            <ProjectInsights/>

            <Whitepaper/>
    <section className="main-section min-height bg-dark d-flex align-items-center" data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <h2 className="section-title mb-4"> Who we are</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Button title="Ganzes Video anschauen" link="#"/>
                </div>
            </div>
        </div>
    </section>

    <section className="main-section all-insights">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <h2 className='section-title text-dark mb-5'>Alle Insights</h2>
                </div>
            </div>
           <AllinSIghts/>
        </div>
    </section>
  <HomeForm/>
        </Layout>
    )
}

export default NewsRoom;

export async function getServerSideProps() {
    try {

      // Fetch data from an API or any other data source
      const response = await fetch(`https://teamwebdevelopers.com/charge_construct/api/blogPost/`);
      const data = await response.json(); // Parse the JSON content
      //console.log("value of response "+response);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
       
      return {
        props: { data },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          data: null, // You can set a default value or handle errors as needed
        },
      };
    }
  }