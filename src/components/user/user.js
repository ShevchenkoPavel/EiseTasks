import React, { Component } from 'react';

import defaultAvatarUrl from '../../pages/app/images/avatar.png';
import './style.css';

class User extends Component {
	render() {
		return (
			<div id="sidebar__user">
                    <img src={defaultAvatarUrl}
					alt={this.props.name}
					></img>
                    <p className="username"> {this.props.name} </p>
			{this.props.children}
			</div>
		);
	}
}


User.propTypes = {
	name: React.PropTypes.string,
	avatar: React.PropTypes.object
};

User.defaultProps = {
	name: 'имя фамилия',
	avatar: {defaultAvatarUrl}
}

export default User;
