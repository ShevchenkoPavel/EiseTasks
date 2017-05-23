import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAppData } from './action';
import { getTodoTasks } from './action';
import { getTodoTasksFiltered } from './action';
import { getTaskFilters } from './action';


import Sidebar from '../../components/sidebar/sidebar';
import Title from '../../components/title/title';
import AddForm from '../../components/addForm/addForm';
import Task from '../../components/task/task';

import SidebarCriterion from '../../components/sidebarCriterion/sidebarCriterion';

import TaskList from '../../components/taskList/taskList';

import important from '../../components/sidebar/images/sidebar-star.png';
import importantSelected from '../../components/sidebar/images/sidebar-star-active.png';
import urgent from '../../components/sidebar/images/sidebar-fire.png';
import urgentSelected from '../../components/sidebar/images/sidebar-fire-active.png';
import understood from '../../components/sidebar/images/sidebar-understood.png';
import understoodSelected from '../../components/sidebar/images/sidebar-understood-active.png';

import './style.css';

class Todo extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { important: this.props.filterImportant,
					    urgent: this.props.filterUrgent,
					    understood: this.props.filterUnderstood
					  };
	}
	
	componentDidMount() {
    this.props.getAppData();
    this.props.getTodoTasks();
  }
	
	
	chooseFilter(name, val) {
		if (name == 'imp') {
			this.setState({important: val })
		};
		
		if (name == 'urg') {
			this.setState({urgent: val })
		};
		
		if (name == 'und') {
			this.setState({understood: val })
		};
	}

	handleChange(event) {
		console.log(event.target.name, "=", event.target.checked);
		this.chooseFilter(event.target.name, event.target.checked);
	}

	/*
	addTask() {
			//onAddTask(this.taskInput.value);
			this.setState ({
				...this.props.TodoTasks,
				...{"name": this.taskInput.value}
			})
//			console.log(this.taskInput.value);
			this.taskInput.value = '';
	}
	
			<form>
                <p>
					<input type="text" name="taskName" placeholder="Input task here..." ref={(input) => (this.taskInput = input)} />
					<input type="submit" type="button" value='Добавить' onClick={this.addTask.bind(this)}/>
				</p>
            </form>
			*/
/*			
			<TaskList style="taskList">
				
			{this.props.TodoTasks.map((elem, index) => {
			 
			 		if (showall) {
			 			return (<Task key={`${index}`} taskName={elem.name}></Task>);	
					} else {
			 
			 		if (((this.state.important == true) && (elem.important == this.state.important)) ||
						((this.state.urgent == true) && (elem.urgent == this.state.urgent)) || 
						((this.state.understood == true) && (elem.understood == this.state.understood))) {
			 			return (<Task key={`${index}`} taskName={elem.name}></Task>);
					   }
					}
			})}
			
			</TaskList>
					*/
	
	render() {
		
	this.props.getTodoTasksFiltered(this.state.important, this.state.urgent, this.state.understood);
		
		
		//console.log(this.state);
		//console.log(showall);
		//console.log(this.props.TodoTasks);
		//console.log(this.props.filterImportant);
		return (
			<div className="full">
			
			
			<div className="left">
				<Sidebar name={this.props.name}>
					<div className="fF">
						<form>
							
							<label className="label">
							<input id="first" className="hide" name="imp"type="checkbox"
							defaultChecked={this.props.filterImportant}
							onChange={this.handleChange.bind(this)}></input>
							<SidebarCriterion name="важно" icon={this.state.important ? importantSelected : important}></SidebarCriterion>
							</label>
							

							<label className="label">
							<input id="second" className="hide" name="urg" type="checkbox" defaultChecked={this.props.filterUrgent} onChange={this.handleChange.bind(this)}></input>
							<SidebarCriterion name="срочно" icon={this.state.urgent ? urgentSelected : urgent}></SidebarCriterion>
							</label>

							<label className="label">
							<input id="third" className="hide" name="und" type="checkbox" defaultChecked={this.props.filterUnderstood} onChange={this.handleChange.bind(this)}></input>
							<SidebarCriterion name="понятно" icon={this.state.understood ? understoodSelected : understood}></SidebarCriterion>
							</label>

						</form>
					</div>
				</Sidebar>
			</div>
			
			<AddForm></AddForm>
			
			<Title title={this.props.title}></Title>
			
			
			
			<TaskList style="taskList">
				
			{this.props.TodoTasksFiltered.map((elem, index) => {
			 
			 	return (<Task key={`${index}`} taskName={elem.name}></Task>);		 		
/*`*/		})}
			
			</TaskList>
			
			</div>
		);
	}
	
}



Todo.propTypes = {
	
	title: React.PropTypes.string,
	name: React.PropTypes.string,
	
  children: React.PropTypes.node
};

Todo.defaultProps = {
	title: "На сегодня",
	name: "Имя Фамилия",
	TodoTasks: [],
	TodoTasksFiltered: []
}


const mapStateToProps = (state) => {
  return {
	TodoTasks: state.TodoPageReducer.TodoTasks,
    TodoTasksFiltered: state.TodoPageReducer.TodoTasksFiltered,
	  filterImportant: state.TodoPageReducer.taskFilters.filterImportant,
      filterUrgent: state.TodoPageReducer.taskFilters.filterUrgent,
      filterUnderstood: state.TodoPageReducer.taskFilters.filterUnderstood
  }
};


const mapDispatchToProps = (dispatch) => ({
  getAppData: bindActionCreators(getAppData, dispatch),
  getTodoTasks: bindActionCreators(getTodoTasks, dispatch),
  getTodoTasksFiltered: bindActionCreators(getTodoTasksFiltered, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(Todo);