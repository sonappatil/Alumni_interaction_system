import React from 'react'
import Interaction from '../Images/Interaction.png';
function Welcome() {
    const myStyle ={
        image:{
            width:'670px',
            height:'470px'
        },
        text:{
            fontSize:'68px',
            fontWeight:'600',
            color:'#4f94d4'
        },
        button:{
            border:'none',
            backgroundColor:'#135e96',
            color:'white',
            padding:'16px 38px',
            fontSize:'16px',
            borderRadius:'10px'
        }
    }
  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:'114px'}}>
        <div style={{width:'800px'}} > 
            <h3 style={myStyle.text}>Welcome to the Interaction Portal of TGPCET!!</h3>
            <button style={myStyle.button}>Get Started</button>
        </div >
        <div>
            <img style={myStyle.image} src={Interaction} alt="interaction-img" />
        </div>
    </div>
  )
}

export default Welcome