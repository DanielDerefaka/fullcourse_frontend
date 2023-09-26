import React from 'react'

const OrderDetail = () => {
  return (
    <div className='w3-half w3-padding'>
        <div className="w3-padding w3-card-2 w3-panel w3-padding-32 w3-round-large">
            <h5>Order Details</h5>
            <div>
                <span className="w3-left">Subtotal</span>
                <span className="w3-right">$89</span>
            </div><br />
            <div>
                <span className="w3-left">Service Charge</span>
                <span className="w3-right">$1</span>
            </div><br />
            <div>
                <span className="w3-left">Tax</span>
                <span className="w3-right">$1</span>
            </div>
            <br />
            <hr />
            <div>
                <span className="w3-left">Subtotal</span>
                <span className="w3-right"><b>$91</b></span>
            </div>
            <br />
            <div>
                <button className="w3-button w3-block w3-round w3-green">Pay Now</button>
            </div>
        </div>
    </div>
  )
}

export default OrderDetail