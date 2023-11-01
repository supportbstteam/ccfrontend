import { useEffect, useState } from "react";
// import input from "./Forms/input";
import Aos from 'aos';

function HomeForm() {
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    buisness: "",
    email: "",
    description: "",
    acceptcondition: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    buisness: "",
    email: "",
    description: "",
    acceptcondition: false,
  });

  useEffect(() => {
    Aos.init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var errorElements = document.getElementsByClassName('errorshowing');
    var successElements = document.getElementsByClassName('successshowing');
    
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
        for (var i = 0; i < errorElements.length; i++) {
          errorElements[i].innerHTML = '';
        }
        for (var i = 0; i < successElements.length; i++) {
          successElements[i].innerHTML = 'Formulardaten erfolgreich übermittelt';
        }
      } else {
        // Handle error
        console.error("Das Absenden der Formulardaten ist fehlgeschlagen");
        for (var i = 0; i < errorElements.length; i++) {
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
    const ids = event.target.id;
    setValue(inputValue);
    validateInput(inputValue,types,ids);
  };

  const validateInput = (inputValue, types, id) => {
    const onlyLetters = /^[a-zA-Z ]*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (types === 'email') {
      if (!emailRegex.test(inputValue)) {
        setErrors({ ...errors, [id]: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' });
      } else {
        setErrors({ ...errors, [id]: '' });
        setFormData({ ...formData, [id]: inputValue });
      }
    } else if (types === 'number') {
      if (inputValue.length > 11) {
        setErrors({ ...errors, [id]: 'Bitte geben Sie eine gültige Telefonnummer ein.' });
      } else {
        setErrors({ ...errors, [id]: '' });
        setFormData({ ...formData, [id]: inputValue });
      }
    } else if (types === 'text') {
      if (!inputValue.match(onlyLetters)) {
        setErrors({ ...errors, [id]: 'Darf nur Buchstaben enthalten.' });
      } else {
        setErrors({ ...errors, [id]: '' });
        setFormData({ ...formData, [id]: inputValue });
      }
    } else {
      setErrors({ ...errors, [id]: '' });
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
    <form className="draht-forms row" onSubmit={handleSubmit}>
      <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
        <input
          label=""
          type="text"
          placeholder="Ihr Name *"
          onChange={handleInputChange}
          required={true}
          minLength={5}
          maxLength={20}
          id="name"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
        <input
          label=""
          type="number"
          placeholder="Ihre Telefonnummer *"
          required={true}
          onChange={handleInputChange}
          minLength={5}
          maxLength={20}
          id="phone"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
        <input
          label=""
          type="text"
          placeholder="Ihr Unternehmen *"
          required={true}
          onChange={handleInputChange}
          minLength={5}
          maxLength={20}
          id="buisness"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
        <input
          label=""
          type="email"
          placeholder="Ihre E-Mail-Adresse *"
          required={true}
          onChange={handleInputChange}
          minLength={5}
          id="email"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 form-fields">
        <textarea
          rows={6}
          placeholder="Beschreiben Sie Ihr Vorhaben *"
          onChange={handleDescriptionChange}
        ></textarea>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 form-fields check-fields">
        <input
          label="Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage verarbeitet werden. *"
          type="checkbox"
          onChange={handleInputChange}
          placeholder=""
          required={true}
          id="acceptcondition"
        />
        <label htmlFor="acceptcondition">Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage verarbeitet werden. *</label>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 submit-submission">
        <button type="submit" className="btn cc-button">
          POWER - NOW!
        </button>
        <span className="errorshowing"></span>
        <span className="successshowing"></span>
      </div>
    </form>
  );
}

export default HomeForm;
