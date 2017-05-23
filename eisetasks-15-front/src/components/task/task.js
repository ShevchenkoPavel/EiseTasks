import React, { Component } from 'react';

import important from './images/important.png';
import importantActive from './images/important-active.png';

import urgently from './images/urgently.png';
import urgentlyActive from './images/urgently-active.png';

import understable from './images/understable.png';
import understableActive from './images/understable-active.png';

import sendto from './images/sendto.png';
import del from './images/delete.png';

import './style.css';

class Task extends Component {
	render() {
		return (
			<div className="task">
					<div className="objstatus">
			
						<label className="subj"><input type="checkbox" name="status" className="hide"/><span></span></label>

						<p className="subj">{this.props.taskName}</p>
						<div className="ops">
			
						<form className="taskform">
							<input className="taskform__item {this.props.hide}" type="image" src={sendto} alt="send"/>
							<input className="taskform__item" type="image" src={del} alt="delete"/>
						</form>

						</div>
					</div>
				{this.props.children}
			</div>
		);
	}
}


Task.propTypes = {
	taskName: React.PropTypes.string,
	hide: React.PropTypes.string
};

Task.defaultProps = {
	taskName: 'defaultTask',
	hide: 'hide'
}

export default Task;
