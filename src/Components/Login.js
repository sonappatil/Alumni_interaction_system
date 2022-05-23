import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { logOut ,signIn} from '../Firebase'
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

  const handleSignIn = async() => {
    try{
      await signIn(emailRef.current.value , passRef.current.value);
    }
    catch(e){
      alert(e.message)
    }
  }
  return (
    <div >
      <NavHome/>
        <center>
        
            <div id='main-div'> 
            
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

            <div>
              Not a member? <Link to='/signup'>SignUp</Link>
            </div>

            <button type="button" onClick={handleSignIn} className="btn btn-info">Log In</button>

            <button type="button" onClick={handleLogOut} className="btn btn-info">Log out</button>
            </div>
        </center>
    </div> 
  )
}

export default Login