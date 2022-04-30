import React from 'react'

function Navbar() {
    const mystyle = {
        backgroundColor:'#4f94d4',
        paddingLeft:'16px',
        paddingRight:'16px',
        fontSize:'18px',
        color:'white',
        border:'none',
        borderRadius:'28px',
        marginTop:'4px',
        marginRight:'28px'
    }
  return (
    <div>
        <div>
            <div style={{backgroundColor:'#f0f6fc',padding:'8px',display:'flex',justifyContent:'space-between'}}>
                <img style={{width:'60px', height:'60px',borderRadius:'50%'}} src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" />
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <button style={mystyle} >Login</button>
                    <button style={mystyle}>SignUp</button>
                    <h3>Hello ,There</h3>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Navbar