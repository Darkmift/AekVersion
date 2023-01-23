import React, { useId } from 'react';

import { useQuery } from 'react-query';

import formatDate from '../utils/formatDate';

function HolidayList({ startDate, endDate }) {
  // Access the client
  const id = useId();

  // Queries
  const {
    isLoading,
    isError,
    data: holidays,
    error,
  } = useQuery(['holidays', startDate, endDate], async () => {
    const urlStr = `https://www.hebcal.com/hebcal?v=1&cfg=json&latitude=31.7963186&longitude=35.175359&maj=on&start=${formatDate(
      startDate
    )}&end=${formatDate(endDate)}`;

    const response = await fetch(urlStr);
    const holidays = await response.json();

    return holidays;
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error occured {error?.message}</>;

  return (
    <div>
      {holidays?.items?.length &&
        holidays.items
          .filter((item) => item.category === 'holiday')
          .map((holiday, i) => (
            <div key={`${id}-${i}`}>
              {holiday.title}
              <ul>
                {Object.keys(holiday).map((attr, j) => (
                  <li key={`${id}-${i}-${j}`}>
                    {attr}:{JSON.stringify(holiday[attr])}
                  </li>
                ))}
              </ul>
            </div>
          ))}
    </div>
  );
}

export default HolidayList;
