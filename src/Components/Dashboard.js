import React from 'react'
import NavHome from './NavHome'
import Steps from './Steps'
import './Steps.css'
import './Dashboard.css'

function Dashboard() {
  return (
    <>
    <NavHome path=''/>
    <div style={{marginTop:"110px"}}>
       <center> <h2 id='text' >Welcome !!  <br/> We are Glad that you are here.</h2></center>
    </div>
    <Steps/>
    </>
  )
}

export default Dashboard