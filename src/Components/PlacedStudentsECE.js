import React from 'react'
import './PlacedStudents.css'
//import NavbarForDept from './NavbarForDept';
import PlacedStudentsIT from './PlacedStudentsIT';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsECE() {
  return(
    <>
     <PlacedStudentsIT path='/dashboard' heading='Electronics and Communication Department ' collection='campusECE'/>
    </>
  )
}

export default PlacedStudentsECE;


