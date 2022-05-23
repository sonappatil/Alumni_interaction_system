import React ,{useState} from 'react'

import './Login.css'

function ForgotPass() {
  const [pass, setpass] = useState('');
  const [newPass, setnewPass] = useState('')
  return (
    <div >
        <center>
            <div id='main-div' style={{height:'300px'}}>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input type="password" className="form-control" value={pass} onChange={(e) => setpass(e.target.value)} placeholder="New Password" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
            </section>
            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="password" className="form-control" value={newPass} onChange={(e) => setnewPass(e.target.value)} placeholder="confirm Password" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>


            <button type="button" className="btn btn-info">Change Password</button>
            </div>
        </center>
    </div>
  )
}

export default ForgotPass