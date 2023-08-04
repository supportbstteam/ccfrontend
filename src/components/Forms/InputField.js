import React, { useState } from 'react';

const InputField = ({ label, type, placeholder, minLength, maxLength,id }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    validateInput(inputValue);
  };

  const validateInput = (inputValue) => {
    if (minLength && inputValue.length < minLength) {
      setError(`Muss mindestens ${minLength} Zeichen lang sein.`);
    } else if (maxLength && inputValue.length > maxLength) {
      setError(`Darf ${maxLength} Zeichen nicht überschreiten.`);
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
      />
      {label?<label htmlFor={id}>{label}</label>:''}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default InputField;
