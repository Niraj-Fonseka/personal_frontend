import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
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
                    <ul>
                        <ul>
                            <li>Computer Science Courses
                                <ul>
                                    <li>Foundations of Programming ( Java ) </li>
                                    <li>Datastructures and Algorithms  ( Java , Python )</li>
                                    <li>Descrete Mathematics</li>
                                    <li>Operating Systems ( C ) </li>
                                    <li>Computer Architecture ( C ) </li>
                                    <li>Cyberphysical Systems ( C / Bash )</li>
                                    <li>Computer Security ( Java )</li>
                                    <li>Object Oriented Programming ( C++ ) </li>
                                    <li>Algorithms and Complexity</li>
                                </ul>
                            </li>
                            <br/>
                            <li>Mathematics Courses
                                <ul>
                                    <li>Single variable calculus</li>
                                    <li>Multi variable calculus</li>
                                    <li>Descrete Mathematics</li>
                                    <li>Linear Algebra and Matrix Calculations</li>
                                    <li>Multi variable calculus</li>
                                </ul>
                            </li>
                            <br/>
                            <li>Other Notable Courses
                                <ul>
                                    <li>Physics 1, 2</li>
                                    <li>Chemistry 1, 2</li>
                                    <li>Geology 1, 2</li>
                                    <li>Roman History</li>
                                    <li>Greek History / Mythology</li>
                                    <li>Russian History</li>
                                    <li>Human Brain and Psychology</li>
                                    <li>American Criminal Justice System</li>

                                </ul>
                            </li>
                            
                        </ul>            
                    </ul>
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
                <ul>
                     <li>Foundations of Accounting</li>
                     <li>Foundations of Finance</li>
                     <li>Management Information Systems</li>
                     <li>Foundations of Business Law</li>
                     <li>Foundations of Marketing</li>
                     <li>Foundations of Economics</li>
                </ul>
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
            <ul>
            <li>Developed a high volume API using Go that was the hub for more than 30 different data sources.</li>
            <li>Created a Slack Bot using Go that mines data from data sources and provide mission critical data for teams reducing mean time to detect and mean time to restore. </li>
            <li>Created the first internal Mobile Application for Reliability Engineering using React Native to provide senior level management, Site Reliability Engineers ( SREs)  and Operations teams with metrics and service health data. </li>
            <li>Led a backend dev team of six and refactored / rewrote APIs ( from Python to Go ) for over 6 applications with various tech stacks by defining proper design, concurrency and testing patterns.</li>
            <li>SRE for over 6 internal applications used by developers and other SREs.</li>
            <li> Involved in architectural discussions and development of self service Destructive Testing, Load Testing and Front End performance testing tools.</li>
            <li>Mentored 2 interns during summer 2017 and guided them through their summer project</li>
            <li>Active member of the hiring committee for Home Depot. Interviewed engineers for Engineer 1, Senior Engineer and Staff engineer positions. Designed interview problems, summer projects for over 50+ interns.</li>
            <li>Improved applications by introducing inner sourcing across multiple teams by contributing different projects. </li>
            </ul>
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
            <ul>
            <li> Architected and developed an application to collect metrics and define Service Level Objectives and Error Budgets for microservices at Home Depot. </li>
            <li>Created an interactive dependency graph for 1000+ micro services using D3.js and React.js to show dependencies between microservices and their service level objectives. </li>
            </ul>
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
            <ul>
            <li>Developed a tool to automate creating tickets in ServiceNow for alerts that gets pushed over the threshold in Microsoft Operations Management Suite. Deployed this tool on Microsoft Azure using Runbooks.</li>
           </ul>
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


  