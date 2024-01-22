import { useEffect, useState } from "react";
import Aos from 'aos';
import { fetchData } from "../apiConnection/apiService";
import Forms from "./Forms/Forms";
function HomeForm() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responsedetail = await fetchData('/get-contact'); // Replace '/data' with the API endpoint you want to fetch
        setValue(responsedetail);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, []);

  return (
    <section className="main-section main-form">
      <div className="container">
        <div className="row">
        <div className="col-12">
          {value.content && <div dangerouslySetInnerHTML={{__html: value.content}}></div>}
          </div>
          <Forms/>
        </div>
      </div>
    </section>
  );
}

export default HomeForm;
