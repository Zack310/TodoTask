import "./styles.css";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState } from 'react'

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "1Doctor Appointoment",
        day: "Jun 7th at 16:00",
        reminder: true
      },
      {
        id: 2,
        text: "2birthday party",
        day: "Sep 2nd at 15:00",
        reminder: true
      },
      {
        id: 3,
        text: "3Shopping",
        day: "Aug 8th at 2:00",
        reminder: false
      }
    ]
  )

//Add Task
const addTask=(task)=> {
  const id = Math.floor(Math.random()* 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  console.log('delete', id)
}

// Toggle Reminder
const toggleReminder = (id) => {
 setTasks(
  tasks.map((task) => 
  task.id === id ? {...task, reminder:!task.reminder} : task
  )
 )
}

  return (
    <div className='App container'>
      <Header 
        onAdd={()=> setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?(
      <Tasks tasks={tasks}
      onDelete={deleteTask} 
      onToggle={toggleReminder}
        />) 
    : ('No Task')}
        
    </div>
  );
}
