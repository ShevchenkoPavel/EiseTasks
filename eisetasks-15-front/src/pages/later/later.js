import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAppTasks } from '../todo/action';
import { getTaskFilters } from '../todo/action';

import AddForm from '../../components/addForm/addForm';
import Title from '../../components/title/title';
import Task from '../../components/task/task';

class Later extends React.Component {
	
	componentDidMount() {
    this.props.getAppTasks();
  }
	
  render() {
    return (
		<div>
		
		<AddForm></AddForm>
			
			<Title title={this.props.title}></Title>
			
		    <div className="taskList">  		
			
			{this.props.LaterTasks.map((elem, index) => {
			 		return (<Task key={`${index}`} taskName={elem.name}></Task>);
/*`*/
			})}
			
			</div>
		
		</div>
		
    );
  }
}

Later.propTypes = {
  children: React.PropTypes.node,
	title: React.PropTypes.string
};

Later.defaultProps = {
	title: 'на потом',
	LaterTasks: []
}

const mapStateToProps = (state) => {
  return {
	LaterTasks: state.TodoPageReducer.LaterTasks,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAppTasks: bindActionCreators(getAppTasks, dispatch),
  getTaskFilters: bindActionCreators(getTaskFilters, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Later);