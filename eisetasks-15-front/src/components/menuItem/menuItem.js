import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class MenuItem extends Component {
	render() {
		return (
			<Link to={this.props.link}>
			{this.props.name} 
				<div className="circle nofloat">
				{this.props.number}
				</div>
			{this.props.children}
			</Link>
		);
	}
}


MenuItem.propTypes = {
	link: React.PropTypes.string,
	name: React.PropTypes.string,
	number: React.PropTypes.number
};

MenuItem.defaultProps = {
	link: 'index.html',
	name: 'сегодня',
	number: 55
}

export default MenuItem;
