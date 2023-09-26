import React from 'react'
import {FaLock} from 'react-icons/fa'

const Proceed = (btnType) => {
  return (
   <button
   className='btn-block'
   btnType={btnType}
    style={{padding:'5px 40px', backgroundColor:'#519E38', borderRadius:'5px', border:'none', color:'white'}}>
  <FaLock /> Proceed to checkout
   </button>
  )
}

export default Proceed