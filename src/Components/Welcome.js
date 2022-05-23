import React from 'react'
import { Link } from 'react-router-dom';
import Interaction from '../Images/Interaction.png';
import Navbar from './Navbar';
import './Welcome.css';
import { useAuth } from '../Firebase';
function Welcome() {
    const currentUser = useAuth();
   
  return (
      <>
      <Navbar/>
      
      <div id='main-div'>
        <div style={{width:'750px'}} > 
            <h3 id='text' > Introducing Interaction Portal of TGPCET!!</h3>
            <p id='subtext'>Search for the Alumni respective to their departments and reach out to them , also get updates of upcoming Placement Drives.</p>
            <Link to="dashboard"><button className='btn' disabled={currentUser ? false : true}>Get Started</button></Link>
        </div >
        <div>
            <img id='img' src={Interaction} alt="interaction-img" />
        </div>
    </div>
    </>

  )
}

export default Welcome