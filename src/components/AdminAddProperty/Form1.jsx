import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { InputTypes } from "../../constants/InputTypes";
import { PropertyType, PurchaseType } from "../../data/SelectData";
import { addParams } from "../../features/add_property/addPropertySlice";
import { AddProperty } from "../../features/property/estateActions";
import AdminHeader from "../Header/AdminHeader";
import FormInput2 from "../Inputs/FormInput2";

const Form1 = () => {
  const store = useSelector((state) => state.new_property.parameters);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(value);

    dispatch(
      addParams({
        key: name,
        value,
      })
    );
    // switch (name) {
    //   case "name":
    //     setName(value);
    //     dispatch(
    //       addParams({
    //         key: name,
    //         value,
    //       })
    //     );

    //     break;
    //   case "type":
    //     setType();

    //   default:
    // }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(AddProperty(store));

    //validate input
  };
  return (
    <div>
      <h4>Add Property</h4>
      <form action="" className="w3-card w3-round" onSubmit={onSubmit}>
        <div className="w3-row">
          <FormInput2
            title={"Name of Property"}
            value={store.name}
            OnChange={handleOnChange}
            name={"name"}
          />

          <FormInput2
            title={"Property Type"}
            type={InputTypes.select}
            name={"type"}
            data={PropertyType}
            OnChange={handleOnChange}
            value={store.type}
          />
          <FormInput2
            title={"Purchase Type"}
            type={InputTypes.select}
            data={PurchaseType}
            name={"purchase_type"}
            OnChange={handleOnChange}
            value={store.purchase_type}
          />
        </div>
        <div className="w3-row">
          <FormInput2
            title={"Coordinates"}
            value={store.coordinates}
            name={"coordinates"}
            OnChange={handleOnChange}
          />
          <FormInput2
            title={"State"}
            type={InputTypes.select}
            OnChange={handleOnChange}
          />

          <FormInput2
            title={"City"}
            type={InputTypes.select}
            name={"city"}
            OnChange={handleOnChange}
          />
        </div>
        <div className="w3-row">
          <div className="w3-twothird">
            <FormInput2
              title={"Address"}
              value={store.address}
              OnChange={handleOnChange}
              name={"address"}
            />

            <FormInput2
              title={"Description"}
              value={store.description}
              OnChange={handleOnChange}
              name={"description"}
            />
          </div>
          <div className="w3-third w3-padding ">
            <label htmlFor="">Image</label>
            <div className="w3-padding-32 w3-border w3-border-light-grey w3-round">
              <input
                type="file"
                className=" w3-input w3-border-white w3-round"
              />
            </div>
          </div>
          <div className="w3-third w3-padding ">
            <label htmlFor="">Layout</label>
            <div className="w3-padding-32 w3-border w3-border-light-grey w3-round">
              <input
                type="file"
                className=" w3-input w3-border-white w3-round"
              />
            </div>
          </div>
        </div>
        <div className="w3-padding">
          <input
            type="submit"
            value="Add Property"
            className="w3-button w3-green w3-round"
          />
        </div>
      </form>
    </div>
  );
};

export default Form1;
