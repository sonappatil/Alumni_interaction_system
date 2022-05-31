import React, { useState } from 'react'
import { forgotPassword } from '../Firebase'
import './Login.css'
import NavHome from './NavHome'

function ForgotPass() {
  const [email, setemail] = useState('')
const forgotPasswordHandler = async(e) =>{
e.preventDefault()

  await forgotPassword(email)
  .then(response => {
    alert(response)
  })
.catch(e => {alert(e.message)})
}
  
  return (
    <div >
      <NavHome path=''/>
        <center>
          <h1 class="login">New Password Here... </h1>
            <div id='main-div' style={{height:'300px'}}>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
            </section>
          
            <button type="button" onClick={forgotPasswordHandler} className="btn btn-info">Submit</button>
            </div>
        </center>
    </div>
  )
}

export default ForgotPass