import { useSelector } from 'react-redux';
import { CarsItem } from '../../features/CarsItem/CarsItem';

export const CommercialCars = () => {
  const commercialCars = useSelector((state) => state.commercial.cars);
  return (
    <div>
      <h2>Passenger Cars</h2>
      {commercialCars.map((car) => (
        <CarsItem key={car.id} car={car} />
      ))}
    </div>
  );
};
