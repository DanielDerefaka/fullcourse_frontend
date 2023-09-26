import React from "react";
import Dashcard from "../components/Dashcard";
import ProductList from "../components/ProductList";

const AdminDashboard = () => {
  return (
    <div className="body">
      <h4>Overview</h4>
      <div className="w3-row">
        <Dashcard icon={""} type={"Products"} quantity={"200"} />
        <Dashcard icon={""} type={"Property"} quantity={"63"} />
        <Dashcard icon={""} type={"Plot"} quantity={"90"} />
        <Dashcard icon={""} type={"Investment Plan"} quantity={"180"} />
      </div>
      <div className="w3-row">
        <div className="w3-half w3-padding">
          <h4 className="w3-padding">Add Products</h4>
          <form action="" className="w3-card w3-round">
            <div className="w3-row">
              <div className="w3-half w3-padding">
                <label htmlFor="">Name of item</label>
                <input
                  type="text"
                  className="w3-border w3-input w3-border-light-grey w3-round"
                />
              </div>
              <div className="w3-half w3-padding">
                <label htmlFor="">Category</label>
                <input
                  type="text"
                  className="w3-border w3-input w3-border-light-grey w3-round"
                />
              </div>
            </div>
            <div className="w3-row">
              <div className="w3-half w3-padding">
                <label htmlFor="">Quantity</label>
                <input
                  type="text"
                  className="w3-border w3-input w3-border-light-grey w3-round"
                />
              </div>
              <div className="w3-half w3-padding">
                <label htmlFor="">Amount</label>
                <input
                  type="text"
                  className="w3-border w3-input w3-border-light-grey w3-round"
                />
              </div>
            </div>
            <div className="w3-row">
              <div className="w3-half w3-padding">
                <label htmlFor="">Discount</label>
                <input
                  type="text"
                  className="w3-border w3-input w3-border-light-grey w3-round"
                />
              </div>
              <div className="w3-half w3-padding">
                <label htmlFor="">Product Details</label>
                <input
                  type="text"
                  className="w3-border w3-input w3-border-light-grey w3-round"
                />
              </div>
            </div>
            <div className="w3-row">
              <div className="w3-padding">
                <label htmlFor="">Discount</label>
                <textarea
                  name=""
                  id=""
                  className="w3-border w3-input w3-border-light-grey w3-round"
                ></textarea>
              </div>
            </div>
            <div className="w3-padding">
              <input
                type="submit"
                value="Add Products"
                className="w3-button w3-green w3-round"
              />
            </div>
          </form>
        </div>
        <div className="w3-half w3-padding">
          <h4 className="w3-padding">Product List</h4>
          <ProductList icon={""} description={"Bag of cement"} price={"500"} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
