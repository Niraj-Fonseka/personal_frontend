import React, { Component } from 'react';



class BreakingNews extends Component {

    constructor(props){
        super(props);
        this.state = {
            list : null,
          }
    } 


    generateList(){

    }

      
        render(){
        
            if (this.props.payload != null) {

                //When the data is loaded starting creating the list
                this.generateList()

                return(
                    <div >
    
                        <div style={{fontSize: '25px' , marginBottom: '10px'}}>
                            Top Breaking Breaking News
                            <hr/>
                        </div>

                        <div style={{fontSize: '15px' , whiteSpace: 'normal' , overflowY:'scroll' , maxHeight: '100px' }}>
                            <ul>
                                {this.props.payload.articles.map(function(listValue){
                                    return <li>{listValue.description}</li>;
                                })}
                            </ul>
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

export default BreakingNews;