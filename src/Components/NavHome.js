import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function NavHome(props) {
   
  return (
   
    <div>
         <div id='navbar'>
            <div  >
                <img  src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" />
            </div>

           <div>
             <Link to='/'><button className='btn'>Back</button></Link>
           </div>
           
        </div>
    </div>
  )
}

export default NavHome