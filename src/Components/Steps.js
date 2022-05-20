import React from 'react'
import { Link } from 'react-router-dom'

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
        <div style={style.style2}>
        
        <div style={style.style1}>
        <Link to='/it'><h2>Search for an Alumni</h2></Link>
        </div>
        
        <div style={style.style1}>
           <Link to='/placementdrives'><h2>Check for placement drives</h2></Link>
        </div>
        <div style={style.style1}>
           <Link to='/alumniinfo'>
              <h2>Are you an Alumni ?
                Give us some details
              </h2>
           </Link>
        </div>
        <div style={style.style1}>
           <Link to='/offcampus'>
              <h2>off campus students
              </h2>
           </Link>
        </div>
        </div>
    </div>
  )
}

export default Steps