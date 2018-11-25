import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SpaceX from './DashboardTileData/SpaceX'

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: 'blue',
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
//   subheader: {
//     width: '100%',
//   },
// });

// const tileData = [
//   {
//     img: "Testing",
//     title: this.state.spaceXPayload.details,
//     author: 'author',
//     cols: 1,
//   },
//   {
//     img: "Testing",
//     title: 'Weather Is this \n sasdasd \n adasdasdajksdnakjsdn <br> asdalsdkmasdl',
//     author: 'author',
//     cols: 2,
//   },
//   {
//     img: "Testing",
//     title: 'Image',
//     author: 'author',
//     cols: 1,
//   },
//   {
//     img: "Testing",
//     title: 'Image',
//     author: 'author',
//     cols: 1,
//   },
//   {
//     img: "Testing",
//     title: 'Image',
//     author: 'author',
//     cols: 1,
//   },
// ];

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
        <GridList cellHeight={300}  cols={3}>
        <GridListTile  style={{margin: '0px' , background : '#676767'}} key={""} cols={1}>
            <SpaceX loaded={this.state.spaceXLoaded} payload={this.state.spaceXPayload}/>
        </GridListTile>

         <GridListTile  style={{margin: '0px',background : '#494747'}} key={""} cols={2}>
          <div style={{whiteSpace: 'normal' }}>
                
          </div>
        </GridListTile>

        <GridListTile  style={{margin: '0px' , background : '#514f4f'}} key={""} cols={1}>
          <div style={{whiteSpace: 'normal' }}>
                
          </div>
        </GridListTile>

        <GridListTile  style={{margin: '0px' , background : '#929292' }} key={""} cols={ 1}>
          <div style={{whiteSpace: 'normal' }}>
                
          </div>
        </GridListTile>

        <GridListTile  style={{margin: '0px' , background : '#242424' }} key={""} cols={ 1}>
          <div style={{whiteSpace: 'normal' }}>
                
          </div>
        </GridListTile>

        <GridListTile  style={{margin: '0px' , background : '#898989'}} key={""} cols={2}>
          <div style={{whiteSpace: 'normal' }}>
                
          </div>
        </GridListTile>  

        <GridListTile  style={{margin: '0px' ,background : '#898989'}} key={""} cols={1}>
          <div style={{whiteSpace: 'normal' }}>
                
          </div>
        </GridListTile>  
        </GridList>
      </div>
      );
    }
  }
  
export default Dashboard;
  