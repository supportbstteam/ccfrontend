import Aos from "aos";
import { useEffect } from "react";
function FaqList(faqs, ids){
    const {id}=ids;
    let que = faqs.faq;
    useEffect(()=>{
      Aos.init();
  },[])
    return (
        
        <div className="accordion-item" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#`+que.id} aria-expanded={id==0?'true':'false'} aria-controls={`#`+que.id}>
             <span>{que.question}</span>
            </button>
          </h2>
          <div id={que.id} className={id==0?'show':''+`accordion-collapse collapse`} aria-labelledby="headingOne" data-bs-parent="#faqlists">
            <div className="accordion-body">
              <p>{que.answer}</p>
            </div>
          </div>
        </div>
      
    );
}

export default FaqList;