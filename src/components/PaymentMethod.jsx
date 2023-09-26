import React from 'react'
import { FaPaypal } from 'react-icons/fa'

const PaymentMethod = () => {
  return (
    <div className='w3-half w3-padding'>
        <div className='w3-panel w3-card w3-padding w3-round'>
            <label htmlFor="radio1">
                <input type="radio" name="pay" id="radio1" style={{border: '2px solid green'}}/>&nbsp;
                Paystack
                <span>{FaPaypal}</span>
            </label>
        </div>
        <div className='w3-panel w3-card w3-padding w3-round'>
            <label htmlFor="radio2">
                <input type="radio" name="pay" id="radio2" style={{border: '2px solid green'}}/>&nbsp;
                Wallet
            </label>
        </div>
    </div>
  )
}

export default PaymentMethod