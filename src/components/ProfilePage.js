import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'




class ProfilePage extends Component {


    constructor(props){
        super(props);
    }

 //690 × 388 image 
    render() {
      return (
              <Grid container>
              <Grid item sm={12}>
                  <Typography variant='body1'>
                   Hello mY name is niraj and im from texas
                  </Typography>
              </Grid>
              <Grid item sm>
                <Typography variant='body1'>
                        tring to get this shit to work for months now. But it still doesnt look like its working
                  </Typography>
              </Grid>
            </Grid>
        
  
      );
    }
  }
  
export default ProfilePage;
  