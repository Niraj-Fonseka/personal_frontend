import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '@material-ui/icons/Dashboard'
import Home from '@material-ui/icons/Home'
import Work from '@material-ui/icons/Work'
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';


class MailFolderListItems extends Component {


    constructor(props){
        super(props);
        this.state = { profileClicked : this.props.profileClicked , resume : this.props.resumeClicked}
    }

   
    
    render() {
      return (
          <div>
        <ListItem button onClick={this.props.click}>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button onClick={this.props.resumeOnClick}>
      <ListItemIcon>
        <Work />
      </ListItemIcon>
      <ListItemText primary="Resume" />
    </ListItem>
    <ListItem button onClick={this.props.dashboardOnClick}>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Contact me" />
    </ListItem>
    </div>
      );
    }
  }
  
export default MailFolderListItems;
  