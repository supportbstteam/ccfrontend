import GridPostHorizontal from "@/components/PostGrid/PostHorizontal";
import GridPostList from "@/components/PostGrid/PostGrid";
import { fetchData } from "../../apiConnection/apiService";
import { useState, useEffect } from 'react';
function AllinSIghts(){

    const [AllInSightsdata, setAllInSightsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responsehomenews = await fetchData('/homeBlogPost'); // Replace '/data' with the API endpoint you want to fetch
            setAllInSightsData(responsehomenews);
            console.log(AllInSightsdata);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
        fetchDataFromAPI();
      }, []);

    return(
<div className="row card-post-grids">
{AllInSightsdata.length && AllInSightsdata.slice(0, 7).map((item, index) => (
        index === 3 || index === 7 ? <GridPostHorizontal key={item.id} postdata={item} /> : <GridPostList key={item.id} postdata={item} />
      )) || []}

        {/* <GridPostHorizontal/>
        <GridPostList/>
        <GridPostHorizontal/>
        <GridPostList/> */}
        </div>
    )
}

export default AllinSIghts