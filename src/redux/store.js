import { createStore, combineReducers } from 'redux';
import { initialState } from './initialState';

const passengerReducer = (state = initialState.passenger, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case 'REMOVE_CAR':
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    // Dodaj inne akcje dotyczące stanu cars tutaj
    default:
      return state;
  }
};

const commercialCarsReducer = (
  state = initialState.commercial.cars,
  action
) => {
  switch (action.type) {
    case 'ADD_CAR':
      return [...state, action.payload];
    case 'REMOVE_CAR':
      return state.filter((car) => car.id !== action.payload);
    // Dodaj inne akcje dotyczące stanu commercial.cars tutaj
    default:
      return state;
  }
};

const reservationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_RESERVATION_DATA':
      return action.payload;
    case 'CLEAR_RESERVATION_DATA':
      return null;
    default:
      return state;
  }
};

export const setReservationData = (reservationData) => {
  return {
    type: 'SET_RESERVATION_DATA',
    payload: reservationData,
  };
};

const rootReducer = combineReducers({
  passenger: passengerReducer,
  commercial: combineReducers({
    cars: commercialCarsReducer,
  }),
  reservationData: reservationReducer,
});

export const store = createStore(rootReducer);
