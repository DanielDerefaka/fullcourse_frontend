import React from 'react'

const ProductList = ({icon, description, price}) => {
  return (
    <div>
        <div className="w3-round-large w3-padding w3-bar w3-card">
            <div className="w3-bar-item w3-left">
                <i className={icon}></i><span>{description}</span>
            </div>
            <div className="w3-bar-item w3-right">
                <span>{price}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductList