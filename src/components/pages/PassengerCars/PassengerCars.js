import React from 'react';
import { useSelector } from 'react-redux';

export const PassengerCars = () => {
  const passengerCars = useSelector((state) => state.passenger.cars);

  return (
    <div>
      <h2>Passenger Cars</h2>
      {passengerCars.map((car, index) => (
        <div key={index}>
          <h3>{car.model}</h3>
          <img
            src={`/images/cars/${car.model}.jpg`}
            alt={car.model}
            style={{ width: '200px' }}
          />
          <p>Year: {car.year}</p>
          <p>Engine: {car.engine}</p>
          <p>Capacity: {car.capacity}</p>
          <p>Seating Capacity: {car.seatingCapacity}</p>
          <p>Price per Day: {car.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
};
