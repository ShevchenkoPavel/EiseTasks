import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    return (
      <div className={this.props.style}>	
		{this.props.children}
      </div>
    );
  }
}

TaskList.propTypes = {
	style: React.PropTypes.string
}

export default TaskList;
