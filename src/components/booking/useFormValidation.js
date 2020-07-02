import React from "react";

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

  function myNewBooking() {
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      return {
        firstname: values.firstname,
        lastname: values.lastname,
        diningDate: values.diningDate,
        numberOfCovers: values.numberOfCovers,
        email: values.email,
        phoneNumber: values.phoneNumber,
      };
    } else {
      return null;
    }
  }

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    myNewBooking,
  };
}

export default useFormValidation;
