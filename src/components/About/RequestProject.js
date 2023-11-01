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
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(secProject);
return(
    <section className="main-section errichet_section min-height">
    <div className="container">
    <div className="row">
      <div className='col-lg-6 col-md-6 col-12'>
        <img src='../../assets/images/erricht-logo.png' className='w-50 mb-4'/>
        <h2 className='section-title'>{secProject.title}</h2>
        <p className='my-4'>Mit unserem Tochterunternehmen We Construct sorgen wir für eine reibungslose Realisierung der Ladeinfrastruktur Projekte, bei uns kommt alles aus einer Hand und daher können wir Deine Wünsche und Dein Feedback direkt in das Projekt problemlos miteinfließen lassen. </p>
        <Button link="#" title="Projekt anfragen" classs='no-arrow'/>
      </div>
      </div>
      </div>
    </section>
)
}

export default RequestProject;