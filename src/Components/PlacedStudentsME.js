import React, { useState,useEffect } from 'react'
import './PlacedStudents.css'
import { db } from '../Firebase'
import { collection , getDocs } from 'firebase/firestore'
import NavbarForDept from './NavbarForDept';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsME() {
  
  const [users , setusers] = useState([]);
  const [text, settext] = useState('')

  // handle change of text
  const handleChange = (e) => {
    e.preventDefault();
    settext(e.target.value);
  }

  useEffect(() => {
    const getUsers = async() => {
      const userCollectionRef = collection(db,"campusMech");
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
    <NavbarForDept dept='Mechanical'/>

    <center>
      <div className='header-me'>
      <h1> Mechanical Department</h1>
    </div>
    <div className='search-bar'>
      <input
      className='search-input'
      value={text} 
      onChange={handleChange}
       type="text"
        placeholder='Search...' />
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
<<<<<<< HEAD
              users.filter((val) => {
                if(text === ''){
                    return val;
                }
                else if(val.Name.toLowerCase().includes(text.toLowerCase()) ||
                val.company.toLowerCase().includes(text.toLowerCase()) ||
                val.Package.toLowerCase().includes(text.toLowerCase()) ||
                val.dept.toLowerCase().includes(text.toLowerCase())
                ){
                    return val;
                }
                return 0;
               }).map((user)=>{
=======
              users.filter(
                (user) => user.Name.toLowerCase().includes(text.toLowerCase()) ||
                user.company.toLowerCase().includes(text.toLowerCase()) ||
                user.Package.toString().includes(text)
                )
               .map((user)=>{
>>>>>>> 5df660b9710c214ec83e1744f07e2515dd4275d4
                return(
                    <tr key={user.id}>
                        <td>{user.Name}</td>
                        <td>{user.company}</td>
                        <td>{user.Package}</td>
<<<<<<< HEAD
                        <td>{user.designation}</td>
                       
                        <td><a href={`https://${user.Link}`}>Profile Link</a></td>
                     </tr>
                  
=======
                        <td>{user.session}</td>
                        <td><a href={`https://www.linkedin.com/in/${user.Link}/`}>Profile Link</a></td>
                     </tr> 
>>>>>>> 5df660b9710c214ec83e1744f07e2515dd4275d4
                )
              })
            }
        </table>
       </div>
    </center>
    </>
  )
}

export default PlacedStudentsME;


