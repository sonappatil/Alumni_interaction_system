import React, { useState,useEffect } from 'react'
import './PlacedStudents.css'
import { db } from '../Firebase'
import { collection , getDocs } from 'firebase/firestore'
import NavbarForDept from './NavbarForDept';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsCivil() {
  
  const [users , setusers] = useState([]);
  const [text, settext] = useState('')

  useEffect(() => {
    const getUsers = async() => {
      const userCollectionRef = collection(db,"campusCivil");
      const data = await getDocs(userCollectionRef);
      setusers(
        data.docs.map((doc) => ({
          ...doc.data(),id:doc.id
        }) )
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
      onChange={e => settext(e.target.value)}
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
            
            {
              users.filter((val) => {
                if(text === ''){
                    return val;
                }
                else if(val.Name.toLowerCase().includes(text.toLowerCase()) ||
                val.company.toLowerCase().includes(text.toLowerCase()) ||
                val.session.toLowerCase().includes(text.toLowerCase()) ||
                val.Package.toLowerCase().includes(text.toLowerCase()) ||
                val.dept.toLowerCase().includes(text.toLowerCase())||
                val.designation.toLowerCase().includes(text.toLowerCase())
                ){
                    return val;
                }
                return 0;
               }).map((user)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.Name}</td>
                        <td>{user.company}</td>
                        <td>{user.Package}</td>
                        <td>{user.designation}</td>
                        
                        <td><a href={`https://${user.Link}`}>Profile Link</a></td>
                     </tr>
                  
                )
              })
            }
          
        </table>
      
       </div>
    </center>
    </>
  )
}

export default PlacedStudentsCivil;


