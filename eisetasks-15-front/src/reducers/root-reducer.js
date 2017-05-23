import { combineReducers } from 'redux';

import TodoPageReducer from '../pages/todo/reducer';

const TodoReducer = combineReducers({
  TodoPageReducer
});

export default (state = {}, action) => {
  return TodoReducer(state, action);
}