import React from 'react'

function NavbarForDept() {
    const mystyle = {
       marginLeft:'600px'
    }

  return (
    <div>
        <div>
            <div style={{backgroundColor:'#f0f6fc',padding:'8px',display:'flex',position:'fixed',top:'0',right:'0',left:'0',height:'70px'}}>
                <img style={{width:'70px', height:'70px',borderRadius:'50%',marginLeft:'10px'}} src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" />
                <div >
                <center><h2 style={mystyle}>IT Department</h2> </center>
               
                </div>
                <div class="dropdown" style={{position:'absolute',right:'50px'}}>
                     <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort By Department
                     </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="/">Mechanical</a></li>
                      <li><a class="dropdown-item" href="/">Civil</a></li>
                      <li><a class="dropdown-item" href="/">IT</a></li>
                      <li><a class="dropdown-item" href="/">CSE</a></li>
                      <li><a class="dropdown-item" href="/">EE</a></li>
                      <li><a class="dropdown-item" href="/">ECE</a></li>
                     </ul>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default NavbarForDept