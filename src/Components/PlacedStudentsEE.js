import React from 'react'
import './PlacedStudents.css'

import PlacedStudentsIT from './PlacedStudentsIT'
//import NavbarForDept from './NavbarForDept';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsEE() {
  
  return(
    <>
     <PlacedStudentsIT path='/dashboard' heading='Electrical Department ' collection='campusEE'/>
    </>
  )
}

export default PlacedStudentsEE;


