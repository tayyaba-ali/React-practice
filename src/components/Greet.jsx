import React from 'react';

const Greet = (props) => {
	console.log(props);
	return (
		<>
			<h1>{props.children}</h1>
			<h2>{props.name}</h2>
		</>
	);
};
export default Greet;
