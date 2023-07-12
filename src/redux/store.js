import { createStore } from 'redux';
import { initialState } from './initialState';

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
