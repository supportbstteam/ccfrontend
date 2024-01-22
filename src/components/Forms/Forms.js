import { useEffect, useState } from "react";
import Aos from 'aos';
function Forms(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isChecked, setChecked] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    buisness: "",
    email: "",
    description: "",
    acceptcondition: false
  });
  const [formData, setFormData] = useState({
    name: "",
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
    console.log('hii');
    e.preventDefault();
    console.log(formData);
    let isValid = true;
    const newErrors = { ...errors };
    // Define an array of required fields
    const requiredFields = ["name", "phone", "buisness", "email", "description", "acceptcondition"];
   
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
    if (types === 'checkbox') {
      // Toggle the checked state
      setChecked(!isChecked);
      setFormData({ ...formData, [id]: !isChecked });
    }
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

return(
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
        id="name"
        autoComplete="off"
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
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
<label htmlFor="acceptcondition" className="newsletter-mark" onClick={handleInputChange}>
<input type="checkbox"
  onChange={handleInputChange}
  placeholder=""
  required
  id="acceptcondition"
  autoComplete="off"
/>
<span className="checkmark"></span>
<p>Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage verarbeitet werden. *</p>
</label>
</div>
    {/* Submit button and error/success messages */}
    <div className="col-lg-12 col-md-12 col-sm-12 submit-submission">
      <button type="submit" className="main-btn border-6 cc-button cc-transbutton">
        POWER - ON NOW!
      </button>
      <span className="errorshowing">
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        {/* Render other error messages for respective fields similarly */}
      </span>
      <span className="successshowing"></span>
    </div>
  </form>
);
}

export default Forms;