import React, { Component } from 'react';
// State in Class Component
// As props are immutable so here a question arises how can we change the state of the component so now state comes in the picture
export default class Message extends Component {
	constructor() {
		super();
		this.state = {
			message: 'Welcome visitor',
		};
	}
	changemessage() {
		this.setState({
			message: 'Me badal gya🙂',
		});
	}
	render() {
		return (
			<div>
				<h1>Changing the State of the</h1>
				<h1>{this.state.message}</h1>
				<button onClick={() => this.changemessage()}>Change me</button>
				<br />
				<br />
			</div>
		);
	}
}
