import React from 'react';
import { useSelector } from 'react-redux';

const NameList = () => {
  const names = useSelector(state => state.names);

  return (
    <div>
      <h2>Список имен</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;