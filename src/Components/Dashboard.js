import React from 'react'

import Steps from './Steps'
import './Steps.css'
import './Dashboard.css'
import NavDashboard from './NavDashboard'

function Dashboard() {
  return (
    <>
    <NavDashboard/>
    <div style={{marginTop:"110px"}}>
       <center> <h2 id='text' >Welcome !!  <br/> We are Glad that you are here.</h2></center>
    </div>
    <Steps/>
    
  <footer>
  <footer>
       <p> Project By - Krutika Jichkar , Bharti Nagpure , Sonali Patil , Snehal Mehar </p>    
       <p>Branch - IT (3rd year)</p>
    </footer>
  </footer>
    </>
  )
}

export default Dashboard