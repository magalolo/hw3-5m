import { ADD_NAME } from '../actions/actions';

const initialState = {
  names: JSON.parse(localStorage.getItem('names')) || [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      const newNames = [...state.names, action.payload];
      localStorage.setItem('names', JSON.stringify(newNames)); // сохраняем в localStorage
      return {
        ...state,
        names: newNames,
      };
    default:
      return state;
  }
};

export default rootReducer;