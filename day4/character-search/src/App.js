import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Characters from './App/Characters'

class App extends React.Component {
  state ={
 /*   appSpecies: '',
    appGender: ''*/
    apiData: []
  }

  handleClick = (species, gender) => {
    let url =`https://rickandmortyapi.com/api/character/?species=${species}&gender=${gender}`;
    fetch(url)
      .then(response => response.json())
      .then(parsedResponse => this.setState({apiData: parsedResponse.results}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1>Hello :)</h1>
        <Form handleClick={this.handleClick} /><!--properity: handleClick= properity value: {this.handleClick}-->
/*        <Characters appSpecies={this.state.appSpecies} appGender={this.state.appGender}/>
*/      
        <Characters data={this.state.apiData}/>

</div>
    );
  }
}

export default App;
