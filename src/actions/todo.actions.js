import * as types from '../constants/todos.types';
import axios from 'axios';

import { API } from './../constants/vars';

export const addTodosRequest = () => ({ type: types.ADD_TODOS_REQUEST });
export const addTodosSuccess = data => ({
  type: types.ADD_TODOS_SUCCESS,
  data,
});
export const addTodosFailed = error => ({
  type: types.ADD_TODOS_FAILED,
  error,
});

// Effect
export function fetchTodos() {
  return async dispatch => {
    dispatch(addTodosRequest());
    try {
      const response = await axios.get(`${API}/todos`);
      setTimeout(() => {
        dispatch(addTodosSuccess(response.data));
      }, 3000);
    } catch (error) {
      return dispatch(addTodosFailed('Ups algo salio'));
    }
  };
}
