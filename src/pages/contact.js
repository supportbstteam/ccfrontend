import { useEffect,useState } from 'react';
import Aos from 'aos';
import HomeForm from '@/components/HomForm';
import Layout from '@/components/Layout';
import ContactDetails from '@/components/GeneralDetails/ContactDetails';
import Forms from '@/components/Forms/Forms';

function contactpag(props){
    const [pageData, setPageData] = useState(props.data);
    useEffect(()=>{
        Aos.init({duration: 1700});
    },[]);

    return(
        <Layout title={pageData.meta_title} metaDescription={pageData.meta_desc}>
         { pageData.image &&  <section>
      <div className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={`${process.env.imgpath}/contact_image/${pageData.image}`} className="d-block w-100" alt="Contact Detail"/> 
    </div>
  </div>
</div> 
</section> }
  <section className="main-section">
      <div className="container">
        <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div dangerouslySetInnerHTML={{ __html: pageData.content }}></div>
        <Forms/>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <h2 className='text-dark mb-2'>Charge Construct Power On!</h2>
        <ContactDetails/>
        </div>
        </div>
        </div>
        </section>
        </Layout>
    )

}

export async function getServerSideProps() {
    try {
      // Fetch data from an API or any other data source
      const response = await fetch(`${process.env.API_URL}/contacts`);
      const data = await response.json(); // Parse the JSON content
       //console.log('hii testing tested...............................');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return {
        props: { data },
      };
    } catch (error) {
     // console.error('Error fetching data:', error);
      return {
        props: {
          data: null, // You can set a default value or handle errors as needed
        },
      };
    }
  }

export default contactpag;