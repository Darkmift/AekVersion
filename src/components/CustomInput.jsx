import { forwardRef } from 'react';

function CustomInput({ value, onClick }, ref) {
  return (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  );
}

export default forwardRef(CustomInput);
