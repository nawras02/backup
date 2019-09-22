import React from 'react';
import Character from '../Character'

const Characters = props => {
	let data = props.data;//it got to has the same name in the app
	lat mappedComponents = data.map((characterObj) => {
		return <Character name={characterObj.name} gender={characterObj.gender} status={characterObj.status} species={characterObj.species} location={characterObj.location.name} img{characterObj.image} />
	})
	return (
		<div>
		{
			//map instead of for each because it has return statement
			mappedComponents
		}		
		</div>
	)
}

export default Form;