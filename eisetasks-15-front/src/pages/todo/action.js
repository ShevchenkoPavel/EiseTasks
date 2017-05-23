import { get } from '../../utils/fetcher';

import { SET_APP_DATA } from '../../utils/actionTypes';
import { GET_TODO_TASKS_DATA } from '../../utils/actionTypes';
import { CHANGE_FILTER_DATA } from '../../utils/actionTypes';
import { SET_FILTER_DATA } from '../../utils/actionTypes';
import { GET_TASKS_DATA } from '../../utils/actionTypes';
import { GET_TODO_TASKS_FILTERED } from '../../utils/actionTypes';

export function getTodoTasks() {
  return (dispatch) => {
    get('http://localhost/api/tasks/')
      .then((response) => {
        dispatch({
          type: GET_TODO_TASKS_DATA,
		  TodoTasks: response,		  
        })
      })
  }	
}
	
export function getTodoTasksFiltered(imp, urg, und) {
	var filteredpath="http://localhost/api/tasks/filtered";
	var link = filteredpath + '?imp='+imp+'&urg='+urg+'&und='+und;
	if (imp == false && urg == false && und == false) {
		link = "http://localhost/api/tasks/";
	}
  return (dispatch) => {
    get(link)
      .then((response) => {
        dispatch({
          type: GET_TODO_TASKS_FILTERED,
		  TodoTasksFiltered: response,		  
        })
      })
  }	
}	

export function getAppData() {
  return (dispatch) => {
    get('mockapi/app.json')
      .then((response) => {
        dispatch({
          type: SET_APP_DATA,
          dataName: response.dataName
        })
      })
  }
}
	

export function getAppTasks() {
  return (dispatch) => {
    get('mockapi/tasks.json')
      .then((response) => {
        dispatch({
          type: GET_TASKS_DATA,
//          TodoTasks: response.TodoTasks,
		  LaterTasks: response.LaterTasks,
		  DoneTasks: response.DoneTasks		  
        })
      })
  }	
}
	
	
export function getTaskFilters(filters) {
  return {
		  type: CHANGE_FILTER_DATA,
          filterImportant: filters.state.important,
	  	  filterUrgent: filters.state.urgent,
	  	  filterUnderstood: filters.state.understood
  }
}

	
export function setTaskFilters(sidebarFiltersObject) {
	return dispatch => {
		dispatch({
			type: SET_FILTER_DATA,
			filterImportant: sidebarFiltersObject.important,
			filterUrgent: sidebarFiltersObject.urgent,
			filterUnderstood: sidebarFiltersObject.understood
		})
	}
}
