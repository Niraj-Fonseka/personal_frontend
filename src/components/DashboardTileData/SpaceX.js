import React, { Component } from 'react';



class SpaceX extends Component {

    constructor(props){
        super(props);

    } 

    

    render(){
        
        if (this.props.payload != null) {
            return(
                <div >

                    <div style={{fontSize: '25px' , marginBottom: '10px'}}>
                        Upcoming Space X Launch
                        <hr/>
                    </div>

                    <div style={{fontSize: '15px' , whiteSpace: 'normal' , overflowY:'scroll' , maxHeight: '100px' }}> 
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