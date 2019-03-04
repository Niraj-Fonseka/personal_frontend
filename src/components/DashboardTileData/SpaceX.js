import React, { Component } from 'react';
import SpaceXLogo from '../../Images/spacexlogo.png'



class SpaceX extends Component {

    constructor(props){
        super(props);

    } 

    

    render(){
        
        if (this.props.payload != null) {
            return(
                <div style={{ padding : '10px', overflowY:'scroll' , maxHeight: '600px' , backgroundColor:'#b2ebf2' }} >

                    
                    <div style={{fontSize: '25px' , marginBottom: '10px'}}>
                        Upcoming Space X Launch
                        <hr/>
                    </div>
                    {/* <div >
                        Image here
                        <img src={SpaceXLogo} style={{maxHeight: '50%' , maxWidth: '50%'}}></img>
                    </div> */}

                    <div style={{fontSize: '15px' , whiteSpace: 'normal'}}> 

                        {this.props.payload.details} 
                        
                    </div>

                    <div style={{ marginTop: '10px'}} >
                        Flight Number : {this.props.payload.flight_number}
                    </div>
    
                    <div>
                        Launch Date : {this.props.payload.launch_date_utc}
                    </div>
                     
                    
                </div>
            )
    
        }else { 
            return (
                <div>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f1055231234507.564a1d234bfb6.gif" />
                </div>
            )
        }
        
    }
}

export default SpaceX;