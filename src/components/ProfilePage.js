import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


class ProfilePage extends Component {


    constructor(props){
        super(props);
    }

    
    render() {
      return (
          
          <div class="profile" align="center">
            <img src='https://s3-us-west-2.amazonaws.com/nirajfonsekacom/16969962.jpeg'/>
            <Typography noWrap='false' style={{whiteSpace: 'normal' , width: '60vh'}}>
              Hello! My Name is Niraj Fonseka. I graduated from the University of Texas with a degree in 
              Computer Science and a Minor in Business. I'm currently working as a Software Engineer at The Home Depot. 
            </Typography>
          </div>

      );
    }
  }
  
export default ProfilePage;
  