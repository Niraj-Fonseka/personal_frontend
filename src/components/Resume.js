import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  });

class Resume extends Component {


    

    constructor(props){
        super(props);
    }


    render() {

        return (

        <div>
        <div style={{marginBottom: 10}}>
            <div style={{marginBottom: 5}}>
            <Typography variant='title'>
                    Education
            </Typography>
            </div>
            <div style={{marginBottom: 5}}>
            <Typography>
                    University of Texas at Austin - 
            </Typography>
            </div>
        </div>
        <div>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >Expansion Panel 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography noWrap='false' style={{whiteSpace: 'normal'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
                asdasdasdaksldamskldm aklsdm admaksd mlakmsd lasd
                asdklamsdlkamsdklamsk askdm alksdmalskd masd mksmdkskksmd aksmd as daksm kasmd ks smdskmdks malesuadaa
                asdasdasdaksldamskldmasdda
                sdasdasdasdkmal mas d
                asdasdasdaksldamskldmasddasdasd
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
        </div>
        );
      }
  }



export default withStyles(styles)(Resume);


  