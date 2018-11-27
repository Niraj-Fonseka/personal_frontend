import React, { Component } from 'react';
import './../App.css';
import linkedin from '../Images/linkedin64.png'
import twitter from '../Images/twitter64.png'
import instagram from '../Images/instagram64.png'
import github from '../Images/github64.png'
import Bounce from 'react-reveal/Bounce';


class SocialMedia extends Component {
  render() {
    return (
      <div  style={{ display: 'flex', justifyContent: 'center' , marginTop: '40px'}}>        
            <Bounce left>
                <a href="https://www.linkedin.com/in/niraj-fonseka-03bab3107">
                    <img src={linkedin}  style={{ marginRight :'10px'}} />
                </a>
             </Bounce>

             <Bounce left>
                <a href="https://twitter.com/NirajFonseka1">
                    <img src={twitter} style={{ marginRight :'10px'}} />
                </a>
             </Bounce>

             <Bounce right>
                <a href="https://www.instagram.com/nsf1313/">
                    <img src={instagram} style={{ marginRight :'10px'}}/>
                </a>
             </Bounce>

             <Bounce right>
                <a href="https://github.com/Niraj-Fonseka">
                    <img src={github} />
                </a>
             </Bounce> 
      </div>
    );
  }
}

export default SocialMedia;
