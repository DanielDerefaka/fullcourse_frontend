import React, { useState } from "react";
import { InputTypes } from "../../constants/InputTypes";

const FormInput2 = ({ title, type, data, OnChange, value, name }) => {
  const [selected, setSelected] = useState("");
  switch (type) {
    case InputTypes.select:
      return (
        <div className="w3-third w3-padding">
          <label htmlFor="">{title || "title"}</label>

          <select onChange={OnChange} id={name} value={value} name={name}>
            {data ? (
              data.map((opt, index) => (
                <>
                  <option value={opt.value}>{opt.value}</option>
                </>
              ))
            ) : (
              <>
                <option value="">select</option>
              </>
            )}
          </select>
        </div>
      );
    case InputTypes.checkbox:
      return (
        <>
          <div className="w3-third w3-padding">
            <label htmlFor="">{title || "title"}</label>
            <input
              name={name}
              id={name}
              onChange={OnChange}
              type="text"
              value={value}
              className="w3-border w3-input w3-border-light-grey w3-round"
            />
          </div>
        </>
      );
    default:
      return (
        <>
          <div className="w3-third w3-padding">
            <label htmlFor="">{title || "title"}</label>
            <input
              id={name}
              name={name}
              onChange={OnChange}
              value={value}
              type="text"
              className="w3-border w3-input w3-border-light-grey w3-round"
            />
          </div>
        </>
      );
  }
};

export default FormInput2;
