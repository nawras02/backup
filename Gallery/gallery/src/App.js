import React from 'react';
import './App.js';
import Form from './Form';
import Gallery from './Gallery';


// function App(){
// 	return (

// 		);
// }

class App extends React.Component{
	constructor(){
		super();
		this.state = {
				imgUrl:'',
				currentImg: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
		}
		this.changeUrlHandler = this.changeUrlHandler.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	changeUrlHandler(){
		this.setState({imgUrl:this.state.currentImg});//anyUrl to placeHlod
	}

	onChangeHandler(event){
		//log by every change
		//cosole.log(this.state);
		var value = event.target.value;
		this.setState({currentImg: value});
	}

	render(){
		return(
			<div className="App">
				<h1>My Gallery</h1>
				<form urlHandler={this.changeUrlHandler} onChangeHandler={this.onChangeHandler}/>
				<Gallery imageUrl={this.state.imgUrl}/>
			</div>
			);
	}
}
export default App;