import React, { Component } from 'react';



class SpaceX extends Component {

    constructor(props){
        super(props);

    } 


    render(){

          //   display: block;
    // margin-left: auto;
    // margin-right: auto;
        
        if (this.props.loaded) {
            return(
                <div style={{whiteSpace: 'normal' }}>

                    <div style={{fontSize: '25px' , marginBottom: '10px'}}>
                        Upcoming Space X Launch
                    </div>
                    <div style={{fontSize: '15px'}}> 
                        {this.props.payload.details} 
                    </div>

                    <div style={{ marginTop: '10px'}} >
                        Flight Number : {this.props.payload.flight_number}
                    </div>
    
                    <div>
                        Launch Date : {this.props.payload.launch_date_utc}
                    </div>
        
                    <hr/>
                </div>
            )
    
        }else{
            return (
                <div>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f1055231234507.564a1d234bfb6.gif" />
                </div>
            )
        }
        
    }
}

export default SpaceX;