import { useEffect, useState } from "react";
import Aos from 'aos';

function HomeForm() {
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState({
    iname: "",
    phone: "",
    buisness: "",
    email: "",
    description: "",
    acceptcondition: false
  });
  const [formData, setFormData] = useState({
    iname: "",
    phone: "",
    buisness: "",
    email: "",
    description: "",
    acceptcondition: false
  });

  useEffect(() => {
    Aos.init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };
    // Define an array of required fields
    const requiredFields = ["iname", "phone", "buisness", "email", "description", "acceptcondition"];
  
      // Validate each required field for emptiness
  requiredFields.forEach(key => {
    if (!formData[key] && key !== "acceptcondition") {
      newErrors[key] = `The ${key} field is required.`;
      isValid = false;
    }
  });
  
    // Check if any required field is empty
    if (!isValid) {
      setErrors(newErrors);
      return;
    }
  
    // Make a POST request to your API here
    try {
      const response = await fetch("http://teamwebdevelopers.com/charge_construct/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle success
        console.log("Formulardaten erfolgreich übermittelt");
        // Clear any previous errors and show success message
        setErrors({ ...errors, ...Object.fromEntries(Object.keys(newErrors).map(key => [key, ""])) });
        const successElements = document.getElementsByClassName('successshowing');
        for (let i = 0; i < successElements.length; i++) {
          successElements[i].innerHTML = 'Formulardaten erfolgreich übermittelt';
        }
      } else {
        // Handle error
        console.error("Das Absenden der Formulardaten ist fehlgeschlagen");
        const errorElements = document.getElementsByClassName('errorshowing');
        for (let i = 0; i < errorElements.length; i++) {
          errorElements[i].innerHTML = 'Das Absenden der Formulardaten ist fehlgeschlagen';
        }
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const types = event.target.type;
    const id = event.target.id;

    // Validation logic based on input type and value
    validateInput(inputValue, types, id);
  };

  const validateInput = (inputValue, types, id) => {
    //console.log(id+': '+inputValue);
    const onlyLetters = /^[a-zA-Z ]*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Update the error state based on validation
    if (types === 'email') {
      if (!inputValue || !emailRegex.test(inputValue)) {
        setErrors({ ...errors, [id]: !inputValue ? `Das Feld ${id} ist erforderlich.` : 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' });
      } else {
        setErrors({ ...errors, [id]: '' }); // Clear the error for this field
        setFormData({ ...formData, [id]: inputValue });
      }
    } else if (types === 'number') {
      if (!inputValue || inputValue.length > 11) {
        setErrors({ ...errors, [id]: !inputValue ? `Das Feld ${id} ist erforderlich.` : 'Bitte geben Sie eine gültige Telefonnummer ein.' });
      } else {
        setErrors({ ...errors, [id]: '' }); // Clear the error for this field
        setFormData({ ...formData, [id]: inputValue });
      }
    } else if (types === 'text') {
      if (!inputValue || !inputValue.match(onlyLetters)) {
        setErrors({ ...errors, [id]: !inputValue ? `Das Feld ${id} ist erforderlich.` : 'Darf nur Buchstaben enthalten.' });
      } else {
        setErrors({ ...errors, [id]: '' }); // Clear the error for this field
        setFormData({ ...formData, [id]: inputValue });
      }
    } else {
      setErrors({ ...errors, [id]: '' }); // Clear the error for this field
      setFormData({ ...formData, [id]: inputValue });
    }
  };

  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    setFormData({
      ...formData,
      description,
    });
  };

  return (
    <section className="main-section main-form">
      <div className="container">
        <div className="row">
        <div className="col-12">
            <h2 data-aos="fade-up" className="section-title text-dark">Ihr Draht zu uns</h2>
            <p className="text-dark section-desciption">Sie haben individuelle Anforderungen an 
            die Errichtung der Ladeinfrastruktur? Kein Problem! Wir helfen Ihnen weiter 
            und erarbeiten ein für Sie passendes Konzept.
            Schreiben Sie uns, oder rufen Sie uns
            an <a href="+4984149399122">+49-841-49399122</a></p>
          </div>
          <form className="draht-forms row" onSubmit={handleSubmit}>
            {/* Your form fields */}
            <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
              <input
                label=""
                type="text"
                placeholder="Ihr Name *"
                onChange={handleInputChange}
                minLength={5}
                maxLength={20}
                id="iname"
                autoComplete="off"
              />
              {errors.iname && <p style={{ color: 'red' }}>{errors.iname}</p>}
            </div>

            {/* Other input fields with similar error rendering logic */}
            
            <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
        <input
          label=""
          type="number"
          placeholder="Ihre Telefonnummer *"
          onChange={handleInputChange}
          minLength={5}
          maxLength={20}
          id="phone"
          autoComplete="off"
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
        <input
          label=""
          type="text"
          placeholder="Ihr Unternehmen *"
          onChange={handleInputChange}
          minLength={5}
          maxLength={20}
          id="buisness"
          autoComplete="off"
        />
        {errors.buisness && <p style={{ color: 'red' }}>{errors.buisness}</p>}
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
        <input
          label=""
          type="email"
          placeholder="Ihre E-Mail-Adresse *"
          onChange={handleInputChange}
          minLength={5}
          id="email"
          autoComplete="off"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 form-fields">
        <textarea
          rows={6}
          placeholder="Beschreiben Sie Ihr Vorhaben"
          onChange={handleDescriptionChange}
          autoComplete="off"></textarea>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 form-fields check-fields">
        <input
          label="Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage verarbeitet werden. *"
          type="checkbox"
          onChange={handleInputChange}
          placeholder=""
          required
          id="acceptcondition"
          autoComplete="off"
        />
        <label htmlFor="acceptcondition">Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage verarbeitet werden. *</label>
      </div>
            {/* Submit button and error/success messages */}
            <div className="col-lg-12 col-md-12 col-sm-12 submit-submission">
              <button type="submit" className="btn cc-button">
                POWER - NOW!
              </button>
              <span className="errorshowing">
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                {/* Render other error messages for respective fields similarly */}
              </span>
              <span className="successshowing"></span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HomeForm;
