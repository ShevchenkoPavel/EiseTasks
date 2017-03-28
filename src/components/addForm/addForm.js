import React, { Component } from 'react';

import './style.css';

class AddForm extends Component {
	render() {
		return (
			<form>
                <p>
					<input id="inputTask" type="text" name="taskName" placeholder="Task"/>
					<input id="add" type="submit" value="Добавить"/>
				</p>
			{this.props.children}
            </form>
		);
	}
}


AddForm.propTypes = {
};

AddForm.defaultProps = {
}

export default AddForm;
