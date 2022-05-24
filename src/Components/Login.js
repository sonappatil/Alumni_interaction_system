import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { logOut, signIn } from '../Firebase'
import NavHome from './NavHome'


function Login() {
  const emailRef = useRef();
  const passRef = useRef();


  const handleLogOut = async() => {
    try{
      await logOut();
    }
    catch(error){
      alert(error.message);
    }
  }
  const handleLogIn = async() => {
    try{
      await signIn(emailRef.current.value , passRef.current.value)
    }
    catch(error){
      alert(error.message)
    }
  } 
  return (
    <div >
      <NavHome/>
        <center>
          <h1 class="login">Login Here...</h1>
            <div id='main-div' style={{height:'300px'}}>
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
            
            <div className='input'>
                <Link to="/forgotpassword">Forgot Password?</Link>
            </div>

            <button type="button" className="btn btn-info" onClick={handleLogIn} >Log In</button>

            {/* <button type="button" onClick={handleLogOut} className="btn btn-info">Log out</button> */}
            </div>
        </center>
    </div>
  )
}

export default Login