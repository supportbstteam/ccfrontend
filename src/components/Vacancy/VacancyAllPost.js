function AllVacancy(tab){
  const  postsData = tab.tab;

return(
<div className="accordion" id={postsData.id} key={postsData.id} data-aos="fade-up" data-aos-duration="1200">
    <h3>{postsData.category}</h3>
  <div className="accordion-item border-0">
    <div className="accordion-header" id="headingTwo">
      <span className="accordion-button positions-details flex-column align-items-baseline vacancy-accordion collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#`+postsData.id+`a`} aria-expanded="false" aria-controls="collapseTwo">
     <h4>{postsData.title}</h4>
      <p><span>{postsData.profession}</span>, <span>{postsData.period}</span> . <span>{postsData.city}</span></p>
      </span>
    </div>
    <div id={postsData.id+`a`} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent={`#`+postsData.id}>
      <div className="accordion-body">
      <p className='vacancy-content px-1'>
        {postsData.content}
      </p>
       </div>
    </div>
  </div>
</div>
)
}

export default AllVacancy;