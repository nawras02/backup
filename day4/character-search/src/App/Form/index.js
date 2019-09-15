import React from 'react';

class Form extends React.Component {

	state = {
		formSpecies: '',
		formGender: ''
	}

	handleSpeaciesChange = event => {
		this.setState({formSpecies: event.target.value})
	}

	handleGenderChange = event => {
		this.setState({formGender: event.target.value})
	}
	handleFormClick = () => {
		this.props.handleClick(this.state.formSpecies, this.state.formGgender)
	}


	render(){
		return(
			<div>
				<label htmlFor="species">
					<input type="text" id="species" onChange={this.handleSpeaciesChange} placeholder="Enter species"/>			
				</label>
				<label htmlFor="gender">
					<input type="text" id="gender" onChange={this.handleGenderChange} placeholder="Enter the character's gender"/>	
				</label>	
				<button type="button" onClick={()=> {this.props.handleFormClick}}>Search</button>
			</div>
		);
	}

}

export default Form;