import React from 'react'
import NavHome from './NavHome'
import Steps from './Steps'
import './Steps.css'

function Dashboard() {
  return (
    <>
    <NavHome path=''/>
    <div style={{marginTop:'100px'}}>
       <center> <h2 id='text' style={{color:'#4f94d4',fontSize:'48px'}}>Welcome , Krutika !!  <br/> We are Glad that you are here.</h2></center>
    </div>
    <Steps/>
    </>
  )
}

export default Dashboard