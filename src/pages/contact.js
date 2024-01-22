import { useEffect } from 'react';
import Aos from 'aos';
import HomeForm from '@/components/HomForm';
import Layout from '@/components/Layout';
import ContactDetails from '@/components/GeneralDetails/ContactDetails';
import Forms from '@/components/Forms/Forms';

function contactpag(){
    useEffect(()=>{
        Aos.init({duration: 1700});
    },[]);

    return(
        <Layout>
            <section className="main-section">
      <div className="container">
        <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
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

export default contactpag;