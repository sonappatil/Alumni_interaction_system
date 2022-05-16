import React from 'react'

function NavHome() {
    const mystyle = {
        marginLeft:'600px'
     }
  return (
   
    <div>
         <div>
            <div style={{backgroundColor:'#f0f6fc',padding:'8px',display:'flex',position:'fixed',top:'0',right:'0',left:'0',height:'70px'}}>
                <img style={{width:'70px', height:'70px',borderRadius:'50%',marginLeft:'10px'}} src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" />
                <div >
                <h2 style={mystyle}>IT Department</h2> 
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default NavHome