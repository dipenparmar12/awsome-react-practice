import React, {useReducer, useState} from "react";

/*
//------------
// Reducer Steps:
# ModelType <T>
# ModelSeed | ModelInitState <T>
# ModelDispatchKeys <enum>
# IModelKeys <interface>
# ModelAction  <type>
# ModelState <interface>
# ReducerClass <class|function> /// switch, conditional based execution
*/

const genId = (len = 8): string => '_' + Math.random().toString(36).substr(2, len);

interface TodoType {
  id: any,
  name: string
}

// const name = 'Make Excellent UX/UI'
const initTodos: TodoType[] = [
  {id: genId(), name: 'Hit Enter! and you are done.'},
  {id: genId(), name: 'See the magic, or miracle '},
  {id: genId(), name: 'Lorem ipsum dolor sit amet.!'},
  {id: genId(), name: 'Lorem ipsum dolor sit amet, consectetur adipisicing'},
  {id: genId(), name: 'This is Todo '},
  {id: genId(), name: 'We are on the way...'},
]

interface TodosState {
  todos: TodoType[]
}

enum dispatchKeys {
  TODO_ADD = 'TODO_ADD',
  TODO_DELETE = 'TODO_DELETE',
}

interface ITodoAdd {
  type: dispatchKeys.TODO_ADD,
  todo: TodoType,
}

interface ITodoRemove {
  type: dispatchKeys.TODO_DELETE
  id: string,
}

type TodoAction = ITodoAdd | ITodoRemove
// type TodoAction = { type: 'TODO_ADD', todo: TodoType } | { type: 'TODO_DELETE', id: string }

const TodoReducer: React.Reducer<TodosState, TodoAction> = (state: TodosState, action: TodoAction) => {
  // console.log("TodoReducer state::", state)
  // console.log("TodoReducer action::", action)

  switch (action.type) {
    case dispatchKeys.TODO_ADD:
      return {todos: [...state.todos, action.todo]}
    case dispatchKeys.TODO_DELETE:
      console.log("TodoReducer Remove::", action)
      return {todos: state.todos.filter(todo => todo.id !== action.id)}
  }

  return {todos: [...state.todos]}
}

const TodoComponent = () => {
  // const [state, dispatch] = useReducer(TodoReducer, {todos: initTodos});
  const [{todos}, dispatch] = useReducer(TodoReducer, {todos: initTodos});
  const [todo, setTodo] = useState('Make Excellent UX/UI');

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (todo && todo !== '') {
          const newTodo: TodoType = {id: genId(), name: todo}
          dispatch({type: dispatchKeys.TODO_ADD, todo: newTodo})
          setTodo('')
        }
      }}>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit' style={{display: 'block', width: '100%'}}> Add</button>
      </form>

      <ul>
        {todos.map((todo: TodoType) =>
          <li key={todo.id}
              style={{cursor: 'pointer'}}
              onClick={() => {
                dispatch({type: dispatchKeys.TODO_DELETE, id: todo.id})
              }}
          >
            {(todo && todo.name) ? todo.name : '#NA'}
          </li>
        )}
      </ul>
    </div>
  )
}

export default TodoComponent;

