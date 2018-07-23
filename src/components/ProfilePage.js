import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


class ProfilePage extends Component {


    constructor(props){
        super(props);
    }


    render() {
      return (
       <div>
        <Grid container spacing={24} style={{padding: 24}}>
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
            <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Card raised style={{width: '700'}}>
                    <CardMedia style={{height: 0 , paddingTop : '56.25%'}}
                        image={"http://www.gstatic.com/webp/gallery/1.jpg"}
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
                
            </Grid>
        </Grid>
        </div>
      );
    }
  }
  
export default ProfilePage;
  