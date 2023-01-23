import { useId } from 'react';

function ToggleDateMode({ mode, setMode }) {
  return (
    <div>
      {[
        { id: useId(), value: 1 },
        { id: useId(), value: 2 },
      ].map(({ id, value }) => (
        <label htmlFor={id} key={id}>
          <input
            id={id}
            value={value}
            type="radio"
            onChange={() => setMode(value)}
            checked={mode === value}
          />
        </label>
      ))}
    </div>
  );
}

export default ToggleDateMode;
