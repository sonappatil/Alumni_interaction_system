import React  from 'react'
import './Login.css'
import { useState } from 'react';
import {updateDoc,doc} from 'firebase/firestore';
import {db} from '../Firebase'
import NavHome from './NavHome';

function UpdateAlumni() {
const [name, setname] = useState('');
const [Package, setPackage] = useState()
const [session, setsession] = useState()
const [company, setcompany] = useState()
const [dept, setdept] = useState('')
const [link, setlink] = useState()
const [designation, setdesignation] = useState('')



  
const updateUser = async(id,name,Package,company,dept,designation,link,session) => {
    try{
        const newFields ={
            Name:name,
            Package:Package,
            dept:dept,
            company:company,
            designation:designation,
            Link:link,
            session:session
          }
          const userDoc = doc(db,"offCampus",id)
          await updateDoc(userDoc,newFields)
          alert('success')
    }
    catch(e){
        alert(e.message)
    }
  }



  return (
    <div >
        <NavHome path='dashboard'/>
        <center>
            <h1 className="login" style={{marginTop:"100px"}}>Provide Your Details Here...</h1>
            <div id='main-div' style={{height:'570px' , marginTop:'25px'}}>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" required/>
                 
               </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={company} onChange={(e) => setcompany(e.target.value)} className="form-control" placeholder="Company" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={Package} onChange={(e) => setPackage(e.target.value)} className="form-control" placeholder="Package" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={dept} onChange={(e) => setdept(e.target.value)} className="form-control" placeholder="Department" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={session } onChange={(e) => setsession(e.target.value)} className="form-control" placeholder="Session" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={ designation } onChange={(e) => setdesignation(e.target.value)} className="form-control" placeholder="Designation" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={link} onChange={(e) => setlink(e.target.value)} className="form-control" placeholder="LinkedIn Profile (Link)" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <button type="button" className="btn btn-info" onClick={updateUser(name,Package,company,dept,designation,link,session)}>Update</button>
            </div>
        </center>
    </div>
  )
}
// bharti
export default UpdateAlumni