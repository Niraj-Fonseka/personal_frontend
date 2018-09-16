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
        <div class="profile">


        <div>
        <div style={{marginBottom: 10}}>
            <div style={{marginBottom: 5}}>
            <Typography variant='title'>
                    Education
            </Typography>
            </div>
            <div style={{marginBottom: 5}}>
            <Typography>
                    University of Texas at Austin - ( 2013 - 2017 )
            </Typography>
            </div>
        </div>
        <div class="resume-field">
        <ExpansionPanel >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >Bachelor of Science in Computer Science</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <img src='https://s3-us-west-2.amazonaws.com/nirajfonsekacom/16969962.jpeg'/>
            <Typography noWrap='false' style={{whiteSpace: 'normal'}}>
                School Stuff , School Stuff
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
        <div  class="resume-field">
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >Business foundations certificate / minor</Typography>
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


        <div>
        <div style={{marginBottom: 10, marginTop: 10}}>
            <div style={{marginBottom: 5}}>
            <Typography variant='title'>
                    Work Experience
            </Typography>
            </div>
            <div style={{marginBottom: 5}}>
            <Typography>
                    The Home Depot - (2016 - present)
            </Typography>
            </div>
        </div>

        <div  class="resume-field">
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >Software Engineer - ( May 2017 - Present )</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <img src='https://s3-us-west-2.amazonaws.com/nirajfonsekacom/16969962.jpeg'/>

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
        <div  class="resume-field">
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >Software Engineer (Part Time) - ( Sep 2016 - May 2017 )</Typography>
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
        <div  class="resume-field">
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >Software engineering intern - ( May 2016 - Aug 2016 )</Typography>
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


        <div>
        <div style={{marginBottom: 10, marginTop: 10}}>
            <div style={{marginBottom: 5}}>
            <Typography variant='title'>
                    Volunteer Experience
            </Typography>
            </div>
            <div style={{marginBottom: 5}}>
            <Typography>
                    The Home Depot - (2016 - present)
            </Typography>
            </div>
        </div>

        <div  class="resume-field">
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >Software Engineer - ( May 2017 - Present )</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <img src='https://s3-us-west-2.amazonaws.com/nirajfonsekacom/16969962.jpeg'/>

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
        </div>
        );
      }
  }



export default withStyles(styles)(Resume);


  