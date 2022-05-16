import React from 'react'
import { Link } from 'react-router-dom';
import Interaction from '../Images/Interaction.png';
import Navbar from './Navbar';
function Welcome() {
    const myStyle ={
        image:{
            width:'670px',
            height:'470px'
        },
        text:{
            fontSize:'68px',
            fontWeight:'600',
            color:'#4f94d4',
            textOverflow:'clip'
        },
        subtext:{
            fontSize:'22px',
            marginTop:'-38px',
            marginBottom:'38px'
        },
        button:{
            border:'none',
            backgroundColor:'#135e96',
            color:'white',
            padding:'16px 38px',
            fontSize:'16px',
            borderRadius:'10px',
            cursor:'pointer'
        }
    }
  return (
      <>
      <Navbar/>
      
    <div style={{display:'flex',justifyContent:'space-between',padding:'114px'}}>
        <div style={{width:'750px'}} > 
            <h3 style={myStyle.text}>Introducing Interaction Portal of TGPCET!!</h3>
            <p style={myStyle.subtext}>Search for the Alumni respective to their departments and reach out to them , also get updates of upcoming Placement Drives.</p>
            <Link to="logedIn"><button style={myStyle.button}>Get Started</button></Link>
        </div >
        <div>
            <img style={myStyle.image} src={Interaction} alt="interaction-img" />
        </div>
    </div>
    </>

  )
}

export default Welcome