import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DateInput = ({ selected, onChange, isDateReserved }) => {
  const highlightDates = isDateReserved
    ? isDateReserved.map((reservedDate) => new Date(reservedDate))
    : [];

  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat='yyyy-MM-dd'
      minDate={new Date()}
      highlightDates={highlightDates}
      customDayClass={(date) =>
        isDateReserved &&
        isDateReserved.some(
          (reservedDate) => date.getTime() === reservedDate.getTime()
        )
          ? 'reserved-date'
          : undefined
      }
    />
  );
};
