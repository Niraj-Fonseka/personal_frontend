import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import List from '@material-ui/core/List';


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
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button onClick={this.props.resumeOnClick}>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Resume" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
    </div>
      );
    }
  }
  
export default MailFolderListItems;
  