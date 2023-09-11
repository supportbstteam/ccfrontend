
import { useEffect,useState } from "react";
import InputField from "./Forms/InputField";
import Aos from 'aos';
function HomeForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    business: "",
    email: "",
    description: "",
    acceptCondition: false,
  });

  useEffect(()=>{
    Aos.init();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to your API here
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log("Form data submitted successfully");
      } else {
        // Handle error
        console.error("Form data submission failed");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    console.log(value);
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [id]: newValue,
    });
  };

  return (
<form className="draht-forms row" onSubmit={handleSubmit}> {/* data-aos="fade-up" data-aos-duration="2000" */} 
<div className="col-lg-6 col-md-6 col-sm-12 form-fields">
    <InputField
        label=""
        type="text"
        placeholder="Ihr Name *"
        onChage={handleInputChange}
        required="true"
        minLength={5}
        maxLength={20}
        id="from_name"
      />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
    <InputField
        label=""
        type="text"
        placeholder="Ihre Telefonnummer *"
        required="true"
        onChage={handleInputChange}
        minLength={5}
        maxLength={20}
        id="from_phonenumber"
      />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
    <InputField
        label=""
        type="text"
        placeholder="Ihr Unternehmen *"
        required="true"
        minLength={5}
        maxLength={20}
        id="form_business"
      />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 form-fields">
    <InputField
        label=""
        type="email"
        placeholder="Ihre E-Mail-Adresse *"
        required="true"
        minLength={5}
        maxLength={20}
        id="form_email"
      />
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 form-fields">
        <textarea rows={6} placeholder="Beschreiben Sie Ihr Vorhaben *"></textarea>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 form-fields check-fields">
      <InputField
        label="Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage verarbeitet werden. *"
        type="checkbox"
        placeholder=""
        required="true"
        minLength=''
        maxLength=''
        id="acceptcondition"
      />
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 submit-submission">
      <button type="submit" className="btn cc-button">POWER - NOW!</button>
      </div>
      </form>    
  );
}

export default HomeForm;