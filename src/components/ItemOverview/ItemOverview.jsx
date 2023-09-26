import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/cart/cartActions";
import { CurvedButton } from "../Buttons/CurvedButton";
import ItemHeading from "./ItemHeading";
const ItemOverview = ({ title, available, product_id }) => {
  const dispatch = useDispatch();
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div>
        <div className="">
          <h3 className="itemName">{title}</h3>

          <div>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              activeColor="#ffd700"
            />

            <div> 5.0 rating</div>

            <p>
              Availability
              <span className="itemName"> {available} available</span>
            </p>
          </div>

          <CurvedButton
            onClick={() =>
              dispatch(
                addCart({
                  product_id,
                  quantity: 1,
                })
              )
            }
          >
            {" "}
            Add to cart
          </CurvedButton>

          {/* AVAILABILITY */}

          <div></div>
        </div>
      </div>
    </>
  );
};

export default ItemOverview;
