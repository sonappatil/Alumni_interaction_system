import React from 'react';
import { Link } from 'react-router-dom';
import Interaction from '../Images/Interaction.png';
import Navbar from './Navbar';
import './Welcome.css'
import { useAuth } from '../Firebase';


function Home() {
  const currentUser = useAuth();
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
            <Navbar />
            <div class="main-div">
                <div style={{ width: '661px' }}>
                    <h3 class="text">Introducing Interaction Portal of TGPCET!!</h3>
                    <p class="subtext">Search for the Alumni respectiveto their departments and reach out to them, also get updates of upcoming Placements Drives.</p>
                    <Link to="/dashboard"><button class="btn" disabled={currentUser ? false : true}> Get Started</button></Link>
                </div>
            </div>
            <div>
                <img class="img" src={Interaction} alt="interaction-img" />
            </div>
        </>
    )
}

export default Home;