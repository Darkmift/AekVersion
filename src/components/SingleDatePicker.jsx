import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import React, { useState, useEffect } from 'react';

import CustomInput from './CustomInput';
import isValidDate from '../utils/isValidDate';
import comparePropsDates from '../utils/comparePropsDates';

function SingleDatePicker({ dates, setDates }) {
  const [startDate, setStartDate] = useState(dates[0]);
  const ref = React.createRef();

  useEffect(() => {
    if (isValidDate(startDate)) {
      const dates = [startDate, startDate];
      // do api call
      setDates(dates);
    }
  }, [startDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<CustomInput ref={ref} />}
    />
  );
}

export default React.memo(SingleDatePicker, comparePropsDates);
