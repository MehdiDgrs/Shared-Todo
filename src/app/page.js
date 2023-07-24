'use client'

import TaskList from './components/taskList'
import Input from './components/input'
import { useState } from 'react'

export default async function App() {
  let result = await fetch('http://localhost:3000/api/tasks')
  console.log(result)
  let [taskArray, setTask] = useState([])
  let addTask = (value) => {
    setTask((previous) => [...previous, value])
  }

  return (
    <main>
      <h1>TodoList</h1>
      <TaskList taskArray={taskArray} updateArray={setTask}></TaskList>
      <Input taskToAdd={addTask}></Input>
    </main>
  )
}
