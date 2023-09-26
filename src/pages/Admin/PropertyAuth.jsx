import React from 'react'
import ImgFile from '../../components/Inputs/ImgFile'
import estate from '../../assets/images/estate.jpeg'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import Buttons from '../../components/Cart/Buttons'

const PropertyAuth = () => {
  return (
    <div>
        <div className="py-2">
            <div className='py-4'>
                <h5>Authorize Properties</h5>
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
                            <th colSpan={2}>Authorize</th>
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
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
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
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
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
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
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
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
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
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
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
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
                        </tr>
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    </div>
  )
}

export default PropertyAuth