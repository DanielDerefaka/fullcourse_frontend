import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ImageDestination } from "./ImageDestination";
import axios from "axios";
import { HeadText, SubHeading } from "../Typography";
import { useEffect } from "react";
import { FlexContainer3 } from "../Layouts/Multiple";
import { FlatButton } from "../Buttons/FlatButton";
import { FlatButton2 } from "../Buttons/FlatButton2";

const ImageObject = ({ destination, getData }) => {
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [uploadId, setUploadId] = useState("");
  const [disable, setDisable] = useState(false);
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const [controls, setControls] = useState({
    uploadBtn: "upload",
  });

  const [loading, setIsLoading] = useState(false);

  const checkIdExist = async () => {
    //check localstorage if an entry exist
    const check = localStorage.getItem("productId");
    if (check === null) {
      return;
    }
    setUploadId(check);
  };
  useEffect(() => {
    checkIdExist();
  }, []);

  const onImageChange = (event) => {
    const { name } = event.target;
    if (event.target.files && event.target.files[0]) {
      const types = ["jpg", "png", "jpeg"];

      if (event.currentTarget.files.length === 0) {
        return;
      }

      //   let productFile = document.getElementById("product_image").files[0];
      const fileObj = event.target.files && event.target.files[0];

      let fileExtension = fileObj.name.split(".").pop();
      //console.log(productFile);
      // console.log("fileObj is", fileObj);

      if (!types.includes(fileExtension)) {
        return;
      }

      //console.log(productFile.size);
      if (fileObj.size > 1000000) {
        return;
      }

      switch (name) {
        case ImageDestination.Image1:
          setImg1(URL.createObjectURL(event.target.files[0]));
          setFile(event.target.files[0]);
          break;

        case ImageDestination.Image2:
          setImg2(URL.createObjectURL(event.target.files[0]));
          setFile2(event.target.files[0]);
          break;

        case ImageDestination.Image3:
          setImg3(URL.createObjectURL(event.target.files[0]));
          setFile3(event.target.files[0]);
          break;

        default:
      }
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // console.log(file);

    //check if files exist in

    if (!file && !file2 && !file3) {
      alert("cant upload, provide complete image");
      return;
    }

    setControls({ ...controls, uploadBtn: "uploading" });

    formData.append(ImageDestination.product_Image, file);
    formData.append(ImageDestination.product_Image2, file2);
    formData.append(ImageDestination.product_Image3, file3);

    setIsLoading(true);

    // try {
    //   // const res = await axios.post(
    //   //   API_URL2 + "/v1/product/add/product/image",
    //   //   formData
    //   // );
    //   console.log(res.data, "undefined");
    //   if (res.data.statusCode === 200) {
    //     localStorage.setItem("productId", res.data.data[0].productId);
    //     console.log("working perfectly");
    //     const pid = res.data.data[0].productId;
    //     setUploadId(pid);
    //   } else {
    //     setIsLoading(false);

    //     console.log("an error occured");
    //   }
    // } catch (err) {
    //   setIsLoading(false);

    //   console.log(err.response);
    // }
  };

  const ImageContainer = styled.div`
    min-width: 50%;
    min-height: 200px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    margin: 1.5rem 1rem;
    cursor: pointer;
  `;
  const Image = styled.img`
    object-fit: contain;
    max-width: 100%;
    height: 100%;
    cursor: pointer;
  `;
  return (
    <>
      <FlexContainer3 orientation={"column"} width={"80%"}>
        <FlexContainer3 orientation={"row"} width={"50%"}>
          <ImageContainer
            onClick={() => {
              // alert("onclick image");
              imageRef.current.click();
            }}
          >
            <input
              type={"file"}
              ref={imageRef}
              onChange={onImageChange}
              name="product_image"
            />

            <div>
              {img1 ? (
                <>
                  <Image src={img1} alt="image" />
                </>
              ) : (
                <>
                  <p> select image</p>
                  {/* <FontAwesomeIcon
                  icon={faImage}
                  size={"2x"}
                  cursor={"pointer"}
                /> */}
                </>
              )}
            </div>
          </ImageContainer>

          <ImageContainer
            onClick={() => {
              // alert("onclick image");
              imageRef2.current.click();
              // store.setProductImage(data2);
            }}
          >
            <input
              type={"file"}
              ref={imageRef2}
              onChange={onImageChange}
              name="product_image2"
            />

            <div>
              {img2 ? (
                <>
                  <Image src={img2} alt="image" />
                </>
              ) : (
                <>
                  <p>select image</p>
                  {/* <FontAwesomeIcon
                    icon={faImage}
                    size={"2x"}
                    cursor={"pointer"}
                  /> */}
                </>
              )}
            </div>
          </ImageContainer>

          <ImageContainer
            onClick={() => {
              // alert("onclick image");
              imageRef3.current.click();
              // store.setProductImage(data2);
            }}
          >
            <input
              type={"file"}
              ref={imageRef3}
              onChange={onImageChange}
              name="product_image3"
            />

            <div>
              {img3 ? (
                <>
                  <Image src={img3} alt="image" />
                </>
              ) : (
                <>
                  "item"
                  {/* <FontAwesomeIcon
                    icon={faImage}
                    size={"2x"}
                    cursor={"pointer"}
                  /> */}
                </>
              )}
            </div>
          </ImageContainer>
        </FlexContainer3>
        <FlexContainer3 marginTop={"3rem"} flexEnd orientation={"row"}>
          {uploadId ? (
            <FlexContainer3 orientation={"column"}>
              <HeadText color={"#333"}> Image uploaded successfully</HeadText>
              <FlexContainer3 centerAlign={"center"}>
                <HeadText>ProductID</HeadText>
                <SubHeading> {uploadId}</SubHeading>
              </FlexContainer3>
              <FlatButton2
                onClick={() => {
                  localStorage.removeItem("productId");
                  window.location.reload();
                }}
              >
                Discard
              </FlatButton2>
            </FlexContainer3>
          ) : (
            <>
              <FlatButton
                onClick={uploadImage}
                loading={loading}
                disabled={disable}
              >
                {controls.uploadBtn}
              </FlatButton>
              <FlatButton> cancel</FlatButton>
            </>
          )}
        </FlexContainer3>
      </FlexContainer3>
    </>
  );
};

export default ImageObject;
