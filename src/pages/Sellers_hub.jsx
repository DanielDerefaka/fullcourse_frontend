import React from "react";
import FormInput from "../components/Inputs/FormInput";
import ImgFile from "../components/Inputs/ImgFile";
import estate from "../assets/images/estate.jpeg";

const Sellers_hub = () => {
  return (
    <div className="container">
      <div>
        <div className="py-5">
          <h5>Add Property</h5>
        </div>
        <form action="">
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <FormInput title="Name" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <FormInput title="Category" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <FormInput title="Quantity" type="number" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <FormInput title="Amount" type="number" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <FormInput title="Discount" type="number" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <FormInput title="Location" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormInput title="Product Details" />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <FormInput title="Image" type="file" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 form-group">
              <label htmlFor="">
                <b>Description</b>
              </label>
              <textarea className="form-control w3-border"></textarea>
            </div>
          </div>
          <div className="">
            <input
              type="submit"
              value="Add Property"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
      <div className="py-2">
        <div className="py-4">
          <h5>Show Properties </h5>
        </div>
        <div className="p-2 my-3 shadow w3-responsive">
          <table className="table table-striped w-100 ">
            <thead style={{ background: "#4caf50", color: "white" }}>
              <tr>
                <th>S/N</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Discount</th>
                <th>Location</th>
                <th>Product Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S/N</td>
                <td>
                  <div style={{ width: "50px" }}>
                    <ImgFile src={estate} classes="img-fluid rounded" />
                  </div>
                </td>
                <td>Name</td>
                <td>Category</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Discount</td>
                <td>Location</td>
                <td>Product Details</td>
              </tr>

              <tr>
                <td>S/N</td>
                <td>
                  <div style={{ width: "50px" }}>
                    <ImgFile src={estate} classes="img-fluid rounded" />
                  </div>
                </td>
                <td>Name</td>
                <td>Category</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Discount</td>
                <td>Location</td>
                <td>Product Details</td>
              </tr>
              <tr>
                <td>S/N</td>
                <td>
                  <div style={{ width: "50px" }}>
                    <ImgFile src={estate} classes="img-fluid rounded" />
                  </div>
                </td>
                <td>Name</td>
                <td>Category</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Discount</td>
                <td>Location</td>
                <td>Product Details</td>
              </tr>
              <tr>
                <td>S/N</td>
                <td>
                  <div style={{ width: "50px" }}>
                    <ImgFile src={estate} classes="img-fluid rounded" />
                  </div>
                </td>
                <td>Name</td>
                <td>Category</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Discount</td>
                <td>Location</td>
                <td>Product Details</td>
              </tr>
              <tr>
                <td>S/N</td>
                <td>
                  <div style={{ width: "50px" }}>
                    <ImgFile src={estate} classes="img-fluid rounded" />
                  </div>
                </td>
                <td>Name</td>
                <td>Category</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Discount</td>
                <td>Location</td>
                <td>Product Details</td>
              </tr>
              <tr>
                <td>S/N</td>
                <td>
                  <div style={{ width: "50px" }}>
                    <ImgFile src={estate} classes="img-fluid rounded" />
                  </div>
                </td>
                <td>Name</td>
                <td>Category</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Discount</td>
                <td>Location</td>
                <td>Product Details</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sellers_hub;
