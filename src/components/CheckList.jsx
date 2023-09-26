import React from 'react'

const CheckList = ({img, description}) => {
  return (
    <div className="w3-panel w3-card-2 w3-round-large">
        <div className="">
            <div style={{float: 'left'}}>
                <img src={img} alt="" style={{height: '80px', padding: '10px', borderRadius: '20px'}} className="w3-round"/>
                <span style={{display: 'inline-block'}}>{description}</span>
                
            </div>
            <div style={{float: 'right'}}>
                <a href="#" className='w3-text-green' style={{lineHeight: '80px', textDecoration: 'none'}}>View details</a>
            </div>
        </div>
    </div>
  )
}

export default CheckList