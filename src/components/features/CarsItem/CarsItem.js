import { CarBooking } from '../CarBooking/CarBooking';

export const CarsItem = ({ car }) => {
  return (
    <>
      <div>
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
      <div>
        <CarBooking />
      </div>
    </>
  );
};
