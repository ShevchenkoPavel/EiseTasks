import React, { Component } from 'react';

import './style.css';

class Criterion extends Component {
	render() {
		return (
			<div>
                <h2 className="criterion">#{this.props.name}</h2>
			{this.props.children}
			</div>
		);
	}
}


Criterion.propTypes = {
	name: React.PropTypes.string
};

Criterion.defaultProps = {
	name: 'criterionList'
}

export default Criterion;
