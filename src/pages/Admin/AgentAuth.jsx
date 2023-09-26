import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import Buttons from '../../components/Cart/Buttons'


const AgentAuth = () => {
  return (
    <div>
        <div className="py-2">
            <div className='py-4'>
                <h5>Authorize Agents</h5>
            </div>
            
            <div className="p-2 my-3 shadow w3-responsive">
                <table className="table table-striped w-100 ">
                    <thead style={{background: '#4caf50', color: 'white'}}>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cordinates</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Property</th>
                            <th colSpan={2}>Authorize</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S/N</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Property qty</td>
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Property qty</td>
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Property qty</td>
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Property qty</td>
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Property qty</td>
                            <td><Buttons title='Approve' classes='btn text-success' text={<FaThumbsUp style={{fontSize: '25px'}}/>}/></td>
                            <td><Buttons title='Deny' classes='btn text-danger' text={<FaThumbsDown style={{fontSize: '25px'}}/>}/></td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Cordinates</td>
                            <td>Address</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Property qty</td>
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

export default AgentAuth