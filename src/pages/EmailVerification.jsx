import React from 'react'

const EmailVerification = () => {
  return (
    <div>
        <div className="col-md-6" style={{margin: 'auto', display: 'block'}}>
            <form action="" className='shadow-sm w3-padding w3-padding-48 w3-round-large'>
                <h4 className='w3-text-green w3-center'>Email Verification</h4>
                <p className='w3-center'>Please check your email for an otp code</p>
                <div className="form-group">
                    <label htmlFor="">OTP</label>
                    <input type="text" className="form-control shadow-sm" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="w3-button w3-block w3-green" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default EmailVerification