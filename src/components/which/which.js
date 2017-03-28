import React, { Component } from 'react';

import './style.css';

class Which extends Component {
	render() {
		return (
			<div id="sidebar__user">
				<h1 id="h1">{this.props.which} :</h1>
			{this.props.children}
			</div>
		);
	}
}


Which.propTypes = {
	which: React.PropTypes.string
};

Which.defaultProps = {
	which: 'на сегодня'
}

export default Which;
