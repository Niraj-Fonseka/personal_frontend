import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
const style = {
    minHeight :'100vh',
    marginTop : 5,
    marginBottom : '50vh',
};

const style_profile = {
  margin : 10 , 
  width : '25%',
  height : 500,
  backgroundColor : 'white'
};



class ProfilePage extends Component {


    constructor(props){
        super(props);
    }

 //690 × 388 image 
    render() {
      return (
       <div>
       <Grid container wrap="wrap" spacing={5}>
        <Grid  item xs>
          <Paper style={style}>
            <Paper style={style_profile}> Hello Test </Paper>
          </Paper>
        </Grid>
      </Grid>
        </div>
      );
    }
  }
  
export default ProfilePage;
  