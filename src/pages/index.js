import Image from 'next/image'
import { useEffect,useState } from 'react';
import SEO from '@/components/Seo';
import MainSlider from '@/components/Slider';
import Sections from '@/components/Section';
import { fetchData } from '@/apiConnection/apiService';
import Layout from '@/components/Layout';
export default function Home(props) {
  const [meta,setMeta] = useState(props.data);
  const [data, setData] = useState(null);
  const [sectionData, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseData = await fetchData('/slider'); // Replace '/data' with the API endpoint you want to fetch
        const responseSection = await fetchData('/section');
        setData(responseData);
        setSection(responseSection);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchDataFromAPI();
  }, []);
console.log(meta.metatitle);
  if (loading) {
    return <div className='preloading_view'>
      <img src='../../assets/images/loader.gif' className='img-fluid'/>
      <h2>Charge Construct</h2></div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Layout viewClass="home-page" title={meta.meta_title && meta.meta_title} metaDescription={meta.meta_desc && meta.meta_desc}>
   <MainSlider slider={data}/>
         {sectionData.map((Secdata, index) => (
        <Sections key={index} section={Secdata}/>
        ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    // Fetch data from an API or any other data source
    const response = await fetch(`${process.env.API_URL}/title-desc`);
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