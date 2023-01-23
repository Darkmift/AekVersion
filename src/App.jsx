import './App.scss';

import { useState, useMemo, useEffect } from 'react';
import ToggleDateMode from './components/ToggleDateMode';
import SingleDatePicker from './components/SingleDatePicker';
import DateRangePicker from './components/DateRangePicker';
import HolidayList from './components/HolidayList';

import formatDate from './utils/formatDate';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  /**
   * 1. single date mode
   * 2. date range mode
   */

  const defaultDates = useMemo(() => [new Date(), new Date()], []);

  const [toggleDateSelectMode, setToggleDateSelectMode] = useState(1);
  const [dates, setDates] = useState(defaultDates);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <h1>Hebrew Holiday browser</h1>
        <h3>Select dates on calendar to view holidays</h3>
        <ToggleDateMode mode={toggleDateSelectMode} setMode={setToggleDateSelectMode} />

        {toggleDateSelectMode === 2 ? (
          <SingleDatePicker setDates={setDates} dates={dates} />
        ) : (
          <DateRangePicker setDates={setDates} dates={dates} />
        )}
        {dates?.length === 2 && <HolidayList startDate={dates[0]} endDate={dates[1]} />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
