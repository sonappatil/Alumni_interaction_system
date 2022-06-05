import React,{useState , useEffect} from 'react'

import {db} from '../Firebase'
import {collection ,getDocs} from 'firebase/firestore'
import NavHome from './NavHome';


function PlacementDrives() {
    const [users , setusers] = useState([]);

    useEffect(() => {
      const getUsers = async() => {
        const userCollectionRef = collection(db,"campusDrive");
        const data = await getDocs(userCollectionRef);
        setusers(
            data.docs.map((doc) => ({
              ...doc.data(),id:doc.id
            }) )
        )
        
      }
      getUsers();
    }, [])
  
    const mystyle={
        backgroundColor:'#4f94d4',
        padding:'10px 38px' ,
        fontSize:'16px',
        color:'white',
        border:'none',
        marginRight:'28px',
        marginTop:'10px',
        marginBottom:'10px',
        borderRadius:'3px',
        cursor:'pointer',
        textDecoration:'none'
    }
  return (
    <div>
        <NavHome path='dashboard'/>
        <div style={{marginTop:'100px'}}>
        <center>
          <table>
          <thead>
            <th>Name of Company</th>
            <th>Date</th>
            <th>Designation</th>
            <th>Package</th>
            <th>Register</th>
          </thead>
          <tbody>
           {
             users.map((element) => {
               return(
                <tr>
                    <td>{element.company}</td>
                    <td>{element.date}</td>
                    <td>{element.designation}</td>
                    <td>{element.Package}</td>
                    <td><button style={mystyle}>Register</button></td>
              </tr>
               )
             })
           }
          </tbody>
        </table>
        </center>
        </div>
    </div>
  )
}

export default PlacementDrives