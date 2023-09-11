import { useEffect } from 'react';
import ServiceCard from './CardService';
import Aos from 'aos';
import HomeprojectTabs from './HomeProjectTabs';
import KundengruppenCard from './CardKundengruppen';
import BekanntLogo from './BekanntLogo';
import Expertise from './Home/Expertise';
import HomeNewsRoom from './HomeNews';
import HomeForm from './HomForm';
import ChartsBar from './Home/ChartsBar';
import { useParallax } from "react-scroll-parallax";
import Button from './Button';
function Sections(data){
   // console.log(data);
   const { id, bg_img, title,subtitle,description,sec_type,bg_color} = data.section;
   const sliderbg = {
    // Check if bg_img exists, and if it does, set backgroundImage
  ...(bg_img ? { backgroundImage: `url(https://teamwebdevelopers.com/charge_construct/public/images/section/${bg_img})` } : {backgroundColor: bg_color}),
  // If bg_img doesn't exist, set backgroundColor
  //...(bg_img ? {} : { backgroundColor: '#fff' }),
}
const expertise = {
    backgroundImage: `url('https://teamwebdevelopers.com/charge_construct/public/images/section/${bg_img}'),url ('https://teamwebdevelopers.com/charge_construct/public/images/section/${bg_img}')`,
    backgroundPosition: 'left top, right top',
    backgroundRepeat: 'no-repeat, no-repeat'
}


  
useEffect(()=>{
   // Aos.init({duration: 1700});
},[])

    //const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return(
<section className={`main-section home-sections ${sec_type}`} style={sliderbg} >

        <div className='container'>
            <div className='row'>
                <div className={sec_type==='expertise_section'?"offset-md-6 col-md-6 col-12 expertise_profit":"col-12"}>
                {title?<h2 className='section-title'>{title}</h2>:''} {/* data-aos="fade-up" */}
                {subtitle?<h4 className='section-subtitle' data-aos="fade-up">{subtitle}</h4>:''}
                
                {description?<p className='section-desciption' data-aos="fade-up" dangerouslySetInnerHTML={{ __html: description }}></p>:''}
                    
                </div>
                {sec_type==='team_banner'?(
                    <Button classs="no-arrow zum-team" title="Zum Team" link="/"/>
                ):(<></>)}
                {sec_type==='service_second'?(
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
                {/* {sec_type==='expertise_section'?(
                    <Expertise secdata={data}/>
                ):(<></>)} */}
                {/* {sec_type==='OurCustomer_section'?(
                    <CustomerLogo />
                ):(<></>)} */}
                {sec_type==='barchats_section'?(
                    <ChartsBar />
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
    )
}

export default Sections;