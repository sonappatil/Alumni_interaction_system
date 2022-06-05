import React, { useState,useEffect } from 'react'
import './PlacedStudents.css'
import { db } from '../Firebase'
import { collection , getDocs } from 'firebase/firestore'
import NavbarForDept from './NavbarForDept';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsCivil() {
  
  const [users , setusers] = useState([]);
  const [text, settext] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    settext(e.target.value);
  }


  useEffect(() => {
    const getUsers = async() => {
      const userCollectionRef = collection(db,"campusCivil");
      const data = await getDocs(userCollectionRef);
      setusers(
        data.docs.map((doc) => ({
          ...doc.data(),id:doc.id
        }))
      )
    }
    getUsers();
  }, [])

  return (
    <>
    <NavbarForDept />
    
    <center>
      <div className='header-civil'>
      <h1>Civil Department</h1>
      </div>
      <div className='search-bar'>
      <input
      className='search-input'
      type="text"
      value={text}
      placeholder="Search..."
      onChange={handleChange}
      />
      </div>

    
   
    <div style={{marginTop:'50px'}}>
      
           <table >
              
            <thead>
            <tr>
                <th style={{width:'290px'}}>Name</th>
                <th>Company</th>
                <th>Package</th>
                <th>Designation</th>
                <th>LinkedIn Profile</th>
            </tr>
            </thead>
            <tbody>
              

            {
              users.filter(
                (user) => user.Name.toLowerCase().includes(text.toLowerCase()) ||
                user.company.toLowerCase().includes(text.toLowerCase()) ||
                user.Package.toString().includes(text)
                ).map((user)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.Name}</td>
                        <td>{user.company}</td>
                        <td>{user.Package}</td>
                        <td>{user.designation}</td>
                        <td>
                          <a target='_blank' href={`https://${user.Link}`}>Profile Link</a>
                        </td>
                     </tr>
                )
              })
            }   
          </tbody>
        </table>
      
       </div>
      
    </center>
    </>
  )
}

export default PlacedStudentsCivil;


