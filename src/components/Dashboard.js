import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SpaceX from './DashboardTileData/SpaceX'
import Twitter from './DashboardTileData/Twitter'

class Dashboard extends Component {


    constructor(props){
        super(props);
        this.fetchWeatherData = this.fetchWeatherData.bind(this);
        this.state = {
          spaceXPayload : "",
          spaceXLoaded : false
        }
    } 


    componentDidMount(){
      this.fetchWeatherData()
      this.fetchNewsData()
    }


    //https://us-central1-nirajfonseka-prod.cloudfunctions.net/top_news  
    fetchNewsData(){

      let defaultOptions = {
        url:'',
        method:'GET',
        mode: 'cors',
        headers:{
        'Access-Control-Allow-Origin':'*'
        },
        body:null,
    };

    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'multipart/form-data'
    });

    let opt = Object.assign({}, defaultOptions); 

    let sentData={
        method:opt.method,
        mode: 'cors',
        header: header
    };

    fetch("https://us-central1-nirajfonseka-prod.cloudfunctions.net/top_news",sentData)
      .then(resp => resp.json())
      .then(resp => {
       console.log(resp)
      })
    }

    fetchWeatherData() {

        let defaultOptions = {
            url:'',
            method:'GET',
            mode: 'cors',
            headers:{
            'Access-Control-Allow-Origin':'*'
            },
            body:null,
        };

        let header = new Headers({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'multipart/form-data'
        });

        let opt = Object.assign({}, defaultOptions); 

        let sentData={
            method:opt.method,
            mode: 'cors',
            header: header
        };

        fetch("https://us-central1-nirajfonseka-prod.cloudfunctions.net/helloworld",sentData)
          .then(resp => resp.json())
          .then(resp => {
            this.setState({
              spaceXPayload : resp,
              spaceXLoaded : true
            })
          })
      }
    render() {

  
      if(this.state.spaceXImage == true){
        console.log(this.state.spaceXPayload.links.mission_patch_small)
      }
      return (
        <div className='dashboard'>
        <GridList cellHeight={200}  cols={3}>
        <GridListTile  style={{margin: '1px' }} key={""} cols={3}>
            <SpaceX loaded={this.state.spaceXLoaded} payload={this.state.spaceXPayload}/>

        </GridListTile>


        <GridListTile  style={{margin: '0px' ,background : '#898989'}} key={""} cols={3}>
          <div style={{whiteSpace: 'normal' }}>
              <Twitter />
          </div>
        </GridListTile>  
        </GridList>
      </div>
      );
    }
  }
  
export default Dashboard;
  