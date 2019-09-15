import React from 'react';

function Form(props){
	return(
		<div>
			<input type="text" onChange={props.onChangeHandler} placeholder="Enter a URL"/>
			<button onClick={props.urlHandler}>Submit</button>
		</div>
	);
}

export default Form;