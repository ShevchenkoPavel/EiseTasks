import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAppTasks } from '../todo/action';
import { getTaskFilters } from '../todo/action';


import Title from '../../components/title/title';
import Task from '../../components/task/task';


class Done extends React.Component {	
	
   componentDidMount() {
    this.props.getAppTasks();
  }
	
  render() {
    return (
		<div>
			
			<Title title={this.props.title}></Title>
			
		    <div className="taskList">  		
			
			{this.props.DoneTasks.map((elem, index) => {
			 		return (<Task key={`${index}`} taskName={elem.name} hide={'hide'}></Task>);
/*`*/
			})}
			
			</div>
		
		</div>
    );
  }
}

Done.propTypes = {
  children: React.PropTypes.node,
	title: React.PropTypes.string
};

Done.defaultProps = {
	title: 'выполненные',
	DoneTasks: []
}

const mapStateToProps = (state) => {
  return {
	DoneTasks: state.TodoPageReducer.DoneTasks,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAppTasks: bindActionCreators(getAppTasks, dispatch),
  getTaskFilters: bindActionCreators(getTaskFilters, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Done);