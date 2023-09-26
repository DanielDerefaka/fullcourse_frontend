import React from 'react'
import { FaStopCircle, FaCheckCircle } from 'react-icons/fa'
import Buttons from '../../components/Cart/Buttons'
import Card from '../../components/Cards/Card'

const SUsersList = () => {
  return (
    <div>
        <div className="py-2">
            <div className='py-4'>
                <h5>All Users</h5>
            </div>
            <div className="row py-4">
                <Card count='6' title='Total Users' />
            </div>
            <div className="p-2 my-3 shadow w3-responsive">
                <table className="table table-striped w-100 ">
                    <thead style={{background: '#4caf50', color: 'white'}}>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>User ID</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Mobile Number</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <Buttons title='Block this User' classes='btn text-danger' text={<FaStopCircle style={{fontSize: '25px'}}/>}/>
                                    <Buttons title='Unblock this User' classes='btn text-primary' text={<FaCheckCircle style={{fontSize: '25px'}}/>}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>User ID</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Mobile Number</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <Buttons title='Block this User' classes='btn text-danger' text={<FaStopCircle style={{fontSize: '25px'}}/>}/>
                                    <Buttons title='Unblock this User' classes='btn text-primary' text={<FaCheckCircle style={{fontSize: '25px'}}/>}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>User ID</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Mobile Number</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <Buttons title='Block this User' classes='btn text-danger' text={<FaStopCircle style={{fontSize: '25px'}}/>}/>
                                    <Buttons title='Unblock this User' classes='btn text-primary' text={<FaCheckCircle style={{fontSize: '25px'}}/>}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>User ID</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Mobile Number</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <Buttons title='Block this User' classes='btn text-danger' text={<FaStopCircle style={{fontSize: '25px'}}/>}/>
                                    <Buttons title='Unblock this User' classes='btn text-primary' text={<FaCheckCircle style={{fontSize: '25px'}}/>}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>User ID</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Mobile Number</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <Buttons title='Block this User' classes='btn text-danger' text={<FaStopCircle style={{fontSize: '25px'}}/>}/>
                                    <Buttons title='Unblock this User' classes='btn text-primary' text={<FaCheckCircle style={{fontSize: '25px'}}/>}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>User ID</td>
                            <td>Name</td>
                            <td>Layout</td>
                            <td>Mobile Number</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <Buttons title='Block this User' classes='btn text-danger' text={<FaStopCircle style={{fontSize: '25px'}}/>}/>
                                    <Buttons title='Unblock this User' classes='btn text-primary' text={<FaCheckCircle style={{fontSize: '25px'}}/>}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    </div>
  )
}

export default SUsersList