import React, { Component } from 'react';

import './style.css';

class Content extends Component {
	render() {
		return (
			<div className="right">
				<main className="content">
				{this.props.children}
				</main>
			</div>
		);
	}
}


Content.propTypes = {
	name: React.PropTypes.string
};

Content.defaultProps = {
	name: 'имя фамилия'
}

export default Content;
