'use client'
import { useState } from 'react'

export default function Input({ taskToAdd }) {
  let [inputValue, setInputValue] = useState('')
  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          if (inputValue !== '') taskToAdd(inputValue)
          setInputValue('')
        }}
      >
        submit
      </button>
    </>
  )
}
