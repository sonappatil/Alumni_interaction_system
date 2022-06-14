import React, { useState, useEffect } from 'react'
import './PlacedStudents.css'
import { db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'

import { Link } from 'react-router-dom';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsIT(props) {

  const [users, setusers] = useState([]);
  const [text, settext] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    settext(e.target.value);
  }

  useEffect(() => {
    const getUsers = async () => {
      const userCollectionRef = collection(db , `${props.collection}`);
      const data = await getDocs(userCollectionRef);
      setusers(
        data.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        }))
      )
    }
    getUsers();
  }, [])

  


  return (

    <>
       <div >
            <div id='navbar'>
                <div><img  src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" /> </div>
                <div style={{display:'flex'}}>
                
              
                  <div class="dropdown" style={{marginRight:'10px'}} >
                      <button  class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort By Department
                      </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <Link to='/mech'><li><a class="dropdown-item" href="/">Mechanical</a></li></Link>
                        <Link to='/civil'><li ><a class="dropdown-item" href="/" >Civil</a></li></Link>
                        <Link to='/it'><li ><a class="dropdown-item" href="/">IT</a></li></Link>
                        <Link to='/cse'><li ><a class="dropdown-item" href="/">CSE</a></li></Link>
                        <Link to='/ee'><li><a class="dropdown-item" href="/">EE</a></li></Link>
                        <Link to='/ece'><li ><a class="dropdown-item" href="/">ECE</a></li></Link>
                     </ul>
                   </div>

                   <div>
                    <Link to={props.path}><button className='btn btn-info'>Back </button></Link>
                   </div>
                </div>

              
            </div>
           
        </div>

      <center>
        <div className='header-it'>
          <h1>{props.heading}</h1>
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
        


        <div style={{ marginTop: '50px' }}>


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
               
                ).map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.Name}</td>
                    <td>{user.company}</td>
                    <td>{user.designation}</td>
                    <td><a href={`https://${user.Link}`} target="_blank" rel ="noreferrer" >Profile Link</a></td>
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

export default PlacedStudentsIT;


