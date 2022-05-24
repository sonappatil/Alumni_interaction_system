import React, { useRef } from 'react'
import './Login.css'
import {signup , useAuth } from '../Firebase'
import NavHome from './NavHome';
import { Link } from 'react-router-dom';
//import { addDoc, collection } from 'firebase/firestore';

function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();

  const handleSignUp = async() => {
    //emailRef.current.value='';
   // passwordRef.current.value='';
      await signup(emailRef.current.value,passwordRef.current.value);
      alert('Registered successfully!!')
  }
  return (
    <div >
      <NavHome/>
        <center>
          <h1 class="login">SignUp Here...</h1>
            <div id='main-div' style={{height:'330px'}}>
            <section className='input' >
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
            <p>Already have an account? <Link to='/login'>SignIn</Link></p>
            </div>
        </center>
    </div>
  )
}

export default SignUp