import React from "react";

import { API_URL } from "../../constants/types";
import FlexContainer from "../Layouts/FlexContainer";

import "../Cart/cart.css";
import Buttons from "./Buttons";
const CartItems = ({ image, item, quantity }) => {

    const row = {
        height: '100vh',
        width: '100%',
        zIndex: '1200',
        position: 'fixed',
        background: 'rgba(0, 0, 0, 0.7)',
        top: '0',
        left: '0',
    };
    const list = {
        height: '100vh',
        zIndex: '101',
        position: 'fixed',
        right: '0',
        top: '0',

    };
    const first = {
        height: '90%',
        overflowY: 'auto',

    };
    const second = {
        height: '10%',
    };
    const top = {
        minHeight: '24px',
        width: '100%',
    }
    const doSomething = () => {

        console.log('something')


    }
    const somethingElse = () => {

        console.log('something else')


    }
  return (
    <div className="">

         <div className='row' style={row}>
             <div className="col-md-4"></div>
             <div className="col-md-4"></div>
             <div className="col-md-4 shadow w3-white" style={list}>
                 <div className="" style={first}>
                     <div style={top} className='w3-light-grey py-1 row'>
                         <div className="col-10">
                             <h6 style={{lineHeight: '30px', paddingLeft: '10px'}}>Added to Cart</h6>
                         </div>
                         <div className="col-2 w3-center">
                             <Buttons text='x' classes="w3-small w3-button w3-circle w3-black"/>
                         </div>
                     </div>
                     <div>
                        <FlexContainer orientation={"row"}>
                            <img src={`${API_URL}/${image} `} alt="item " width={100} />

                            <div className="cart-detail">
                            <div className="item-name"> {item} </div>

                            <div>{quantity}</div>
                            </div>
                        </FlexContainer>
                     </div>
                 </div>
                 <div className="w3-padding shadow row" style={second}>
                     <div className="col-6">
                         <div className="w3-center">
                             <Buttons 
                             func={doSomething} 
                             text='View' 
                             classes='w3-button w3-border w3-round' 
                             />
                         </div>
                     </div>
                     <div className="col-6">
                         <div className="w3-center">
                             <Buttons 
                             func={somethingElse} 
                             text='Checkout' 
                             classes='w3-button w3-green w3-round' 
                             />
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     
 



      
    </div>
  );
};

export default CartItems;
