import React,{useState , useEffect} from 'react'
import NavbarForDept from './NavbarForDept'
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
        <div style={{marginTop:'100px',padding:'20px'}}>
           {
               users.map((element)=>{
                   return(
                   <div key={element.id} style={{display:'flex',justifyContent:'space-between',}}>
                        <h3>{element.company}</h3>
                         <button style={mystyle}>Register</button>
                   </div>
                   )
               })
           }
        </div>
    </div>
  )
}

export default PlacementDrives