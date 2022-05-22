import React from 'react'
import { Link } from 'react-router-dom'
import './Steps.css';


function Steps() {
  
  return (
    <div>
       <div id='steps-wrapper'>
          <div>
             <h3>Search for an Alumni</h3>
             <p>Search for Alumni where he/she got placed , their package , in which year they got placed and reachout to them using their LinkedIn Profile</p>
          </div>
          <div>
             <h4>Check for Placement Drives</h4>
             <p>Check for the companies coming to campus , Register for the same using google form link provided and get ready for Placements</p>
          </div>
          <div>
             <h4>You got Placed OffCampus?</h4>
             <p>Provide some details about the company you got placed in</p>
          </div>
          <div></div>
       </div>
    </div>
  )
}

export default Steps