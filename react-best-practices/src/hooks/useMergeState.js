import React from 'react'
/**
 *
 * @param {*} initialState
 * @returns
 * @src https://www.30secondsofcode.org/react/s/use-merge-state
 */
const useMergeState = (initialState = {}) => {
  const [value, setValue] = React.useState(initialState)

  const mergeState = (newState) => {
    if (typeof newState === 'function') newState = newState(value)
    setValue({ ...value, ...newState })
  }

  return [value, mergeState, setValue]
}

export default useMergeState

// const MyApp = () => {
//   const [data, setData] = useMergeState({ name: 'John', age: 20 });

//   return (
//     <>
//       <input
//         value={data.name}
//         onChange={e => setData({ name: e.target.value })}
//       />
//       <button onClick={() => setData(({ age }) => ({ age: age - 1 }))}>
//         -
//       </button>
//       {data.age}
//       <button onClick={() => setData(({ age }) => ({ age: age + 1 }))}>
//         +
//       </button>
//     </>
//   );
// };

// ReactDOM.render(<MyApp />, document.getElementById('root'));
