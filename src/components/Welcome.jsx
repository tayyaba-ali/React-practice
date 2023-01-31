import React, { Component } from 'react';

export default class Welcome extends Component {
	render() {
		return (
			<>
				{/* Props are immutable that can't be changed  */}
				<h2>Welcome {this.props.name}</h2>
			</>
		);
	}
}
