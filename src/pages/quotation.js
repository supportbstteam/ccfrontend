import { useEffect,useState } from 'react';
import Aos from 'aos';
import { fetchData } from "../apiConnection/apiService";
import Layout from '@/components/Layout';
import QuotationSection from '@/components/Quotations/Quotationsection'
const sliderbg = {
    backgroundImage: `url('../../assets/images/quotation/quotation-banner.jpg')`,
}
function quotationContent(){
    const [secData, setSecData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        Aos.init({duration: 1700});
    },[])
    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseSection = await fetchData('/page-quotation');
            setSecData(responseSection[0]);
            setLoading(false);
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

    return(
        <Layout title={secData.meta_title} metaDescription={secData.meta_description}>
      {secData && <section className='main-section d-flex align-items-center quotation-banner ' style={sliderbg}>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-7 col-md-7 col-12'>
      <div className="banner-content" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1000">
       {secData.title && <h1>{secData.title}</h1> }
       {secData.description && <div dangerouslySetInnerHTML={{ __html: secData.description }}></div>}
         </div>
        </div>
        </div>

  </div>
  </section>}
<QuotationSection/>
</Layout>
    )

}

export default quotationContent;