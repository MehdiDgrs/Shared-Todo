'use client'
import { useState } from 'react'

export default function Input({ taskToAdd, taskToCompareFromInput }) {
  let [inputValue, setInputValue] = useState('')
  let [inputPlaceHolder, setInputPlaceHolder] = useState('')
  let exist = false
  console.log(taskToCompareFromInput)
  return (
    <>
      <input
        value={inputValue}
        placeholder={inputPlaceHolder}
        onChange={(e) => {
          setInputValue(e.target.value)
          console.log(inputValue)
        }}
      ></input>
      <button
        onClick={() => {
          for (let i = 0; i < taskToCompareFromInput.length; i++) {
            if (taskToCompareFromInput[i].task.includes(inputValue)) {
              exist = true
              break
            }
          }
          if (exist) {
            setInputPlaceHolder('existe deja')
            setInputValue('')
            return
          } else {
            if (inputValue !== '') {
              taskToAdd({ task: inputValue, id: inputValue })
              fetch('http://localhost:3000/api/addTask', {
                method: 'POST',
                body: JSON.stringify({ name: 'mehdi', task: inputValue }),
              })
            }
            setInputValue('')
          }
        }}
      >
        submit
      </button>
    </>
  )
}
