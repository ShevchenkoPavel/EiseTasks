import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTaskFilters } from '../../pages/todo/action';
import { setTaskFilters } from '../../pages/todo/action';

import './style.css';

import create from './images/create.png';
import burgersidebar from './images/burgersidebar.png';


import important from './images/sidebar-star.png';
import importantSelected from './images/sidebar-star-active.png';
import urgent from './images/sidebar-fire.png';
import urgentSelected from './images/sidebar-fire-active.png';
import understood from './images/sidebar-understood.png';
import understoodSelected from './images/sidebar-understood-active.png';


import User from '../user/user';
import SidebarCriterion from '../sidebarCriterion/sidebarCriterion';


class Sidebar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {important: false,
					  urgent: false,
					  understood: false
					 };
	}
	
	
	selectImportant() {	
		var status = this.state.important;
		//console.log("before: " + status, this.state);

		if (status) {
			status=false;
		} else {
			status=true;
		}
	
		this.setState({important: status})
		//console.log("after: " + status, this.state);
	}
	
	selectUrgent() {
		
		var status = this.state.urgent;
		if (status) {
			status=false;
		} else {
			status=true;
		}
	
		this.setState({urgent: status})
	}
	
	selectUnderstood() {
		
		var status = this.state.understood;
		if (status) {
			status=false;
		} else {
			status=true;
		}
		
		this.setState({understood: status})
	}
	
	
	handleChange(event) {
		console.log(event.target.checked);
		console.log(event.target.name);
		console.log(this.state);
		
//		setTaskFilters(filters);
//		setTaskFilters(event.target.name, event.target.checked);
	}
	
	
/*
	functuin function(event) {
		Setfilters();
	}
*/
	
	
	render() {
//		console.log(this.vFilters);
		return (
			<div className="left">
            	<aside className="sidebar">
			
						<div className="sidebar__other">
							<a href="index.html">EiseTasks</a>
						</div>		
			
					<User name={this.props.name}></User>
			
			</aside>
			{this.props.children}
			</div>
		);
	}
}


Sidebar.propTypes = {
	name: React.PropTypes.string,
};

Sidebar.defaultProps = {
	name: 'defaultUser'
}

const mapStateToProps = (state) => {
  return {
	//TodoTasks: state.TodoPageReducer.TodoTasks,
	  taskFilters: state.TodoPageReducer,
	filterImportant: state.TodoPageReducer.taskFilters.filterImportant,
	filterUrgent: state.TodoPageReducer.taskFilters.filterUrgent,
	filterUnderstood: state.TodoPageReducer.taskFilters.filterUnderstood
  }
};

const mapDispatchToProps = (dispatch) => ({
//	getTaskFilters: bindActionCreators(getTaskFilters, dispatch)
 // getAppData: bindActionCreators(getAppData, dispatch),
  // getAppData: () => { dispatch(getAppData()); }
});

const stateDispatchToStore = (dispatch) => ({
	
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);