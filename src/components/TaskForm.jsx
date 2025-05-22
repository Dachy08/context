"use client"

import { useTaskContext } from "../context/TaskContext"

function TaskForm() {
  const { inputValue, setInputValue, addTask } = useTaskContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(inputValue)
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="I hours"
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  )
}

export default TaskForm
