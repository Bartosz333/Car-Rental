import { useSelector } from 'react-redux';

export const Confirmation = () => {
  const reservationData = useSelector((state) => state.reservationData);

  if (!reservationData) {
    return null;
  }

  const { model, startDate, endDate, phoneNumber, email } = reservationData;

  const formattedStartDate = startDate.toDateString();
  const formattedEndDate = endDate.toDateString();

  return (
    <div>
      <h3>Reservation Confirmation</h3>
      <p>Car: {model}</p>
      <p>Start Date: {formattedStartDate}</p>
      <p>End Date: {formattedEndDate}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {email}</p>
    </div>
  );
};
