/* 
========================================================
  All in one state for one component
  Src: https://github.com/oldboyxx/jira_clone/blob/master/client/src/shared/hooks/mergeState.js
======================================================== 
*/

import { useState, useCallback } from 'react'
// import { isFunction } from 'lodash';

const isFunction = (value) =>
  value &&
  (Object.prototype.toString.call(value) === '[object Function]' ||
    'function' === typeof value ||
    value instanceof Function)

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState || {})

  const mergeState = useCallback((newState) => {
    if (isFunction(newState)) {
      setState((currentState) => ({ ...currentState, ...newState(currentState) }))
    } else {
      setState((currentState) => ({ ...currentState, ...newState }))
    }
  }, [])

  return [state, mergeState]
}

export default useMergeState

/* 

const [state, mergeState] = useMergeState({
    data: null,
    error: null,
    isWorking: false,
  });

mergeState({ data:{"some data"}, error: true, isWorking: false });
mergeState({isWorking: false });

*/
