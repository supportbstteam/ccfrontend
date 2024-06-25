import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from '@/apiConnection/apiService';
import Layout from '@/components/Layout';

const SlugPage = ({ data }) => {
  const [secData, setSecData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    async function fetchDataFromAPI() {
      if (slug) {
        setLoading(true);
        try {
          const responseSection = await fetchData(`/template/${slug}`);
          if (!responseSection || Object.keys(responseSection).length === 0) {
            router.push('/404');
          } else {
            setSecData(responseSection);
            setLoading(false);
          }
        } catch (error) {
          setError(error);
          setLoading(false);
          router.push('/404'); // Redirect to 404 page on error
        }
      }
    }
    fetchDataFromAPI();
  }, [slug]);

  if (loading) {
    return <div className='preloading_view'>
      <img src='../../assets/images/loader.gif' className='img-fluid'/>
      <h2>Charge Construct</h2>
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Layout title={`${secData.metatitle}`} metaDescription={`${secData.metadescription}`}>
      {secData.banner && (
        <section>
          <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={`${process.env.imgpath}/main_banner/${secData.banner}`}
                  className="d-block w-100 template-section-banner"
                  alt={secData.title}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>{secData.pagename}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

   
      {secData.template_no === 1 && secData.section1 && secData.section1.map((section, index) => (
        <section className='dynamic-page-section' key={index}>
          <div className='container py-5'>
            <div className='row' data-value={`${section.direction}`}>
              {section.direction === 1 && section.image && (
                <div className='col-5'>
                  <img
                    src={`${process.env.imgpath}/create_page_image/${section.image}`}
                    className="d-block w-100 template-section-banner"
                    alt={secData.title}
                  />
                </div>
              )}
              <div className={`col-${section.image ? '7' : '12'}`}>
                <div className='sec-para' dangerouslySetInnerHTML={{ __html: section.description }}></div>
              </div>
              {section.direction === 2 && section.image && (
                <div className='col-5'>
                  <img
                    src={`${process.env.imgpath}/create_page_image/${section.image}`}
                    className="d-block w-100 template-section-banner"
                    alt={secData.title}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {secData.template_no === 1 && secData.section2 && (
        <section className='dynamic-page-section'>
          <div className='container py-5'>
            <div className='row' data-value={`${secData.section2[0].direction}`}>
              {secData.section2[0].direction1 === 1 && secData.section2[0].image1 && (
                <div className='col-5'>
                  <img
                    src={`${process.env.imgpath}/create_page_image/${secData.section2[0].image1}`}
                    className="d-block w-100 template-section-banner"
                    alt={secData.title}
                  />
                </div>
              )}
              <div className={`col-${secData.section2[0].image1 && secData.section2[0].direction1 ? '7' : '12'}`}>
                <div className='sec-para' dangerouslySetInnerHTML={{ __html: secData.section2[0].description1 }}></div>
              </div>
              {secData.section2[0].direction1 === 2 && secData.section2[0].image1 && (
                <div className='col-5'>
                  <img
                    src={`${process.env.imgpath}/create_page_image/${secData.section2[0].image1}`}
                    className="d-block w-100 template-section-banner"
                    alt={secData.title}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {secData.template_no === 2 && (
        <section className='dynamic-page-section'>
         <div className='container py-5'>
           <div className='row'>

           <div className="col-12">
                <div className='sec-para' dangerouslySetInnerHTML={{ __html: secData.section1[0].description }}></div>
            </div>

           </div>
           </div>
          </section>
      )}
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'example1' } },
    { params: { slug: 'example2' } },
  ];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const data = `This is the data for slug: ${slug}`;

  return {
    props: {
      data,
    },
  };
}

export default SlugPage;
