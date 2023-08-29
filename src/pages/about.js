import { useEffect,useState } from 'react';
import { fetchData } from '@/apiConnection/apiService';
import Tabs from '@/components/FounderTabs/Tabs';
import TeamLeiter from '@/components/Teamleiter';
import Aos from 'aos';
import HomeForm from '@/components/HomForm';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
function About() {
  const [pageData, setPageContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [employee,setEmployee] = useState(0);
  const [member,setMember] = useState(0);
  const [project,setProject] = useState(0);
  useEffect(() => { 
    document.querySelector("body").removeAttribute("class", '');
    document.querySelector("body").classList.add("about-template");
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (employee < 100) {
        setEmployee((prevEmployee) => prevEmployee + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [employee]);

    useEffect(()=>{
      Aos.init({duration: 1700});
  },[])

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  // useEffect(() => {
  //   async function fetchDataFromAPI() {
  //     try {
  //       const responseSection = await fetchData('/page_about');
  //       setPageContent(responseSection);
  //       console.log(pageData);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchDataFromAPI();
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

    return (
      <Layout title="About us">
    <section>
      <div className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../../assets/images/pages/about_banner.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div> 
</section>
<section className="main-section about_die" data-aos="fade-right">
  <div className="container">
    <div className="row">
      <div className="col-8">
        <h4>Die starke Kombination aus Experten aus verschiedensten Fachbereichen garantiert Ihnen die effektivste und effizienteste Umsetzung Ihres Ladeinfrastruktur Projekts, das versprechen wir. </h4>
      </div>
    </div>
  </div>
</section>

<section className="main-section about_who_we">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-1 offset-md-8 offset-md-1 col-12">
       <h2 className="section-title mb-4">Who We Are</h2>
      </div>
      <div className="col-12 justify-content-end d-flex" data-aos="fade-up">
      <iframe width="92%" height="515" src="https://www.youtube.com/embed/mCEob8Jyecw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  </div>
</section>

<section className="main-section why_we_exist" style={{backgroundImage : `url(../../assets/images/about_why.png)`}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-12 offset-lg-6 offset-md-6 offset-sm-6" data-aos="fade-left">
      <h2 className="section-title mb-4">Warum es uns gibt</h2>
      <p>
      Charge Construct ist entstanden, weil wir davon überzeugt sind, dass ein Wandel hin zu einer elektrischen Mobilität nur gelingen wird, wenn es eine flächendeckende Ladeinfrastruktur geben wird – und das besser heute als morgen. Die Errichtung von Ladeinfrastruktur bringt jedoch viele Herausforderungen und Fragestellen mit sich.
<br></br><br></br>
Wir haben verstanden, dass wir als unabhängiger Partner für unsere Kunden ganzheitliche Konzepte und Lösungen erarbeiten müssen, bei der Errichtung inkl. Tiefbau und Elektroinstallation unterstützen und anschließend den Betrieb, Wartung sowie Abrechnung der Ladeinfrastruktur sicherstellen.
<br></br><br></br>
Charge Construct – der One-Stop-Shop für ganzheitliche Ladelösungen. Unser Versprechen: Wir begleiten Sie von Anfang bis Ende und sind erst zufrieden, wenn Sie es auch sind!
      </p>
      </div>
    </div>
    </div>
    </section>

<section className="main-section our_values" style={{backgroundImage : `url(../../assets/images/cc_team.png)`}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-12 cc-left-col"  data-aos="fade-right">
      <h2 className="section-title mb-4">Unsere Werte bei Charge Construct</h2>
      <p>
      Bei Charge Construct kommen die richtigen Branchen zusammen.
<br></br><br></br>
Adrian hat über viele Jahre hinweg als Unternehmensberater bei der führenden Technologie- und Managementberatung P3 eine Vielzahl von Unternehmen beim Hochlauf der Elektromobilität unterstützt, bevor er innerhalb der Volkswagen AG (Elli) die Errichtung und den Betrieb von Ladeinfrastruktur für verschiedene Kundengruppen sichergestellt hat. So versteht und kennt er die Bedürfnisse und Anforderungen von kleineren Projekten wie Autohändlern oder großen Industrieprojekten wie das Laden von Elektrofahrzeugen an Werksstandorten bestens.
<br></br><br></br>
Dieses Branchenwissen ergänzt Tim durch jahrelange Erfahrung im Ausbau des Glasfasernetzwerks für diverse Telekommunikationsunternehmen. Dort war er verantwortlich für die Qualifizierung von Tiefbauunternehmen und stellte so die Umsetzung komplexer Projekte mit hoher Qualität sicher. Durch die Begleitung der Bauprojekte kennt Tim die Erfolgsfaktoren für eine erfolgreiche Realisierung von Infrastrukturvorhaben.
<br></br><br></br>
Zusammen sind Adrian und Tim die Köpfe hinter Charge Construct und stellen persönlich den Erfolg eines jeden Projekts sicher.</p>
      </div>
    </div>
    </div>
    </section>

    <section className="main-section meet_teams">
  <div className="container">
    <div className="row">
      <div className="col-12">
      <h2 className="section-title mb-4">Meet the team</h2>
      <div className='col-12'>
        <Tabs/>
      </div>
      {/* <div className="meet_teams_tab">
        <ul>
          <li><a><img src='../../assets/images/pages/team-9.png'/></a></li>
          <li><a><img src='../../assets/images/pages/team-10.png'/></a></li>
        </ul>
      </div> */}
      </div>
    </div>
    </div>
    </section>

    <section className="main-section teamleiter">
  <div className="container">
    <div className="row">
      <div className='col-12'>
        <TeamLeiter/>
      </div>
    </div>
    </div>
    </section>

<section className="main-section charge_zahlen">
  <div className="container">
    <div className="row">
      <div className="col-12">
      <h2 className="section-title mb-4">Charge Construct in Zahlen</h2>
      </div>

      <div className='col-lg-4 col-md-4 col-12 col-counter'>
        <div className='counter-box'>
          <h4>{employee}+</h4>
          <p>Mitarbeiter</p>
          <div className='added_details'>
        <h4>50%</h4>
          <p>schnellere Realisierung der Projekte als andere Wettbewerber</p>
        </div>
        </div>
        
      </div>
      
      <div className='col-lg-4 col-md-4 col-12 col-counter'>
      <div className='counter-box'>
          <h4>{employee}+</h4>
          <p>team members</p>
          <div className='added_details'>
        <h4>50%</h4>
          <p>schnellere Realisierung der Projekte als andere Wettbewerber</p>
        </div>
        </div>
       
      </div>
      
      <div className='col-lg-4 col-md-4 col-12 col-counter'>
      <div className='counter-box'>
          <h4>{employee}+</h4>
          <p>finalisierte Projekte</p>
        </div>
      </div>

      <div className='col-12'>
        <div className='stand_in'>
          <h4>3</h4>
          <p>Standorte in Deutschland</p>
        </div>
      </div>
    </div>
    </div>
    </section>

<section className="main-section usp_section about_usp">
    <div className="container">
    <div className="row">
      <div className="col-8 offset-2">
        <h4>Die starke Kombination aus Experten aus<br/>
        verschiedensten Fachbereichen garantiert Ihnen die<br/>
        effektivste und effizienteste Umsetzung Ihres<br/>
        Ladeinfrastruktur Projekts, das versprechen wir. </h4>
      </div>
      </div>
      </div>
    </section>

<section className="main-section errichet_section min-height">
    <div className="container">
    <div className="row">
      <div className='col-lg-6 col-md-6 col-12'>
        <img src='../../assets/images/erricht-logo.png' className='w-50 mb-4'/>
        <h2 className='section-title'>We Construct errichtet</h2>
        <p className='my-4'>Mit unserem Tochterunternehmen We Construct sorgen wir für eine reibungslose Realisierung der Ladeinfrastruktur Projekte, bei uns kommt alles aus einer Hand und daher können wir Deine Wünsche und Dein Feedback direkt in das Projekt problemlos miteinfließen lassen. </p>
        <Button link="#" title="Projekt anfragen" classs='no-arrow'/>
      </div>
      </div>
      </div>
    </section>

<section className="main-section">
    <div className="container">
    <div className="row">
      <div className='col-12'>
     <h2 data-aos="fade-up" className='section-title text-dark'>Ihr Draht zu uns</h2>
    <p className='text-dark section-desciption'>Sie haben individuelle Anforderungen an die Errichtung der Ladeinfrastruktur? Kein Problem! Wir helfen Ihnen weiter und erarbeiten ein für Sie passendes Konzept.
<br/>
<br/>
Schreiben Sie uns, oder rufen Sie uns an <a href='+4984149399122'>+49-841-49399122</a></p>
      </div>
    <div className='col-12'>
    <HomeForm/>
    </div>
    </div>
    </div>
    </section>
</Layout>
    );
  }

  export async function getServerSideProps() {
    try {
      // Fetch data from an API or any other data source
      const response = await fetch('http://localhost:3001/page_about');
      const data = await response.json(); // Parse the JSON content
       
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
     console.log(data[0].banner_img); // Log the fetched data
      
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

export default About;