import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import React, { useEffect, useState } from 'react';

import CustomInput from './CustomInput';

import isValidDate from '../utils/isValidDate';
import comparePropsDates from '../utils/comparePropsDates';


function DateRangePicker({ dates, setDates }) {
  const [startDate, setStartDate] = useState(dates[0]);
  const [endDate, setEndDate] = useState(dates[1]);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    if (isValidDate(startDate) && isValidDate(endDate)) {
      // TODO check if this check is needed as seems the lib does not allow this in ui selection
      const startD = startDate.getTime() <= endDate.getTime() ? startDate : endDate;
      const endD = startDate.getTime() <= endDate.getTime() ? endDate : startDate;
      const dates = [startD, endD];

      // do api call
      setDates(dates);
    }
  }, [startDate, endDate]);

  const ref = React.createRef();

  return (
    <DatePicker
      customInput={<CustomInput ref={ref} />}
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        onChange(update);
      }}
    />
  );
}

export default React.memo(DateRangePicker, comparePropsDates);
