import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import SocialMedia from './SocialMedia';
import Resume from './Resume';
import SignIn from './SignIn';
import Typography from '@material-ui/core/Typography';



class MainPage extends Component {

    constructor(props){
        super(props);

    } 

    
    render(){
          return (
                <div className="mobile-page">
                    {/* <Fade top>
                        <Typography noWrap='false' style={{whiteSpace: 'normal', fontColor : 'white', display: 'flex', fontSize: '25px', marginTop: '10px',marginBottom: '10px', justifyContent: 'center'}}>
                            fonseka.live@gmail.com
                        </Typography>
                    </Fade> */}
                    <Bounce top>
                        <div className="mobile-prof-pic">
                            <img src='https://s3-us-west-2.amazonaws.com/nirajfonsekacom/16969962.jpeg' style={{ marginTop: '20px', maxHeight: '50%', maxWidth: '50%'}} />
                        </div>
                    </Bounce>

                    <Typography noWrap='false' style={{whiteSpace: 'normal', margin: '10px', color:'#3ABAAC' ,  fontFamily: 'Righteous'}}>
                    Hello! My Name is Niraj Fonseka. I graduated from the University of Texas with a degree in 
                    Computer Science and a Minor in Business. I'm currently working as a Software Engineer at The Home Depot. 
                    </Typography>

                    <SocialMedia />

                    <Resume />

                </div>
            )
        }
}

export default MainPage;