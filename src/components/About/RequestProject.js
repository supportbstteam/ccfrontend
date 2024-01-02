import Button from "../Button";
import { useEffect,useState} from 'react';
import { fetchData } from '@/apiConnection/apiService';
function RequestProject(){

  const [secProject, setSecProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseSection = await fetchData('/project-request');
        setSecProject(responseSection);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, []);

  const reqbanner = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    //backgroundImage: `url('${process.env.imgpath}/blogPost/${secProject.banner_img}')`,
}

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
return(
    <section className="main-section errichet_section min-height" style={reqbanner}>
    <div className="container">
    <div className="row">
      <div className='col-lg-6 col-md-6 col-12'>
        <img src={`${process.env.imgpath}/request/logo/${secProject.logo}`} alt={secProject.title} className='w-50 mb-4'/>
        <h2 className='section-title'>{secProject.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: secProject.description }}></div>
        <Button link={`${secProject.btnlink}`} title={secProject.btntext} classs='no-arrow'/>
      </div>
      </div>
      </div>
    </section>
)
}

export default RequestProject;