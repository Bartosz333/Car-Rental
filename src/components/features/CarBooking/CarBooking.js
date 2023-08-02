import React, { useState } from 'react';
import { Confirmation } from '../Confirmation/Confirmation';
import { ReservationForm } from '../ReservationForm/ReservationForm';

export const CarBooking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationData, setReservationData] = useState(null);

  const handleFormSubmit = (data) => {
    setReservationData(data);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setReservationData(null);
  };

  return (
    <div>
      <h2>Car Booking</h2>
      {isSubmitted ? (
        <Confirmation
          reservationData={reservationData}
          handleReset={handleReset}
        />
      ) : (
        <ReservationForm handleFormSubmit={handleFormSubmit} />
      )}
    </div>
  );
};
