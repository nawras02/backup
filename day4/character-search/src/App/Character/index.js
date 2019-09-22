import React from 'react';

const Character = props => {
	return (
		<div>
			<p>name:{props.name}</p><!--{} ; its variable-->
			<p>gender:{props.gender}</p>
			<p>status:{props.status}</p>
			<p>species:{props.species}</p>
			<p>location:{props.location}</p>
			<img src={props.imageLink}>
		</div>
	)
}

export default Form;