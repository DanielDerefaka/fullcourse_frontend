import React from 'react'
import dx from "./img/banner.jpeg"
import Button from './Button'
import Button2 from './Button2'
import Buttons3 from './Buttons3'

const Getmobile = () => {
  return (
    <div className='get'>
<div className="row">
  <div className="col-md-6">
    <div className='pd'>
    <h1>Get More Value </h1>
    <h4> Get Our Mobile App</h4>
    <div style={{display:"flex"}} className="mg">
    <div>
    <Button2 />
    </div>
    <div >
    <Buttons3 className="bn"/>
    </div>
    </div>
    </div>
    
  </div>
  <div className="col-md-6">
    <div className='pd'>
    <img src={dx} className='dx'/>
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Getmobile