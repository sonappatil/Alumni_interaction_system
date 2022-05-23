import React from 'react'
import { Link } from 'react-router-dom'
import './Steps.css';


function Steps() {
  const style={
   style1:{
    backgroundColor:'cyan',
    width:'350px',
    height:'200px',
    padding:'48px',
    margin:'70px',
    borderRadius:'20px'
   },
   style2:{
     marginBottom:'70px',
     display:'flex',
     marginTop:'100px'
   }
  }
  return (
    <div>
       <div>
          <div>
             <h4>Search for an Alumni</h4>
             <p>Search for an alumni of your choice , as per Department</p>
          </div>
          <div>
             <h4></h4>
          </div>
          <div></div>
          <div></div>
       </div>
    </div>
  )
}

export default Steps