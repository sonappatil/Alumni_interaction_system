import React, { useState,useEffect } from 'react'
import './DeptStudents.css'
import { db } from './Firebase'
import { collection , getDocs , doc } from 'firebase/firestore'

function DeptStudents() {
  
  const [users , setusers] = useState([]);

  useEffect(() => {
    const getUsers = async() => {
      const userCollectionRef = collection(db,"onCampus");
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
    <div>
       <center> 
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
              users.map((user)=>{
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
        </center>
    </div>
  )
}

export default DeptStudents


