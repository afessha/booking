export default function validateAuth(values) {
  let errors = {};
  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // lastname Errors
  if (values.lastname.length === 0) {
    errors.lastname = "Required lastname";
  } else if (values.lastname.length < 2) {
    errors.lastname = "lastname must be atleast two letters";
  }

  //phoneNumber errors
  if (values.phoneNumber.length < 10) {
    errors.phoneNumber = "Phone number should be at least 10 numbers long";
  }
  return errors;
}
