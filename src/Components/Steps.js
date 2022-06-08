import React from 'react'
import { Link } from 'react-router-dom'
import './Steps.css';


function Steps() {
  
  return (
     <>
    <div style={{marginTop:'50px'}}>
       <div id='steps-wrapper'>
          <div className='steps-class'>
             <h3 style={{marginBottom:'20px'}}>Search for an Alumni</h3>
             <p>Search for Alumni where he/she got placed , their package , in which year they got placed and reachout to them using their LinkedIn Profile</p>
             <Link to='/it'><button style={{marginTop:'20px'}} className='continue-btn'>Continue</button></Link>
          </div>
          <div className='steps-class'>
             <h3>Check for Placement Drives</h3>
             <p>Check for the companies coming to campus , Register for the same using google form link provided and get ready for Placements</p>
             <Link to='/placementdrives'><button  className='continue-btn'>Continue</button></Link>
          </div>
          <div className='steps-class'>
             <h3>You got Placed OffCampus?</h3>
             <p>Congratualtions , for getting Placed OffCampus !! Stay connected with your juniors by Providing some details about the company you got placed in</p>
             <Link to='/alumniinfo'><button style={{marginTop:'20px'}} className='continue-btn'>Continue</button></Link>
          </div>
          <div className='steps-class'>
             <h3>Check for offCampus students</h3>
             <p>You can check for the Alumni who got placed offCampus</p>
             <Link to='/offcampus'><button style={{marginTop:'50px'}} className='continue-btn'>Continue</button></Link>
          </div>
       </div>
      
    </div>
    </>
  )
}

export default Steps