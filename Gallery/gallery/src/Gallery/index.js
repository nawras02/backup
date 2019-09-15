import React from 'react';

function Gallery(props){
	console.log({props});
	return(
		<div>
			<img src={props.imgUrl} alt="photo description" />
		</div>
	);
}

export default Gallery;