import React, { useState,useEffect } from 'react'
import './PlacedStudents.css'
import { db } from '../Firebase'
import { collection , getDocs  } from 'firebase/firestore'
//import NavbarForOffCampus from './NavbarForOffCampus';
import NavHome from './NavHome';
//import { Link } from 'react-router-dom';
//import search_icon from '../Images/search_icon.png'

function OffCampus() {
  
  const [users , setusers] = useState([]);
  const [text, settext] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    settext(e.target.value);
  }

  useEffect(() => {
    const getUsers = async() => {
      const userCollectionRef = collection(db,"offCampus");
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
    padding:'16px',
    borderRadius:'20px',
    width:'400px',
    fontSize:'20px',
    height:'40px'
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
    <NavHome path='dashboard'/>

    <center>
    <div>
      <input style={style.inputstyle} value={text} onChange={handleChange} type="text" placeholder='search...' />
    </div>

    <div style={{marginTop:'30px'}}>
      
       
           <table >
              
            <thead>
            <tr>
                <th style={{width:'290px'}}>Name</th>
                <th>Company</th>
               
                <th>Designation</th>
                <th>Department</th>
                <th>Session</th>
                <th>LinkedIn Profile</th>
                {/* <th>Update your Data</th> */}
            </tr>
            </thead>
            <tbody>
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
                        <td>{user.dept}</td>
                        <td>{user.session}</td>
                        <td><a target='_blank' href={`https://${user.Link}`}>Profile Link</a></td>
                        {/* <td><Link to='/updatealumni'><button >Edit</button></Link></td> */}
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

export default OffCampus;


