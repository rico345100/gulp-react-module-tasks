import React, { Component, PropTypes } from 'react';

class MyComponent extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired
	}
	render() {
		const { name } = this.props;

		return (
			<div>
				<div>Hello, {name}!</div>
			</div>
		);
	}
}

export default MyComponent;