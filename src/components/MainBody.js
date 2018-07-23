import React, { Component } from 'react';
import ProfilePage from './ProfilePage'
import Resume from './Resume'

class MainBody extends Component {


    constructor(props){
        super(props);
    }


    render() {

      console.log("Profile Clicked " + this.props.profileClicked);
      console.log("Resume Clicked " + this.props.resume);
      
      
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
            "Nothing"
          </div>
          );
      }
    }
  }
  
export default MainBody;
  