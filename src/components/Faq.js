import Aos from "aos";
import { useEffect,useState } from "react";
function FaqList(faqs, ids){
    const {id}=ids;
    let que = faqs.faq;

    const [activeFaq, setactiveFaq] = useState(false);

    function toggleOpened(ids){
      setactiveFaq(!activeFaq);
    }

    useEffect(()=>{
      Aos.init();
  },[])
    return (
        <div className="accordion-item" data-aos="fade-up" data-aos-duration="1500" onClick={() =>toggleOpened(que.id)}>
          <h2 className="accordion-header" id="headingOne">
            <button className={"accordion-button " + (activeFaq?'':'collapsed')} type="button" data-bs-toggle="collapse" data-bs-target={`#`+que.id} aria-expanded={activeFaq?'true':'false'} aria-controls={`#`+que.id}>
             <span>{que.question}</span>
            </button>
          </h2>
          <div id={que.id} className={activeFaq?'show':''+`accordion-collapse collapse`} aria-labelledby="headingOne" data-bs-parent="#faqlists">
            <div className="accordion-body">
              <p>{que.answer}</p>
            </div>
          </div>
        </div>
    );
}

export default FaqList;