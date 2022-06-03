import React, { useState,useEffect } from 'react'
import './PlacedStudents.css'
import { db } from '../Firebase'
import { collection , getDocs } from 'firebase/firestore'
import NavbarForDept from './NavbarForDept';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsEE() {
  
  const [users , setusers] = useState([]);
  const [text, settext] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    settext(e.target.value);
  }

  useEffect(() => {
    const getUsers = async() => {
      const userCollectionRef = collection(db,"campusEE");
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
    <NavbarForDept dept='Electrical'/>

    <center>
      <div className='header-ee'>
     <h1>Electrical Department </h1>
      </div>
    <div className='search-bar'>
      <input 
      className='search-input'
      value={text} 
      onChange={handleChange} 
      type="text" 
      placeholder='search' />
    </div>

    
   
    <div style={{marginTop:'50px'}}>
      
       
           <table >
              
            <thead>
            <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Package</th>
                <th>Session</th>
                <th>LinkedIn Profile</th>
            </tr>
            </thead>
            
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
                        <td>{user.session}</td>
                        <td><a href={`https://www.linkedin.com/in/${user.Link}/`}>Profile Link</a></td>
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

export default PlacedStudentsEE;


