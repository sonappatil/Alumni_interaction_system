import React, { useRef } from 'react'
import './Login.css'
import {signup , useAuth} from '../Firebase'

function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();

  const handleSignUp = async() => {
    
      await signup(emailRef.current.value,passwordRef.current.value);

  }
  return (
    <div >
        <center>
            <div id='main-div'>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input ref={emailRef} type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
            </section>
            <section className='input'>
            <div className="input-group mb-3 ">
                <input ref={passwordRef} type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>
            
            <button type="button" className="btn btn-info" onClick={handleSignUp}>SignUp</button>
            </div>
        </center>
    </div>
  )
}

export default SignUp