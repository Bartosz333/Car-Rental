export const initialState = {
  passenger: {
    cars: [
      {
        id: '1',
        model: 'Audi-A4',
        year: 2021,
        engine: 'diesel',
        capacity: '2.0L',
        seatingCapacity: 5,
        pricePerDay: 100,
      },
      {
        id: '2',
        model: 'BMW-3',
        year: 2022,
        engine: 'petrol',
        capacity: '1.8L',
        seatingCapacity: 5,
        pricePerDay: 115,
      },
      {
        id: '3',
        model: 'Mercedes-C',
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
        id: '4',
        model: 'Ford-Transit',
        year: 2021,
        engine: 'diesel',
        capacity: '2.0L',
        seatingCapacity: 3,
        pricePerDay: 75,
      },
      {
        id: '5',
        model: 'Renault-Master',
        year: 2022,
        engine: 'diesel',
        capacity: '2.3L',
        seatingCapacity: 2,
        pricePerDay: 85,
      },
      {
        id: '6',
        model: 'Volkswagen-Crafter',
        year: 2023,
        engine: 'diesel',
        capacity: '2.5L',
        seatingCapacity: 3,
        pricePerDay: 90,
      },
    ],
  },
};
