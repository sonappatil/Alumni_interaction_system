import React from 'react'
import NavHome from './NavHome'
import Steps from './Steps'

function Dashboard() {
  return (
    <>
    <NavHome/>
    <div style={{margin:'150px'}}>
       <center> <h2 style={{color:'#4f94d4',fontSize:'48px'}}>Welcome , Krutika !!  <br/> We are Glad that you are here.</h2></center>
    </div>
    <Steps/>
    </>
  )
}

export default Dashboard