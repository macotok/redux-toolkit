import { ordered, restocked } from './iceCreamSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { useState } from 'react';

const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numberOfIcecreas = useAppSelector(
    (state) => state.icecream.numberOfIcecream
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of ice creams - {numberOfIcecreas}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        {value} Restocked Ice Cream
      </button>
    </div>
  );
};

export default IcecreamView;
