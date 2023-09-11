import { useState,useEffect } from 'react';
import Button from '../Button';
Button
function Expertise(data){   
   const {  right_data_title,right_data_subtitle,right_data_description,right_data_btnlink} = data.secdata.section;

    return(
        <>
         <div className='offset-md-6 col-md-6 col-12 expertise_profit'>
                {right_data_title?<h2 className='col-title'>{right_data_title}</h2>:''}
                {right_data_subtitle?<h4 className='col-subtitle'>{right_data_subtitle}</h4>:''}
                {right_data_description?<p className='col-desciption'>{right_data_description}</p>:''}
                {/* {right_data_btnlink.title?<Button title={right_data_btnlink.title} link={right_data_btnlink.link}/>:''} */}
          </div>
        </>
    )
}

export default Expertise;