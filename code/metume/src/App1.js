import React from 'react';
import '.App.js';
import form from 'form';
import Gallery from 'Gallery';

// function App(){
// 	return (

// 		);
// }

class App extends React.Component{
	constructor(){
		super();
		this.state = {
				imgUrl:'',
				currentImg:'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
		}
		this.changeUrlHandler = this.changeUrlHandler.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	changeUrlHandler(){
		this.setState({imgUrl:this.state.currentImg});//anyUrl to placeHlod
	}

	onChangeHandler(){
		//log by every change
		//cosole.log(this.state);
		var value = event.target.value;
		this.setState({currentImg: value});
	}

	render(){
		return(
			<div className="App1">
				<h1>My Gallery</h1>
				<form urlHandler={this.changeUrlHandler} onChangeHandler={this.onChangeHandler}/>
				<Gallery imageUrl={this.state.imgUrl} onChangeHandler={this.onChangeHandler}/>
			</div>
			);
	}
}
export default App1;