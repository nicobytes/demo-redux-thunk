import {
  ADD_TODOS_SUCCESS,
  ADD_TODOS_REQUEST,
  ADD_TODOS_FAILED,
} from '../constants/todos.types';

import * as status from './../constants/states';

const initialState = {
  status: status.IDLE_STATUS,
  data: [],
  error: null,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOS_REQUEST:
      return {
        ...state,
        status: status.LOADING_STATUS,
      };
    case ADD_TODOS_SUCCESS:
      return {
        ...state,
        data: action.data,
        status: status.SUCCESS_STATUS,
      };
    case ADD_TODOS_FAILED:
      return {
        ...state,
        status: status.FAILURE_STATUS,
        error: action.error,
      };

    default:
      return state;
  }
}
