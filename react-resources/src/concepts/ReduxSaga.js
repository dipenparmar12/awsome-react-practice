import React from 'react'
import { connect, Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'

const ADD_TODO = 'addTodo'
const LOAD_TODO_LIST = 'LOAD_TODO_LIST'
const RENDER_TODO_LIST = 'RENDER_TODO_LIST'
const TODO_FETCH_FAILED = 'TODO_FETCH_FAILED'

const addTodo = (title) => ({
  type: ADD_TODO,
  todoItem: {
    _id: Math.random(),
    title
  }
})

const loadTodoListDipatcher = () => ({ type: LOAD_TODO_LIST })

const initialState = {
  todoList: [{ _id: 1, title: 'One Todo' }]
}

const todoReducer = (state = initialState, action) => {
  //   console.log('ReduxSaga.js::[27] action', action)
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        todoList: action.todoList
      }
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state?.todoList, action?.todoItem]
      }
    default:
      return state
  }
}

function* fetchTodoList() {
  try {
    const endpoint =
      'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json'
    const res = yield call(fetch, endpoint)
    const data = yield res.json()
    yield put({ type: RENDER_TODO_LIST, todoList: data })
  } catch (e) {
    console.log('ReduxSaga.js::[51] e', e)
    yield put({ type: TODO_FETCH_FAILED, message: e.message })
  }
}

function* loadTodoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchTodoList)
}

function* rootSaga() {
  yield all([loadTodoList()])
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(todoReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const ReduxSaga = (props) => {
  React.useEffect(() => {
    console.log(
      'ReduxSaga.js::[ReduxSaga] ',
      store.dispatch(loadTodoListDipatcher())
    )
  }, [])

  return (
    <Provider store={store}>
      <div style={{ margin: '10px' }}>
        <div>Saga</div>
        <AddTodoFormConnected />
        <hr />
        <TodoListConnected />
      </div>
    </Provider>
  )
}

const AddTodoForm = (props) => {
  const [todo, setTodo] = React.useState('')
  const { dispatch } = props

  React.useEffect(() => {
    console.log('ReduxSaga.js::[49] props', props)
  }, [props])

  return (
    <>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => dispatch(addTodo(todo)) && setTodo('')}>Add</button>
    </>
  )
}
const AddTodoFormConnected = connect()(AddTodoForm)

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const TodoList = ({ todoList }) => {
  //   console.log('ReduxSaga.js::[66] todoList', todoList)
  return (
    <>
      {todoList[Symbol.iterator] &&
        todoList.map(({ title }, i) => (
          <p key={title}>
            {++i}: {title}
          </p>
        ))}
    </>
  )
}

const TodoListConnected = connect(mapStateToProps)(TodoList)

export default ReduxSaga
// Src: https://auth0.com/blog/beyond-create-react-app-react-router-redux-saga-and-more/#Prerequisites
