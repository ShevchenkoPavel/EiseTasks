import React, { Component } from 'react';

import './style.css';

class Title extends Component {
	render() {
		return (
			<div id="sidebar__user" className="mg">
				<h1 id="h1">{this.props.title} :</h1>
			{this.props.children}
			</div>
		);
	}
}


Title.propTypes = {
	title: React.PropTypes.string
};

Title.defaultProps = {
	title: 'defaultTitle'
}

export default Title;
