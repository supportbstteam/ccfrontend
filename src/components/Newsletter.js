import InputField from "./Forms/InputField";
function Newsletter(){
    return(
        <form className="draht-forms newsletter-form row"> 
        <div className='col-lg-6 col-md-12 col-12'>
  <InputField
    label=""
    type="text"
    placeholder="Ihr Name *"
    required="true"
    minLength={5}
    maxLength={20}
    id="newsletter_form_name"
  />
   </div>
        <div className='col-lg-6 col-md-12 col-12'>
        <InputField
    label=""
    type="email"
    placeholder="Email Adresse *"
    required="true"
    minLength={5}
    maxLength={20}
    id="newsletter_form_mail"
  />
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 form-fields check-fields">
            <input placeholder="" id="acceptcondition" name="acceptcondition" type="checkbox"/>
            <label htmlFor="acceptcondition">Ich kenne die Datenschutzrichtlinien und bin. *</label>
        </div>
        </form>
    )
}

export default Newsletter;