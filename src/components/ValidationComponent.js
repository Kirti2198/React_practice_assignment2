import React, { Component } from 'react';

class ValidationComponent extends Component{
   state={
     showValidationMsg: false
   }
   render(props){
    const textLength=this.props.textLength;
    
    let msgText="";
    if(textLength<5) {
     msgText="text too short";
    } else{
     msgText="text long enough";
    }

     return (
       <div>
           {this.props.textLength} <br/>
           <div style={{marginTop:'22px'}}>
           {msgText}
           </div>
           
       </div>
     )
   }


}

export default ValidationComponent;