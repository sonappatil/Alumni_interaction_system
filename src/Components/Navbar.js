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
        marginRight:'28px',
        marginTop:'10px',
        marginBottom:'10px',
        borderRadius:'3px',
        cursor:'pointer',
        textDecoration:'none'
       
    }

   
  return (
    <div>
        <div>
            <div style={{backgroundColor:'#f0f6fc',padding:'8px',display:'flex',
            justifyContent:'space-between',position:'fixed',right:'0',left:'0',height:'70px'}}>
                <img style={{width:'70px', height:'70px',borderRadius:'50%'}} src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" />
                <div >
                    <div style={{display:'flex'}}>
                        <Link to='deptStudents' style={mystyle} >Login</Link> 
                        <button style={mystyle}>SignUp</button>
                        <h3>Hello ,There</h3>
                    </div>
                    
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Navbar