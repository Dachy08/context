import { TaskProvider } from "./context/TaskContext"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import "./App.css"

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <div className="app-content">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  )
}

export default App
