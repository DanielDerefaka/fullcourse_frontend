import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { next } from "../../features/add_property/addPropertySlice";
import { PROPERTY_IMAGE_UPLOAD_CALL } from "../../services/PropertyCalls";
import { FlatButton } from "../Buttons/FlatButton";

import { Container } from "../Layouts/Container";
import FlexContainer from "../Layouts/FlexContainer";
import { HeadText, SubHeading } from "../Typography";
import { ImageDestination } from "./ImageDestination";
import ImageObject from "./ImageObject";
const AddImage = () => {
  const [dummy, setDummy] = useState("");
  const [imgCollection, setImgCollection] = useState("");
  const [previous, setPrevious] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const exist = localStorage.getItem("image_id");

    if (exist) {
      setPrevious(exist);
      // window.location.reload();
    }
  }, []);
  const onFileChange = (e) => {
    setImgCollection(e.target.files);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!imgCollection) return;

    var formData = new FormData();
    //loop through the imgcollection

    for (const key of Object.keys(imgCollection)) {
      formData.append("imgCollection", imgCollection[key]);
    }

    //make network call
    // const response = await axios.post(
    //   "http://localhost:6414/api/v1/property/upload/image",
    //   formData
    // );

    const response = await PROPERTY_IMAGE_UPLOAD_CALL(formData);
    

    if (response.data.id && response.data.success) {
      localStorage.setItem("image_id", response.data.id);
      console.log("successful");
      toast("Image upload successful");
      dispatch(next());
    }

    if (!response.data.success) {
      toast("Image Upload failed");
    }

    console.log(response);
  };

  return (
    <Container>
      <FlexContainer orientation="row">
        <FlexContainer orientation="column" width={"80%"}>
          <HeadText> Property Images </HeadText>
          <SubHeading> You can upload only 3 images</SubHeading>

          <div>
            <form onSubmit={onSubmit}>
              <input
                type="file"
                name={"imgCollection"}
                onChange={onFileChange}
                multiple
              />

              <FlatButton type="submit"> Upload</FlatButton>
            </form>
          </div>
          {/* <ImageObject destination={ImageDestination.product_Image} /> */}
        </FlexContainer>

        <div>
          <HeadText>Tips</HeadText>

          <FlexContainer orientation={"column"}>
            <p>You can add one image at a time </p>
          </FlexContainer>
        </div>
      </FlexContainer>

      <ToastContainer />
    </Container>
  );
};

export default AddImage;
