import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


class Dashboard extends Component {


    constructor(props){
        super(props);
    }

 //690 × 388 image 
    render() {
      return (
       <div>
        <Grid container spacing={24} style={{padding : 5}} >
            <Grid item lg>
             <Card raised style={{marginBottom:10}}>
                    <CardMedia style={{  paddingTop : '56.25%' , backgroundColor: 'white'}}
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
            <Card raised style={{marginBottom:10}}>
                    <CardMedia style={{paddingTop : '56.25%'}}
                    
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
             <Card raised style={{marginBottom:10}}>
                    <CardMedia style={{  paddingTop : '56.25%' , backgroundColor: 'blue'}}
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
            <Card raised style={{marginBottom:10}}>
                    <CardMedia style={{paddingTop : '56.25%'}}
                    
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
             <Card raised style={{marginBottom:10}}>
                    <CardMedia style={{  paddingTop : '56.25%'}}
                       
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
  
export default Dashboard;
  