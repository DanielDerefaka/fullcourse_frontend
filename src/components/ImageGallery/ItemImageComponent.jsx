import React from "react";

import Slider from "react-slick";
import image from "../../assets/images/estate.jpeg";
import { API_URL } from "../../constants/types";

const ItemImageComponent = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={`${API_URL}/${images}`} alt="sample image" height={300} />
        </div>
      </Slider>
    </div>
  );
};

export default ItemImageComponent;
