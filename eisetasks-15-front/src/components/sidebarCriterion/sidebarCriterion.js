import React, { Component } from 'react';

import './style.css';

class SidebarCriterion extends Component {
	
	constructor(props) {
		super(props);
		this.state = {status: false};
	}

	
	render() {
		
		return (
			
				<div> #{this.props.name}	
				<img src={this.props.icon} className="circle_right"></img>
			</div>
		);
	}
}


SidebarCriterion.propTypes = {
	name: React.PropTypes.string,
	icon: React.PropTypes.string
};

SidebarCriterion.defaultProps = {
	name: '#',
	icon: 'passive'
}


export default SidebarCriterion;