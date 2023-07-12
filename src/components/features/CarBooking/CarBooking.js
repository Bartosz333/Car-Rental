import { useState } from 'react';
import DatePicker from 'react-datepicker';

const CarBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h2>Select a booking date:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='yyyy-MM-dd'
      />
    </div>
  );
};

export default CarBooking;
