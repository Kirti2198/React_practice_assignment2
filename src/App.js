import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
      state={
          inputText:"",
          textLength:0,
          characters:{
            
          }
        }
    handleInputChange=(event)=>{
        const text=event.target.value;
        this.setState({inputText:text});
        console.log(text.length);
        const textLength=text.length;
        this.setState({textLength:textLength});
      }

      handleCharChange=(event,key)=>{
         const text=[...this.state.inputText]
         
      }
      handleRemoveChar=(index)=>{
        const text=this.state.inputText.split('');
        text.splice(index,1);
        const updatedText=text.join('');
        this.setState({inputText:updatedText})
        this.setState({textLength:updatedText.length})
      }

    
    
 
  render(){
    // .split('') for changing the string to an Array
    const charList=this.state.inputText.split('').map((char,index) => {
      return <CharComponent 
      character={char}
      key={index} 
      click={()=>{this.handleRemoveChar(index)}}
      />
    });
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component ( ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component ( CharComponent) and style it as an inline box ( display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>


        <input 
        onChange={(event)=>{this.handleInputChange(event)}}
        value={this.state.inputText}
        ></input>
        <p>{this.state.inputText}</p>
        <p>{this.state.textLength}</p>

        <ValidationComponent textLength={this.state.textLength}/>
         {charList}
      </div>
    );
  }
}

export default App;
