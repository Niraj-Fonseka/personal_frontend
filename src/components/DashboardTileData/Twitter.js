import React, { Component } from 'react';



class Twitter extends Component {

    constructor(props){
        super(props);

    } 


    render(){

        if (this.props.loaded) {
            return(
                <div style={{whiteSpace: 'normal' }}>

                    <hr/>
                </div>
            )
    
        }else{
            return (
                <div>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" />
                </div>
            )
        }
        
    }
}

export default Twitter;