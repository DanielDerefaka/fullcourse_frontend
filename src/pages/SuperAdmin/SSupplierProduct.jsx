import React from 'react'
import ImgFile from '../../components/Inputs/ImgFile'
import estate from '../../assets/images/estate.jpeg'
import Card from '../../components/Cards/Card'

const SSupplierProduct = () => {
  return (
    <div>
        <div className="py-2">
            <div className='py-4'>
                <h5>All Products</h5>
            </div>
            <div className="py-3">
                <h6>By (Supplier name)</h6>
            </div>
            <div className="p-2 my-3 shadow w3-responsive">
                <table className="table table-striped w-100 ">
                    <thead style={{background: '#4caf50', color: 'white'}}>
                        <tr>
                            <th>S/N</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Discount</th>
                            <th>Location</th>
                            <th>Product Details</th>
                            <th>Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Quantity</td>
                            <td>Amount</td>
                            <td>Discount</td>
                            <td>Location</td>
                            <td>Product Details</td>
                            <td>Supplier Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Quantity</td>
                            <td>Amount</td>
                            <td>Discount</td>
                            <td>Location</td>
                            <td>Product Details</td>
                            <td>Supplier Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Quantity</td>
                            <td>Amount</td>
                            <td>Discount</td>
                            <td>Location</td>
                            <td>Product Details</td>
                            <td>Supplier Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Quantity</td>
                            <td>Amount</td>
                            <td>Discount</td>
                            <td>Location</td>
                            <td>Product Details</td>
                            <td>Supplier Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Quantity</td>
                            <td>Amount</td>
                            <td>Discount</td>
                            <td>Location</td>
                            <td>Product Details</td>
                            <td>Supplier Name</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td><div style={{width: '50px'}}><ImgFile src={estate} classes='img-fluid rounded'/></div></td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Quantity</td>
                            <td>Amount</td>
                            <td>Discount</td>
                            <td>Location</td>
                            <td>Product Details</td>
                            <td>Supplier Name</td>
                        </tr>
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    </div>
  )
}

export default SSupplierProduct