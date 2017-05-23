import React, { Component } from 'react';

import './style.css';

import TaskList from '../taskList/taskList';

class AddForm extends Component {
	
	render() {
		return (
			<div>
			<form>
                <p className="mg">
					<input id="inputTask" type="text" name="taskName" placeholder="+ new task..." />
					<input id="add" type="submit" value='Добавить'/>
				</p>
            </form>
			{this.props.children}
			</div>
		);
	}

			/*		
			<form>
                <p>
					<input id="inputTask" type="text" name="taskName" placeholder="Input task here..."/>
					<input id="add" type="submit" value="Добавить"/>
				</p>
			{this.props.children}
            </form>					
			*/
}


AddForm.propTypes = {
};

AddForm.defaultProps = {
}

export default AddForm;
