import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Todo from './../components/todo';
import AddTodo from './../components/addTodo';
import { fetchTodos } from '../actions/todo.actions';
import { useHistory } from 'react-router-dom';

import { LOADING_STATUS, SUCCESS_STATUS } from './../constants/states';

const Todos = ({ todos, status, error, fetchTodos }) => {
  const history = useHistory();

  useEffect(() => {
    // handleFetchTodos();
  }, []);

  const handleFetchTodos = () => {
    fetchTodos();
  };

  // if (status === SUCCESS_STATUS) {
  //   history.push('/');
  // }

  return (
    <div>
      <AddTodo />
      <button onClick={handleFetchTodos}>load</button>
      {status === LOADING_STATUS && <p>Cargando...</p>}
      {error !== null && <p>{error}</p>}
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos.data,
    status: state.todos.status,
    error: state.todos.error,
  };
};

const mapDispatchToProps = {
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
