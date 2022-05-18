import React from 'react'
import './Login.css'

function AlumniInfo() {
  return (
    <div >
        <center>
            <div id='main-div' style={{height:'600px'}}>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control" placeholder="Company" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control" placeholder="Package" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control" placeholder="Department" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control" placeholder="Session" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control" placeholder="LinkedIn Profile (Link)" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>

            <button type="button" className="btn btn-info">Upload</button>
            </div>
        </center>
    </div>
  )
}

export default AlumniInfo