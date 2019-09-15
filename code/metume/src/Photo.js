import React, { Component } from 'react';

/*

Put your photos into their own React Components (called Photo) and 
include them within the App Component.
- Each photo's URL should still be declared within the App Component and passed to the child Photo as this.props
- Each caption should also be declared within the App Component and passed to the child Photo as this.props
2. Put your input field and button into its own React Component called SearchBar and include it within the AppComponent.


*/
class Photo1 extends React.Component{
	render(props){
		return (<div>
					<p>{this.props.id}</p>
					<img src={props.src} id={props.id} class="imgStyle"/>
				</div>
			);
	}
}

function Photo(props) {
  return <img src={props.src} id={props.id} class="imgStyle"/>;
}

export default Photo;