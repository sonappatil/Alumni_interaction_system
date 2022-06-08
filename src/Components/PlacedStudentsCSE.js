import React, { useState,useEffect } from 'react'
import './PlacedStudents.css'
import { db } from '../Firebase'
import { collection , getDocs } from 'firebase/firestore'
import NavbarForDept from './NavbarForDept';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsCSE() {
  
  const [users , setusers] = useState([]);
  const [text, settext] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    settext(e.target.value);
  }

  useEffect(() => {
    const getUsers = async() => {
      const userCollectionRef = collection(db,"campusCSE");
      const data = await getDocs(userCollectionRef);
      setusers(
        data.docs.map((doc) => ({
          ...doc.data(),id:doc.id
        }) )
      )
    }
    getUsers();
  }, [])

  const style ={
   inputstyle:{
     marginTop:'100px',
    padding:'12px 24px',
    borderRadius:'20px',
    width:'400px',
    fontSize:'20px'
   },
   imagestyle:{
    width:'25px' , 
    height:'25px',
    position:'absolute',
    left:'650px',
    paddingLeft:'4px',
    paddingTop:'10px'
   }
  }
  

  return (
    
    <>
    <NavbarForDept dept='Computer Science and Engineering'/>
 <center>
   <div className='header-cse'>
  <h1> Computer Science Department</h1>
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
               
                <th>Designation</th>
                <th>LinkedIn Profile</th>
            </tr>
            </thead>
            
            {
               users.filter(
                (user) => user.Name.toLowerCase().includes(text.toLowerCase()) ||
                user.company.toLowerCase().includes(text.toLowerCase())
                
                ).map((user)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.Name}</td>
                        <td>{user.company}</td>
                        
                        <td>{user.designation}</td>
                        <td><a target='_blank' href={`https://${user.Link}`}>Profile Link</a></td>
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

export default PlacedStudentsCSE;


