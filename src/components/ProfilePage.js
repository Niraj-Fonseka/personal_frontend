import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


class ProfilePage extends Component {


    constructor(props){
        super(props);
    }


    render() {
      return (
       <div>
        <Grid container spacing={24} style={{padding: 24}}>
            <Grid item lg={4} xl={3}>
             <Card raised>
                    <CardMedia style={{height: 200 , paddingTop : '56.25%'}}
                        image={"https://s3-us-west-2.amazonaws.com/nirajfonsekacom/16969962.jpeg"}
                        title="Photo"
                    />
                    <CardContent>
                        <Typography component="p">
                            The profile description goes here
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href="http://google.com" target="_blank">
                            Go To Course
                        </Button>
                    </CardActions>
                </Card>
                
            </Grid>

            <Grid item xs={12} sm={6} lg={4} xl={3}>
             <Card raised>
                    <CardMedia style={{height: 200 , paddingTop : '56.25%'}}
                        image={"https://s3-us-west-2.amazonaws.com/nirajfonsekacom/16969962.jpeg"}
                        title="Photo"
                    />
                    <CardContent>
                        <Typography component="p">
                            The profile description goes here
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href="http://google.com" target="_blank">
                            Go To Course
                        </Button>
                    </CardActions>
                </Card>
                
            </Grid>
        </Grid>
        
            {/* <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Card raised style={{minHeight:300 }}>
                    <CardMedia style={{ maxHeight:300 , maxWidth: 300, paddingTop : '75.25%'}}
                        image={"https://s3-us-west-2.amazonaws.com/nirajfonsekacom/UT300x300.jpeg"}
                        title="Photo"
                    />
                    <CardContent>
                     
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href="http://google.com" target="_blank">
                            Go To Course
                        </Button>
                    </CardActions>
            </Card>
            <Paper elevation={1}>
                <Typography variant="headline" component="h3">
                    This is a sheet of paper.
                </Typography>
                <Typography component="p">
                     Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper>
                
            </Grid> */}
        </div>
      );
    }
  }
  
export default ProfilePage;
  