import { createStore, combineReducers } from 'redux'

const ActionTypes = {
  TODO_ADD: 'TODO_ADD',
}

const actions = {
  add: task => ({
    type: ActionTypes.TODO_ADD,
    payload: task,
  })
}

const tasks = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.TODO_ADD:
      return [
        ...state,
        action.payload,
      ]
    default:
      return state
  }
}

const todoReducers = combineReducers({
  tasks,
})

const reducers = combineReducers({
  todo: todoReducers,
})

const store = createStore(reducers)

const selectors = {
  getTasks: store => store.todo.tasks,
}

export { actions, selectors, store }
