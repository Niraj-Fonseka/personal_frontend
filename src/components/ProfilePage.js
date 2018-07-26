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
        <Grid container spacing={24} style={{padding: 24}} >
            <Grid item lg>
             <Card raised style={{ height: '97%', marginBottom:30}}>
                    <CardMedia style={{ margin: 30, height:300,width:300}}
                        image={"https://s3-us-west-2.amazonaws.com/nirajfonsekacom/16969962.jpeg"}
                        title="Photo"
                    />
                    <CardContent>
                        <Typography component="p">
                            Hello! I'm Niraj.I'm a software engineer located in Austin.TX. <br/>
                            Im
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href="http://google.com" target="_blank">
                            Go To Course
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item lg>
             <Card raised style={{marginBottom:30}}>
                    <CardMedia style={{  paddingTop : '56.25%'}}
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
                <Card raised style={{marginBottom:30}}>
                    <CardMedia style={{paddingTop : '56.25%'}}
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
              <Grid item lg>
             <Card raised style={{marginBottom:30}}>
                    <CardMedia style={{  paddingTop : '56.25%'}}
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
                <Card raised style={{marginBottom:30}}>
                    <CardMedia style={{paddingTop : '56.25%'}}
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
        </div>
      );
    }
  }
  
export default ProfilePage;
  