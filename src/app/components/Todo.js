'use client'
import { useEffect, useState } from 'react'
import Input from './input'
import TaskList from './taskList'
export default function ({ taskList }) {
  let [taskArray, setTask] = useState(taskList)
  let [inputValue, setInputValue] = useState('')

  let addTask = (value) => {
    setTask((previous) => [value, ...previous])
  }

  //   if (taskList[0]) {
  //     let dataToArray = taskList.map((x) => {
  //       if (x.task) {
  //         return {
  //           task: x.task,
  //           id: x._id,
  //         }
  //       }
  //     })
  //     setTask((prev) => [...prev, ...dataToArray.reverse()])
  //   }

  return (
    <>
      {/* <Input
        taskToAdd={addTask}
        taskToCompareFromInput={taskArray}
        inputState={inputValue}
        inputChangeState={setInputValue}
      ></Input> */}
      <TaskList
        inputValue={inputValue}
        taskArray={taskArray}
        updateArray={setTask}
      ></TaskList>
    </>
  )
}
