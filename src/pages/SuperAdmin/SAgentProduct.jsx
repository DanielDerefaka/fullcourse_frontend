import React from 'react'
import ImgFile from '../../components/Inputs/ImgFile'
import estate from '../../assets/images/estate.jpeg'
import Card from '../../components/Cards/Card'

const SAgentProduct = () => {
  return (
    <div>
        <div className="py-2">
            <div className='py-4'>
                <h5>All Products</h5>
            </div>
            <div className="py-3">
                <h6>By (Agent name)</h6>
            </div>
            <div className="p-2 my-3 shadow w3-responsive">
                <table className="table table-striped w-100 ">
                    <thead style={{background: '#4caf50', color: 'white'}}>
                        <tr>
                            <th>S/N</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Layout</th>
                            <th>Cordinates</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Kind</th>
                            <th>Agent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Kind</td>
                            <td>Agent Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Kind</td>
                            <td>Agent Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Kind</td>
                            <td>Agent Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Kind</td>
                            <td>Agent Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Kind</td>
                            <td>Agent Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Kind</td>
                            <td>Agent Name</td>
                        </tr>
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    </div>
  )
}

export default SAgentProduct