import React from "react";
import { useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { API_URL } from "../../constants/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const PropertyOverview = ({ payload }) => {
  const { title, available, product_id, j_img } = payload;

  const images = JSON.parse(j_img);

  return (
    <>
      <div>
        <div className="">
          <h3 className="itemName">{title}</h3>
        </div>

        {images && images.length >= 1 ? (
          <Carousel>
            {images.map((image) => {
              return (
                <img src={`${API_URL}${image}`} alt="imagesrc" width={200} />
              );
            })}
          </Carousel>
        ) : (
          <> No image passed</>
        )}

        {/* <Carousel showArrows={false}>
          {images && images.length >= 1 ? (
            images.map((image) => {
              return <img src={image} alt="imagesrc" />;
            })
          ) : (
            <> No Image passed</>
          )}
        </Carousel> */}
      </div>
    </>
  );
};

export default PropertyOverview;
