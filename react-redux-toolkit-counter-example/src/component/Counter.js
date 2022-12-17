import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "../reducers/counterReducer";

export default function Counter() {
  const countVal = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();
  const [incBy, setIncBy] = useState(countVal);

  useEffect(() => {
    console.log(countVal);
  }, [countVal]);

  return (
    <div className="App">
      <h1>Counter {countVal}</h1>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Dec
      </button>

      <div>
        <input
          type="number"
          value={incBy}
          onChange={(e) => setIncBy(+e.target.value)}
        />
        <button onClick={() => dispatch(incrementBy(incBy))}>IncBy</button>
      </div>
    </div>
  );
}
