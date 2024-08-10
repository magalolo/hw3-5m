import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddName from './components/AddName';
import NameList from './components/NameList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Список имён</h1>
        <AddName />
        <NameList />
      </div>
    </Provider>
  );
}

export default App;