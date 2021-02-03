import React, {useReducer, useState} from "react";

interface CountState {
  count: number
}

const initialCountState: CountState = {
  count: 0
}

type CountAction = { type: 'inc' | 'decr' } | { type: 'count_by', by: number }

const CountReducer: React.Reducer<CountState, CountAction> = (state: CountState, action: CountAction) => {
  // console.log("CounterReducer state,action::", state, action)

  switch (action.type) {
    case "inc":
      return {count: state.count + 1}
    case "decr":
      return {count: state.count - 1}
    default:
      return {count: state.count + action.by}
  }
}

const CounterReducer: React.FunctionComponent = () => {
  // const [state, dispatch] = useReducer<CountState, CountAction>(CountReducer, initialCountState)
  // console.log("CounterReducer state.count::", state.count)
  const [{count}, dispatch] = useReducer(CountReducer, initialCountState)

  const [number, setNumber] = useState<number>(13);

  return (
    <div style={{margin: '10px auto', width: '250px'}}>
      <h1 style={{color: "white"}}> count: {count} </h1>

      <button onClick={event => dispatch({type: 'inc'})}> + Inc</button>
      <button onClick={event => dispatch({type: 'decr'})}> - Decr</button>
      <button onClick={() => dispatch({type: 'count_by', by: 10})}> By 10</button>

      <br/>
      <hr/>
      <div>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
        <button onClick={() => dispatch({type: 'count_by', by: number})}> ByNum</button>
      </div>
    </div>
  )
}

export default CounterReducer