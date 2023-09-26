import React, { useRef, useState } from "react";

import axios from "axios";
import { FlexContainer3 } from "../Layouts/Multiple";

const ImageObject = ({}) => {
  const [files, setFiles] = useState([]);
  const onChange = (e) => {
    console.log(e.target.files);
    setFiles(e.target.files);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.values(files).forEach((file) => {
      formData.append("uploadImages", file);
    });

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
  return (
    <>
      <FlexContainer3 orientation={"column"} width={"80%"}>
        <FlexContainer3 orientation={"row"} width={"50%"}>
          <form onSubmit={onSubmit}>
            <input
              type="file"
              id="file"
              name="uploadImages"
              multiple
              onChange={onChange}
            />

            <input type="submit" value="Upload" />
          </form>
        </FlexContainer3>
      </FlexContainer3>
    </>
  );
};

export default ImageObject;
