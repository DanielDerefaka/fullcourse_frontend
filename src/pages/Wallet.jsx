import React from "react";
import Buttons from "../components/Cart/Buttons";

const Wallet = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 mx-auto py-5">
          <div className="row">
            <div>
              <h5 className="text-center py-3">₦200,000</h5>
            </div>
            <div className="col-6">
              <Buttons classes='btn btn-danger mx-auto d-block' text='Top-Up'/>
            </div>
            <div className="col-6">
              <Buttons classes='btn btn-success mx-auto d-block' text='Withdraw'/>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <table className="table table-bordered table-striped table-responsive-md w-100">
          <thead style={{background: '#4caf50', color: 'white'}}>
            <tr>
              <th>S/N</th>
              <th>Amount</th>
              <th>Kind</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>100</td>
              <td>Top-Up</td>
              <td>Credit</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>100</td>
              <td>Top-Up</td>
              <td>Credit</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>100</td>
              <td>Top-Up</td>
              <td>Credit</td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>100</td>
              <td>Top-Up</td>
              <td>Credit</td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>100</td>
              <td>Top-Up</td>
              <td>Credit</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
