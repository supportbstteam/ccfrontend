import InputField from "./Forms/InputField";
import { useState } from "react";

function Newsletter() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <form className="draht-forms newsletter-form row">
      <div className="col-lg-6 col-md-12 col-12">
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
      <div className="col-lg-6 col-md-12 col-12">
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
        <label htmlFor="acceptcondition" className="newsletter-mark" onClick={handleCheckboxChange}>
          <input
            placeholder=""
            id="acceptcondition"
            name="acceptcondition"
            type="checkbox"
            checked={isChecked}
          />
          <span className="checkmark"></span>
          <p>
            Ich kenne die Datenschutzrichtlinien und bin damit einverstanden E-Mails von Mawave zu erhalten. Du kannst deine Anmeldung jederzeit widerrufen. *
          </p>
        </label>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 submit-submission">
        <button type="submit" className="border-6 cc-button cc-transbutton subscribe-btn">
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default Newsletter;
