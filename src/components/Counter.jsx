// Counter Through Class Components
import React, { Component } from 'react';

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}
	increment() {
		this.setState({
			count: this.state.count + 1,
		});
	}
	decrement() {
		this.setState({
			count: this.state.count - 1,
		});
	}
	// If we directly try to change the state of the component it will not rerenders the component although we can get the output in the console than how can we change the state of the component for this yo have to use setState to rerenders the components then the changes will reflect in the UI
	render() {
		return (
			<div>
				<div>count-{this.state.count}</div>
				<button onClick={() => this.increment()}>Increment</button>
				<button onClick={() => this.decrement()}>Decrement</button>
			</div>
		);
	}
}
