import { useState } from "react";

function Newsletter() {
  const [isChecked, setChecked] = useState(false);
  const [formDataNews, setformDataNews] = useState({
    name: "",
    email: "",
    subscribe: false,
  });
  
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subscribe: "",
  });
  
  const handleCheckboxChangeNews = () => {
    setChecked(!isChecked);
    setformDataNews({ ...formDataNews, subscribe: !formDataNews.subscribe });
    console.log(isChecked);
    setFormErrors({ ...formErrors, subscribe: "" });
  };

  const handleInputChange = (field, value) => {
    setformDataNews({ ...formDataNews, [field]: value });
    // Clear validation error when the user starts typing
    setFormErrors({ ...formErrors, [field]: "" });
  };

  const validateForm = () => {
    const errors = {};
  
    if (formDataNews.name.length < 5 || formDataNews.name.length > 20) {
      errors.name = "Der Name muss zwischen 5 und 20 Zeichen lang sein.";
    }
//console.log(formDataNews.email);
    if (!isValidEmail(formDataNews.email)) {
      errors.email = "Ungültige E-Mail.";
    }
  
    // Add email validation logic here
  
    if (!formDataNews.subscribe) {
      errors.subscribe = "Sie müssen die Bedingungen akzeptieren.";
    }
  
    setFormErrors(errors);
  
    return Object.keys(errors).length === 0;
  };

  function isValidEmail(email) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log('Entered Email: '+emailRegex.test(email));
    // Test the email against the regular expression
    return emailRegex.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log(formDataNews);
    if (validateForm()) {
      try {
        // Perform AJAX submission here
        // For example, using fetch or axios
        const response = await fetch(`${process.env.API_URL}/news-latter`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataNews),
        });
  
        // Handle the response as needed
        const successElements = document.getElementsByClassName('successshowing');
        for (let i = 0; i < successElements.length; i++) {
          successElements[i].innerHTML = 'Sie haben den Newsletter erfolgreich abonniert';
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      console.log("Form validation failed");
    }
  };
  
  return (
    <form className="draht-forms newsletter-form row" onSubmit={handleSubmit}>
      <div className="col-lg-6 col-md-12 col-12">
        <input
          label=""
          type="text"
          placeholder="Ihr Name *"
          minLength={5}
          maxLength={20}
          id="newsletter_form_name"
          value={formDataNews.name}
  onChange={(e) => handleInputChange("name", e.target.value)}
        />
        {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}
      </div>
      <div className="col-lg-6 col-md-12 col-12">
        <input
          label=""
          type="email"
          placeholder="Email Adresse *"
          id="newsletter_form_mail"
          value={formDataNews.email}
  onChange={(e) => handleInputChange("email", e.target.value)}
        />
        {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 form-fields check-fields">
        <label htmlFor="acceptcondition2" className="newsletter-mark newsform-mark m-0" onClick={handleCheckboxChangeNews}>
          <input
            placeholder=""
            id="acceptcondition"
            name="acceptcondition2"
            type="checkbox"
            onChange={handleCheckboxChangeNews}
            value={formDataNews.subscribe}
            checked={isChecked}
          />
          {formErrors.subscribe && <p style={{ color: 'red' }}>{formErrors.subscribe}</p>}
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
      <div className="successshowing"></div>
    </form>
  );
}

export default Newsletter;
