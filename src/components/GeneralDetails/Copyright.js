import { useEffect, useState } from 'react';
import { fetchData } from "@/apiConnection/apiService";
function CopyrightFooter(){
    const [footercopy, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const copyrightFooter = await fetchData('/copy-right'); // Replace '/data' with the API endpoint you want to fetch
        setData(copyrightFooter);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
    console.log(footercopy);
  }, []);
  return (
    <div className="row">
          <div className="col-12 text-center">
<div className="gloabl_rating">
    {footercopy && <div dangerouslySetInnerHTML={{ __html: footercopy.copyright}}/>}
            {/* <ul>
                <li><img src="../../assets/images/star.png"/></li>
                <li><img src="../../assets/images/star.png"/></li>
                <li><img src="../../assets/images/star.png"/></li>
                <li><img src="../../assets/images/star.png"/></li>
                <li><img src="../../assets/images/star.png"/></li>
                <li><span><a href="">1000 Bewertungen auf ProvenExpert.com</a></span></li>
            </ul>
            <p classname="copyright_txt">© 2023 Charge Construct GmbH</p> */}
            </div>
            </div>
</div>
  )
}
export default CopyrightFooter;