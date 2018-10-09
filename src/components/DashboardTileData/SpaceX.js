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
                    <div style={{fontSize: '15px', fontFamily:"sans-serif"}}> 
                        {this.props.payload.details} 
                    </div>
    
                    <div>
                    <img src={this.props.payload.missionPatch}/>
                    </div>
    
                    <div>
                        Flight Number : {this.props.payload.flight_number}
                    </div>
    
                    <div>
                        Launch Date : {this.props.payload.launch_date_utc}
                    </div>
        
                    
                </div>
            )
    
        }else{
            return (
                <div>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f1055231234507.564a1d234bfb6.gif" style={{ height : "50px" , width : "50px" , paddingTop : "35%"  , marginLeft: "auto" , margin : "auto", display: "block"}} />
                </div>
            )
        }
        
    }
}

export default SpaceX;