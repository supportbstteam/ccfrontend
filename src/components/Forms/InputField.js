import React, { useState } from 'react';

const InputField = ({ label, type, placeholder, minLength, maxLength,id }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const types = event.target.type;
    setValue(inputValue);
    validateInput(inputValue,types);
  };

  const validateInput = (inputValue, types) => {
    const onlyLetters = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(inputValue) && types === 'email') {
      setError('Ungültige E-Mail-Adresse.');
    }
    else if (minLength && inputValue.length < minLength && !(types === 'email')) {
      setError(`Muss mindestens ${minLength} Zeichen lang sein.`);
    } else if (maxLength && inputValue.length > maxLength && !(types === 'email')) {
      setError(`Darf ${maxLength} Zeichen nicht überschreiten.`);
    } else if (!inputValue.match(onlyLetters) && !(types === 'email')) {
      setError('Darf nur Buchstaben enthalten.');
    } else {
      setError('');
    }
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={handleChange}
     required />
      {label?<label htmlFor={id}>{label}</label>:''}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default InputField;
