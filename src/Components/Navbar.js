import React from 'react'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import './Navbar.css'




function Navbar() {
   
  return (
    //   <nav className='nav-bar'>

    //   </nav>
    <div>
        <div>
            <div id='navbar' >
                <img  src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" />
                <div >
                    <div style={{display:'flex'}}>
                         <Link to='/login'> <button className='btn' >SignIn</button></Link>
                       
                        <Link to='/signup'><button className='btn' >SignUp</button></Link>
                        <h3 style={{marginRight:'20px',marginTop:'10px'}}>Hello ,There</h3>
                    </div>
                    
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Navbar