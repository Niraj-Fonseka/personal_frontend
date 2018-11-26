import React, { Component } from 'react';
import ProfilePage from './ProfilePage'
import Resume from './Resume'
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
      }else if (this.props.resume){
        return(
        <div>
          <Resume />
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
  