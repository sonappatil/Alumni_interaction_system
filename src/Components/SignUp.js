import React from 'react'
import './Login.css'

function SignUp() {
  return (
    <div >
        <center>
            <div id='main-div'>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
            </section>
            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>
            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>
            
            <button type="button" className="btn btn-info">SignUp</button>
            </div>
        </center>
    </div>
  )
}

export default SignUp