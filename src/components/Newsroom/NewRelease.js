import React, { useEffect, useState } from "react";
import { fetchData } from "../../apiConnection/apiService";
import GridPostHorizontal from "../PostGrid/PostHorizontal";
import GridPostList from "../PostGrid/PostGrid";
// interface release {
//     id:Number
// }

function NewReleasePost() {
  const [newRelease, setNewRelease] = useState([]);
//   const [subuserData, setsubuserData] = React.useState<release[]>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Initialize error state to null

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const newresponse = await fetchData('/homeBlogPost').then(setLoading(false));
        setNewRelease(newresponse);
        //setLoading(false);
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
  return (
    <>
    <div className="row card-post-grids">
      {newRelease.length && newRelease.map((item, index) => (
        index === 0 ? <GridPostHorizontal key={item.id} postdata={item} /> : <GridPostList key={item.id} postdata={item} />
      )) || []}
      </div>
    </>
  );
}

export default NewReleasePost;
