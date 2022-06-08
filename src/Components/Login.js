import React, { useRef,useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Login.css'
import { logOut, signIn } from '../Firebase'
import NavHome from './NavHome'
//import { useDispatch } from 'react-redux'


function Login(props) {
 
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();


 
  const handleLogIn = async() => {
    try{
      await signIn(emailRef.current.value , passRef.current.value,props.history);
      
      alert('Logged In sucessfully!!');
      //  <Navigate to='' replace={true}/>
      navigate('/dashboard');
     
     
    }
    catch(error){
      alert(error.message)
    }
  } 
  return (
    <div >
      <NavHome path=''/>
        <center>
          <h1 className="login">Login Here...</h1>
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

              
            </div>
        </center>
    </div>
  )
}

export default Login

