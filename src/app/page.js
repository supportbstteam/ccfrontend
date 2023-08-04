"use client"
import Image from 'next/image'
import { useEffect,useState } from 'react';
import styles from './page.module.css'
import SEO from '@/components/Seo';
import MainSlider from '@/components/Slider';
import Sections from '@/components/Section';
import { fetchData } from '@/apiConnection/apiService';
export default function Home() {

   const [data, setData] = useState(null);
  const [sectionData, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.querySelector("body").classList.add("home-template")
    document.querySelector("body").removeAttribute("class", '');
    async function fetchDataFromAPI() {
      try {
        const responseData = await fetchData('/sliders'); // Replace '/data' with the API endpoint you want to fetch
        const responseSection = await fetchData('/sections');
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

  if (loading) {
    return <div className='preloading_view'>
      <img src='../../assets/images/loader.gif' className='img-fluid'/>
      <h2>Charge Construct</h2></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
     
    <main className={styles.main}>
        <MainSlider slider={data}/>
         {/* Render the fetched data here */}
         {sectionData.map((Secdata, index) => (
        <Sections key={index} section={Secdata}/>
        ))}
    </main>
  
    </>
  )
}
