import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    console.log(e.which);
    if (e.which === 13) {
      // send action
      setTitle('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Digite la nueva tarea"
      autoFocus={true}
      value={title}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

export default AddTodo;
