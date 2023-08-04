import { useEffect } from 'react';
import ServiceCard from './CardService';
import Aos from 'aos';
import { Parallax, Background } from 'react-parallax';
import CustomerLogo from './CustomerLogo';
import HomeprojectTabs from './HomeProjectTabs';
import KundengruppenCard from './CardKundengruppen';
import BekanntLogo from './BekanntLogo';
import Expertise from './Home/Expertise';
import HomeNewsRoom from './HomeNews';
import HomeForm from './HomForm';
function Sections(data){
   // console.log(data);
   const { id, bg_img, title,subtitle,description,sec_type,bg_color} = data.section;
   const sliderbg = {
    backgroundImage: `url('assets/images/${bg_img}')`,
}
const expertise = {
    backgroundImage: `url('assets/images/${bg_img}'),url ('assets/images/${bg_img}')`,
    backgroundPosition: 'left top, right top',
    backgroundRepeat: 'no-repeat, no-repeat'
}
useEffect(()=>{
    Aos.init({duration: 1700});
},[])

    //const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return(
        <Parallax
        bgImage={`assets/images/${bg_img}`}
        bgImageAlt=""
        strength={250}
    >
<section className={`main-section home-sections ${sec_type}`}>
  
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                {title?<h2 data-aos="fade-up" className='section-title'>{title}</h2>:''}
                {subtitle?<h4 data-aos="fade-up" className='section-subtitle'>{subtitle}</h4>:''}
                {description?<p data-aos="fade-up" className='section-desciption'>{description}</p>:''}
                    
                </div>
                {sec_type==='service_sec'?(
                    <ServiceCard/>
                ):(<></>)}
                {sec_type==='kundengruppen_sec'?(
                    <KundengruppenCard/>
                ):(<></>)}
                {sec_type==='bekannt_sec'?(
                    <BekanntLogo/>
                ):(<></>)}
                {sec_type==='project_insight'?(
                    <HomeprojectTabs/>
                ):(<></>)}
                {sec_type==='expertise_section'?(
                    <Expertise secdata={data}/>
                ):(<></>)}
                {sec_type==='OurCustomer_section'?(
                    <CustomerLogo />
                ):(<></>)}
                
                {sec_type==='newsroom_section'?(
                   <HomeNewsRoom/>
                ):(<></>)}
                {sec_type==='homeform_section'?(
                   <HomeForm/>
                ):(<></>)}
                
            </div>
        </div>
     
        </section>
        </Parallax>
    )
}

export default Sections;