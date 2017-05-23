import { SET_APP_DATA } from '../../utils/actionTypes';
import { GET_TODO_TASKS_DATA } from '../../utils/actionTypes';
import { GET_TODO_TASKS_FILTERED } from '../../utils/actionTypes';
import { CHANGE_FILTER_DATA } from '../../utils/actionTypes';
import { SET_FILTER_DATA } from '../../utils/actionTypes';
import { GET_TASKS_DATA } from '../../utils/actionTypes';

const defaultState = {
	
	taskFilters: {
		  filterImportant: false,
		  filterUrgent: false,
		  filterUnderstood: false
	}
}

export default (state = defaultState, action) => {
  switch (action.type) {

    case SET_APP_DATA: {
      return {
        ...state,
        dataName: action.dataName
      }
    }
		  
	case GET_TODO_TASKS_DATA: {
      return {
        ...state,
        TodoTasks: action.TodoTasks
      }
    }
		  
	case GET_TODO_TASKS_FILTERED: {
      return {
        ...state,
        TodoTasksFiltered: action.TodoTasksFiltered
      }
    }	  
		  
	case GET_TASKS_DATA: {
      return {
        ...state,
		LaterTasks: action.LaterTasks,
		DoneTasks: action.DoneTasks
      }
    }
		  
	  case CHANGE_FILTER_DATA: {
		  return {
		  ...state,
		  filterImportant: action.filterImportant,
		  filterUrgent: action.filterUrgent,
		  filterUndersood: action.filterUnderstood
  		}
  }
		  
    default: {
      return state;
    }
		  
  }
}