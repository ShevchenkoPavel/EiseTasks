import React, { Component } from 'react';

import edit from '../../pages/app/images/edit.png';
import del from '../../pages/app/images/delete.png';
import inprocess from '../../pages/app/images/inprocess.png';
import complete from '../../pages/app/images/complete.png';

import './style.css';

class Task extends Component {
	render() {
		return (
			<div className="task">
					<div className="objstatus">
						<img src={this.props.statusImg}  alt="status"></img>
						<p className="subj">{this.props.taskName}</p>
						<div className="ops">
						<img className="ops__item" src={edit} alt="edit"></img>
						<img className="ops__item" src={del} alt="del"></img> 
						</div>
					</div>
				{this.props.children}
			</div>
		);
	}
}


Task.propTypes = {
	taskName: React.PropTypes.string,
	statusImg: React.PropTypes.object
};

Task.defaultProps = {
	taskName: 'зайти за заданием',
	statusImg: {inprocess}
}

export default Task;
