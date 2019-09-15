import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from "./Photo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mytube</h1> 
        <div id="nothnigBar">
          <input type="text" placeholder="type anything"/>
          <button>doNothing</button>
        </div>
        <div id="imgDiv">
          <p>My-first-butterfly</p>
          <Photo src="1.jpeg" id="My-first-butterfly"/>
          <Photo src="2.jpg" id="My-second-butterfly"/>
          <Photo src="3.jpeg" id="My-third-butterfly"/>
        </div>        
      </div>    
    );
  }
}

export default App;