import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';


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

const tileData = [
  {
    img: "Testing",
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: "Testing",
    title: 'Weather Is this \n sasdasd \n adasdasdajksdnakjsdn <br> asdalsdkmasdl',
    author: 'author',
    cols: 2,
  },
  {
    img: "Testing",
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: "Testing",
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: "Testing",
    title: 'Image',
    author: 'author',
    cols: 1,
  },
];

class Dashboard extends Component {


    constructor(props){
        super(props);
        this.fetchWeatherData = this.fetchWeatherData.bind(this);

    }


    componentDidMount(){
      this.fetchWeatherData()
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
            console.log(resp)
          })
      }
    render() {
      return (
        <div className='dashboard'>
        <GridList cellHeight={300}  cols={3}>
          {tileData.map(tile => (
            <GridListTile  style={{margin: '0px'}} key={tile.img} cols={tile.cols || 1}>
              <div style={{whiteSpace: 'normal' }}>
              Tekjansdkj najksdknasjdna kjsdnaksjd nasda sdsdas
                asdasdad asdasd aasd
                asdalsdkmasdlasd
                sasdasdsdasd
                asdalsdkmasdl
                asdalsdkmasdlasdasd
                asdasd
                asdalsdkmasdlasdasd
                asdasd
                
              </div>

             
            </GridListTile>
          ))}
        </GridList>
      </div>
      );
    }
  }
  
export default Dashboard;
  