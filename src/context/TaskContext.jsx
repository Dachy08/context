"use client"

import { createContext, useState, useContext } from "react"

// Create context
const TaskContext = createContext()

// Custom hook to use the task context
export const useTaskContext = () => useContext(TaskContext)

// Provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(["I will give time for 2 hours css", "Then I will have breakfast"])

  const [inputValue, setInputValue] = useState("")

  // Add a new task
  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks([...tasks, task])
      setInputValue("")
    }
  }

  // Delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        inputValue,
        setInputValue,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
