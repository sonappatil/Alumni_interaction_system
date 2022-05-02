import React from 'react'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'


function Navbar() {
    const mystyle = {
        backgroundColor:'#4f94d4',
        padding:'10px 38px' ,
        fontSize:'16px',
        color:'white',
        border:'none',
        borderRadius:'3px',
        marginTop:'10px',
        marginBottom:'10px',
        marginRight:'28px',
        cursor:'pointer',
        textDecoration:'none'
       
    }

   
  return (
    <div>
        <div>
            <div style={{backgroundColor:'#f0f6fc',padding:'8px',display:'flex',justifyContent:'space-between'}}>
                <img style={{width:'60px', height:'60px',borderRadius:'50%'}} src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" />
                <div >
                    <ul type='none'style={{display:'flex',justifyContent:'space-between'}}>
                        <Link to='deptStudents' style={mystyle} >Login</Link> 
                        <button style={mystyle}>SignUp</button>
                        <h3>Hello ,There</h3>
                    </ul>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Navbar