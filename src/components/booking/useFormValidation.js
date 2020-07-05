import React from "react";

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

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
  function myNewBooking() {
    const validationErrors = validate(values);
    if (validationErrors.length === 0) {
      return {
        firstname: values.firstname,
        lastname: values.lastname,
        diningDate: values.diningDate,
        numberOfCovers: values.numberOfCovers,
        email: values.email,
        phoneNumber: values.phoneNumber,
      };
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (validationErrors.length === 0) {
      return 1;
    }
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
