import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Container, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_URL } from "../../constants/types";
import { next } from "../../features/add_property/addPropertySlice";
import { FlatButton } from "../Buttons/FlatButton";
import { FlatButton2 } from "../Buttons/FlatButton2";
import FormInput from "../Inputs/FormInput";
import AddImage from "./AddImage";

const AddProperty = () => {
  const { stage } = useSelector((state) => state.new_property);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    condition: "NEW",
    property_id: localStorage.getItem("image_id"),
  });
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const image_id = localStorage.getItem("image_id");
    if (image_id !== null || image_id !== "") {
      dispatch(next());
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();

    //simple validation

    // await setValues({
    //   ...values,
    //   property_id: localStorage.getItem("user_id"),
    // });

    const response = await axios.put(
      `${API_URL}/api/v1/property/complete`,
      values
    );

    console.log(response);

    if (!response.data.success) {
      toast("Upload was not successful");
      return;
    }

    toast("Product Added successfully");
    //remove image_id
    localStorage.removeItem("image_id");
    navigate("/dashboard");
  };
  return (
    <>
      {stage === 0 && localStorage.getItem("image_id") === null && <AddImage />}
      {stage === 1 && (
        <>
          <Container>
            <form onSubmit={onSubmit}>
              <FormGroup>
                <FormInput
                  title={"Property Title"}
                  value={values.name}
                  id={"name"}
                  onChange={handleOnChange}
                  type="text"
                />

                <FormInput
                  title={"State"}
                  value={values.state}
                  id={"state"}
                  onChange={handleOnChange}
                  type="text"
                />

                <FormInput
                  title={"City"}
                  value={values.city}
                  id={"city"}
                  onChange={handleOnChange}
                  type="text"
                />

                <FormInput
                  title={"Where is the Property Located?"}
                  value={values.address}
                  id={"address"}
                  onChange={handleOnChange}
                  type="text"
                />

                <FormInput
                  title={"Description?"}
                  value={values.description}
                  id={"description"}
                  onChange={handleOnChange}
                  type="text"
                />

                <FormInput
                  title={"CONDITION (NEW, OLD)"}
                  value={values.condition}
                  id={"condition"}
                  onChange={handleOnChange}
                  type="text"
                />

                <FormInput
                  title={"Property Size?"}
                  value={values.property_size}
                  id={"property_size"}
                  onChange={handleOnChange}
                  type="text"
                />

                <FormInput
                  title={"Specifications?"}
                  value={values.specifications}
                  id={"specifications"}
                  onChange={handleOnChange}
                  type="text"
                />

                <FormInput
                  title={"Property Value(N)"}
                  value={values.price}
                  id={"price"}
                  onChange={handleOnChange}
                  type="number"
                />
                <FormInput
                  title={" No of BEDROOMS"}
                  value={values.bedrooms}
                  id={"bedrooms"}
                  onChange={handleOnChange}
                  type="number"
                />
                <FormInput
                  title={" NO OF BATHROOMS"}
                  value={values.bathrooms}
                  id={"bathrooms"}
                  onChange={handleOnChange}
                  type="number"
                />
              </FormGroup>

              <FlatButton type="submit"> Submit</FlatButton>
            </form>
          </Container>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default AddProperty;
