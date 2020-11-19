import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions, selectors } from '../redux'

const Todo = () => {
  const [task, updateTask] = useState('')
  const tasks = useSelector(selectors.getTasks)
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    if (task.trim().length) {
      dispatch(actions.add(task))
      updateTask('')
    }
  }

  const handleTaskChange = event => {
    updateTask(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input data-testid="field-task" onInput={handleTaskChange} value={task}/>
        <button data-testid="btn-add">Add</button>
      </form>
      <ul data-testid="tasks-list">
        {tasks.map((t, i) => (
          <li data-testid="tasks-item" key={i}>{t}</li>
        ))}
      </ul>
    </>
  )
}

export default Todo
