import React, { Component } from 'react';



class DashboardData extends Component {

    constructor(props){
        super(props);

    } 


    render(){
        return(
            <div style={{whiteSpace: 'normal' }}>
          <div> 
               {this.state.spaceXPayload.details} 
          </div>
          <div>
            Flight Number : {this.state.spaceXPayload.flight_number}
          </div>
          </div>
        )

    }
}

export default DashboardData;