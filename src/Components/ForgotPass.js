import React from 'react'

import './Login.css'
import NavHome from './NavHome'

function ForgotPass() {
  return (
    <div >
      <NavHome/>
        <center>
            <div id='main-div' style={{height:'300px'}}>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input type="password" className="form-control" placeholder="New Password" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
            </section>
            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="password" className="form-control" placeholder="confirm Password" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>


            <button type="button" className="btn btn-info">Change Password</button>
            </div>
        </center>
    </div>
  )
}

export default ForgotPass