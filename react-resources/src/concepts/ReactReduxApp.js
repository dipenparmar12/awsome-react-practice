import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'

const ADD_TODO = 'addTodo'

const addTodo = (title) => ({
  type: ADD_TODO,
  todoItem: {
    _id: Math.random(),
    title,
  },
})

const initialState = {
  todoList: [{_id:1,title:"One Todo"}],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newTodoList = { todoList: [...state?.todoList, action?.todoItem] }
      console.log('ReduxSaga.js::[23] newTodoList', newTodoList)
      return newTodoList
    default:
      return state
  }
}

const store = createStore(todoReducer)

const ReactReduxApp = (props) => {
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
      <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => dispatch(addTodo(todo)) && setTodo('')}>Add</button>
    </>
  )
}
const AddTodoFormConnected = connect()(AddTodoForm)

const mapStateToProps = (state) => ({
  todoList: state.todoList,
})

const TodoList = ({ todoList }) => {
  //   console.log('ReduxSaga.js::[66] todoList', todoList)
  return (
    <>
      {todoList[Symbol.iterator] &&
        todoList.map(({ title }, i) => (
          <p key={title}>
            {i}: {title}
          </p>
        ))}
    </>
  )
}

const TodoListConnected = connect(mapStateToProps)(TodoList)

export default ReactReduxApp
// Src: https://auth0.com/blog/beyond-create-react-app-react-router-redux-saga-and-more/#Prerequisites
