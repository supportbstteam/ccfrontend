import { useEffect,useState } from "react";
import { fetchData } from '@/apiConnection/apiService';
function AboutPromise(){

    const [secPromise, setSecPromise] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchDataFromAPI() {
        try {
          const responseSection = await fetchData('/promise');
          console.log(responseSection);
          setSecPromise(responseSection);
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
        <section className="main-section usp_section about_usp">
    <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12 col-12" dangerouslySetInnerHTML={{__html: secPromise.description}}>
      </div>
      </div>
      </div>
    </section>
    )
}

export default AboutPromise;