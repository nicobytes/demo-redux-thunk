import React from 'react';
// import '../styles/components/App.styl';

const Todo = ({ id, title, completed }) => {
  return (
    <li>
      <label>
        {title}
        <input type="checkbox" />
      </label>
    </li>
  );
};
export default Todo;
