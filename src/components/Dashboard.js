import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SpaceX from './DashboardTileData/SpaceX'
import BreakingNews from './DashboardTileData/BreakingNews'

class Dashboard extends Component {


    constructor(props){
        super(props);
        this.fetchWeatherData = this.fetchWeatherData.bind(this);
        this.state = {
          spaceXPayload : null,
          breakingNewsPayload : null,
        }
    } 


    //Do the API calls after the Application Mounted
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
        this.setState({
          breakingNewsPayload : resp,
        })
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
            })
          })
      }



    render() {
      return (
        <div className='dashboard'>
        <GridList cellHeight={200}  cols={3}>
        <GridListTile  style={{margin: '3px'}} key={""} cols={3}>
          
          <div className="dashtile">
            <SpaceX  payload={this.state.spaceXPayload}/>
          </div>
        </GridListTile>


        <GridListTile  style={{margin: '3px'}} key={""} cols={3}>
          <div className="dashtile" >
              <BreakingNews payload={this.state.breakingNewsPayload}/>
          </div>
        </GridListTile>  

        </GridList>
      </div>
      );
    }
  }
  
export default Dashboard;
  