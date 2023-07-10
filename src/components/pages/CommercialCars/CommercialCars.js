import { useSelector } from 'react-redux';

export const CommercialCars = () => {
  const commercialCars = useSelector((state) => state.commercial.cars);
  return (
    <div>
      <h2>Commercial Cars</h2>
      {commercialCars.map((car, index) => (
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
