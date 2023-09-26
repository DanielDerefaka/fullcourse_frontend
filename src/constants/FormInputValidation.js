export const FormInputValidate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "You must provide data";
  }

  if (!values.lastname) {
    errors.lastname = "You must provide data";
  }
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 3) {
    errors.username = "Username must be at 3 Length";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Required";
  } else if (values.confirm_password.length > 20) {
    errors.confirm_password = "Must be 20 characters or less";
  } else if (values.confirm_password !== values.password) {
    errors.confirm_password = "Password do not match";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
