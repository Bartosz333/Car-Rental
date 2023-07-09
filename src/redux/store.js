import { createStore } from 'redux';

const initialState = {
  passenger: {
    cars: [
      {
        model: 'Audi A4',
        year: 2021,
        engine: 'diesel',
        capacity: '2.0L',
        seatingCapacity: 5,
        pricePerDay: 100,
      },
      {
        model: 'BMW 3 Series',
        year: 2022,
        engine: 'petrol',
        capacity: '1.8L',
        seatingCapacity: 5,
        pricePerDay: 115,
      },
      {
        model: 'Mercedes C-Class',
        year: 2023,
        engine: 'hybrid',
        capacity: '2.5L',
        seatingCapacity: 4,
        pricePerDay: 125,
      },
    ],
  },
  commercial: {
    cars: [
      {
        model: 'Ford Transit',
        year: 2021,
        engine: 'diesel',
        capacity: '2.0L',
        seatingCapacity: 3,
        pricePerDay: 75,
      },
      {
        model: 'Renault Master',
        year: 2022,
        engine: 'diesel',
        capacity: '2.3L',
        seatingCapacity: 2,
        pricePerDay: 85,
      },
      {
        model: 'Volkswagen Crafter',
        year: 2023,
        engine: 'diesel',
        capacity: '2.5L',
        seatingCapacity: 3,
        pricePerDay: 90,
      },
    ],
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
