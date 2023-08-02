import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReservationData } from '../../../redux/store';
import { DateInput } from '../DateInput/DateInput';

export const ReservationForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isCarReserved, setIsCarReserved] = useState(false);

  const dispatch = useDispatch();
  const passengerCars = useSelector((state) => state.passenger.cars);
  const commercialCars = useSelector((state) => state.commercial.cars);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!startDate || !endDate || !phoneNumber || !email) {
      alert('Please fill in all fields');
      return;
    }

    const selectedPassengerCars = passengerCars.filter((car) => {
      const isCarReservedForDates = car.reservedDate.find(
        (reservedDate) =>
          (startDate >= reservedDate.startDate &&
            startDate <= reservedDate.endDate) ||
          (endDate >= reservedDate.startDate && endDate <= reservedDate.endDate)
      );

      return (
        isCarReservedForDates &&
        ((startDate >= car.availableDate.startDate &&
          startDate <= car.availableDate.endDate) ||
          (endDate >= car.availableDate.startDate &&
            endDate <= car.availableDate.endDate))
      );
    });

    const selectedCommercialCars = commercialCars.filter((car) => {
      const isCarReservedForDates = car.reservedDate.find(
        (reservedDate) =>
          (startDate >= reservedDate.startDate &&
            startDate <= reservedDate.endDate) ||
          (endDate >= reservedDate.startDate && endDate <= reservedDate.endDate)
      );

      return (
        isCarReservedForDates &&
        ((startDate >= car.availableDate.startDate &&
          startDate <= car.availableDate.endDate) ||
          (endDate >= car.availableDate.startDate &&
            endDate <= car.availableDate.endDate))
      );
    });

    if (selectedPassengerCars.length > 0 || selectedCommercialCars.length > 0) {
      setIsCarReserved(true);
      return;
    }

    const reservationData = {
      startDate,
      endDate,
      phoneNumber,
      email,
    };

    dispatch(setReservationData(reservationData));
    setStartDate(null);
    setEndDate(null);
    setPhoneNumber('');
    setEmail('');
    setIsCarReserved(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Reservation Form</h3>
      <div>
        <label>Start Date:</label>
        <DateInput selected={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label>End Date:</label>
        <DateInput selected={endDate} onChange={handleEndDateChange} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type='number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {isCarReserved && (
        <p>The car is already reserved for the selected dates.</p>
      )}
      <button type='submit'>Submit</button>
    </form>
  );
};
