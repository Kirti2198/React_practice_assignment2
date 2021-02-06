import React, { Component } from 'react';
import '../components/CharComponent.css';
class CharComponent extends Component{

  render(props){

    return (

      <div className="charStyle" onClick={this.props.click}>
       <p > {this.props.character}</p>
      </div>
    )
  }
}

export default CharComponent;