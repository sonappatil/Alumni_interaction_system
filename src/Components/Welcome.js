import React from 'react';

import Interaction from '../Images/Interaction.png';
import Navbar from './Navbar';
import './Welcome.css'
import { useAuth } from '../Firebase';


function Home() {
  const currentuser = useAuth();
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
        <div style={{heigth:'100vh'}}>
            <Navbar />
            <div class="main-div">
                <div style={{ width: '600px' }}>
                    <h3 class="text">Welcome to the Interaction Portal of TGPCET !!</h3>
                    <p class="subtext">Search for the Alumni respective to their departments and reach out to them, also get updates of upcoming Placements Drives.</p>
                    {/* <button className="btn-info btn"  disabled={currentuser ? false : true} ><Link to="/dashboard"  style={{color:'white'}}> Get Started</Link></button> */}
                     <p style={{color:'red',fontFamily:'Satisfy',marginTop:'40px',display: currentuser ? 'none' : 'block'}}>* Note : To move to the " Dashboard Page " you need to " SignIn " first * </p>
                </div>
            </div>
            <div>
                <img class="img" src={Interaction} alt="interaction-img" />
            </div>

        </div>
    )
}

export default Home;