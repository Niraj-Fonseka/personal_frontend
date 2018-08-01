import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
const style = {
    height :500,
    margin: 20,
};
const styleBottom = {
    height :250,
    margin: 20,
};
class ProfilePage extends Component {


    constructor(props){
        super(props);
    }

 //690 × 388 image 
    render() {
      return (
       <div>
       <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper style={style}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={styleBottom} >xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={styleBottom} >xs=6</Paper>
        </Grid>
      </Grid>
        </div>
      );
    }
  }
  
export default ProfilePage;
  