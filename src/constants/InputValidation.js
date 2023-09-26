export const validate = (values, setError, errors) => {
  console.log(values);
  // validation for email
  if (!values.email) {
    setError({ ...errors, email: "invalid email" });
    return false;
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    setError({
      ...errors,
      email: "Not a valid email",
    });
    return false;
  }

  // validation for firstName
  if (!values.firstName) {
    setError({
      ...errors,

      firstName: "Required",
    });
    return false;
  }
  // validation for lastName
  if (!values.lastName) {
    setError({
      ...errors,

      lastName: "Required",
    });
    return false;
  }

  // validation for userClass
  if (!values.userClass) {
    setError({
      ...errors,

      userClass: "Required",
    });
    return false;
  }

  // validation for password
  if (!values.password) {
    setError({
      ...errors,

      password: "Password cannot be blank",
    });
    return false;
  }

  // validation for confirm password
  if (!values.confirm) {
    setError({
      ...errors,

      confirm: "required",
    });
    return false;
  }
  // check if the password matches the confirm password
  if (values.password !== values.confirm) {
    setError({
      ...errors,

      confirm: "Cannot be empty",
    });
    return false;
  }

  console.log(errors);
  //clear the error
  setError({});

  return true;
};
