import { useEffect } from 'react';
import Aos from 'aos';
import HomeForm from '@/components/HomForm';
import Layout from '@/components/Layout';

function contactpag(){
    useEffect(()=>{
        Aos.init({duration: 1700});
    },[]);

    return(
        <Layout>
        <HomeForm/>
        </Layout>
    )

}

export default contactpag;