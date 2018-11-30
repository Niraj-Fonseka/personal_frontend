import React, { Component } from 'react';
import ProfilePage from './ProfilePage'
import Resume from './Resume'
import TechGraph from './TechGraph/TechGraph'
import Dashboard from './Dashboard';

class MainBody extends Component {


    constructor(props){
        super(props);
    }


    render() {
      
      if (this.props.profileClicked){
        return (
        <div>
          <ProfilePage />
          </div>
        );
      }else if (this.props.resumeClicked){
        return(
        <div>
          <Resume />
        </div>
        );
        }else if (this.props.techGraphClicked){
          return (
            <div>
              <TechGraph />
            </div>
          );
      }else{
        return(
          <div>
            <Dashboard / >
          </div>
          );
      }
    }
  }
  
export default MainBody;
  