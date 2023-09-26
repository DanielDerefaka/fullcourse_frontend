import React from "react";
import { CurvedButton } from "../components/Buttons/CurvedButton";
import Card from "../components/Cards/Card";

const Investment = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Card title='Active Investment' count='4' color='#b6c39a'/>
        </div>
        <div className="col-sm-4">
          <Card title='Total Investment' count='20' color='#EDF0E5'/>
        </div>
        <div className="col-sm-4 py-4">
          <CurvedButton className="border border-success bg-light text-success">
            Add Investment
          </CurvedButton>
        </div>
      </div>
      <div>
        <table className="table table-bordered table-striped table-responsive-md w-100 mt-3">
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

export default Investment;
