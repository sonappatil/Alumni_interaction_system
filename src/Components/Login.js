import React, { useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Login.css'
import { logOut, signIn } from '../Firebase'
import NavHome from './NavHome'


function Login() {
  const emailRef = useRef();
  const passRef = useRef();


  const handleLogOut = async() => {
    try{
      await logOut();
      alert('Logged out Successfully!!!')
    }
    catch(error){
      alert(error.message);
    }
  }
  const handleLogIn = async() => {
    try{
      await signIn(emailRef.current.value , passRef.current.value);
      alert('Logged In sucessfully!!');
      //  <Navigate to='' replace={true}/>
    }
    catch(error){
      alert(error.message)
    }
  } 
  return (
    <div >
      <NavHome path=''/>
        <center>
          <h1 class="login">Login Here...</h1>
            <div id='main-div' style={{height:'300px'}}>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input ref={emailRef} type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
            </section>
            <section className='input'>
            <div className="input-group mb-3 ">
                <input ref={passRef} type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>
            
            <div className='input'>
                <Link to="/forgotpassword">Forgot Password?</Link>
            </div>

            <button type="button" className="btn " onClick={handleLogIn} >Log In</button>

             <button type="button" onClick={handleLogOut} className="btn ">Log out</button> 
            </div>
        </center>
    </div>
  )
}

export default Login