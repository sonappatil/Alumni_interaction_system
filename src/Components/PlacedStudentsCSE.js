import React from 'react'
import './PlacedStudents.css'

//import NavbarForDept from './NavbarForDept';
import PlacedStudentsIT from './PlacedStudentsIT';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsCSE() {
  
 return(
   <>
    <PlacedStudentsIT path='/dashboard' heading='Computer Science Department ' collection='campusCSE'/>
   </>
 )
}

export default PlacedStudentsCSE;


