import React from "react";

const FormInput = ({ title, type, value, onChange, id }) => {
  return (
    <>
      <label htmlFor={id}>
        <b>{title || "title"}</b>
      </label>
      <input
        type={type || "text"}
        value={value}
        id={id}
        name={id}
        onChange={onChange}
        className="form-control w3-border w3-round w3-white w3-margin-bottom"
      />
    </>
  );
};

export default FormInput;
