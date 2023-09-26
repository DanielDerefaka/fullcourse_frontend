import React from 'react'

const Table = () => {
  return (
    <div>
   <div className='table-holder'>
   <table class="table">
  <thead>
    <div className='tdesign'>
      <h4> Last Payment </h4>
    </div>
  </thead>
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>    
   </div>
    </div>
  )
}

export default Table
