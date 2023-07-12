import React from 'react';
import { useSelector } from 'react-redux';
import { CarsItem } from '../../features/CarsItem/CarsItem';

export const PassengerCars = () => {
  const passengerCars = useSelector((state) => state.passenger.cars);

  return (
    <div>
      <h2>Commercial Cars</h2>
      {passengerCars.map((car) => (
        <CarsItem key={car.id} car={car} />
      ))}
    </div>
  );
};
