import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addName } from '../actions/actions';

const AddName = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return; // не добавляем пустые имена
    dispatch(addName(name));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
        required
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddName;