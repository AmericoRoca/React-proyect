import React, { useState } from 'react';

const ToDo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(item.title);

  function handleSubmit(e) {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  }

  function handleChange(e) {
    const value = e.target.value;
    setNewValue(value);
  }

  function handleClick(){
    onUpdate(item.id, newValue);
    setIsEdit(false);
  }

  function formEdit() {
    return (
      <form className='todoUpdateForm' onSubmit={handleSubmit}>
        <input
          type='text'
          className='toDoInput'
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" type='submit' onClick={handleClick}>Guardar</button>
      </form>
    );
  }

  function toDoElement() {
    return (
      <div className='toDoInfo'>
        <span className='todoTitle'>{item.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
        <button className="buttonDelete"  onClick={(e)=> onDelete(item.id)}>Eliminar</button>
      </div>
    );
  }

  return (
    <div className='toDo'>
      {isEdit ? formEdit() : toDoElement()}
    </div>
  );
};

export default ToDo;
