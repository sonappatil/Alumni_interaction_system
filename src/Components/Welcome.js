import React from 'react';
import { Link } from 'react-router-dom';
import Interaction from '../Images/Interaction.png';
import Navbar from './Navbar';
import './Welcome.css'


function Home () {
    // const myStyle ={
    //     image:{
    //         width:'600px',
    //         height:'370px',
    //         marginTop:'50px',
    //         marginRight:'-117px'
    //     },
    //     text:{
    //         fontSize:'63px',
    //         fontWeight:'600',
    //         color:'#4f94d4',
    //         textOverflow:'clip'
    //     },
    //     subtext:{
    //         fontSize:'18px',
    //         marginTop:'10px',
    //         marginBottom:'38px'
    //     },
    //     button:{
    //         border:'none',
    //         backgroundColor:'#135e96',
    //         color:'white',
    //         padding:'16px 38px',
    //         fontSize:'16px',
    //         borderRadius:'10px',
    //         cursor:'pointer'
    //     }
    // }
    return (
        <>
        <Navbar/>
        <div id='main-div'>
        <div style={{width:'750px'}} > 
            <h3 id="text">Introducing Interaction Portal of TGPCET!!</h3>
            <p id="subtext" >Search for the Alumni respective to their departments and reach out to them , also get updates of upcoming Placement Drives.</p>
            <Link to="/dashboard">< button className='btn' >Get Started</button></Link>
        </div >
        <div>
            <img id="img"  src={Interaction} alt="interaction-img" />
        </div>
    </div>
        </>
    )
}

export default Home;