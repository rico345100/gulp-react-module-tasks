import React, { Component } from 'react';

class MyModule extends Component {
	render() {
		return (
			<div>
				<div>Hello, {this.props.name}!</div>
			</div>
		);
	}
}

export default MyModule;