"use client";
import { useState } from "react";

export default function Input({
  taskToAdd,
  taskToCompareFromInput,
  inputState,
  inputChangeState,
}) {
  let [inputPlaceHolder, setInputPlaceHolder] = useState("");
  let exist = false;
  console.log(taskToCompareFromInput);
  return (
    <div className="inputContainer">
      <input
        onClick={(e) => {
          setInputPlaceHolder(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            taskToAdd({ task: inputState, id: inputState });
            inputChangeState("");
          }
        }}
        value={inputState}
        placeholder={inputState}
        onChange={(e) => {
          inputChangeState(e.target.value);
          console.log(inputState);
        }}
      ></input>
      <button
        className="button"
        onClick={() => {
          for (let i = 0; i < taskToCompareFromInput.length; i++) {
            if (taskToCompareFromInput[i].task.includes(inputState)) {
              exist = true;
              break;
            }
          }
          if (exist) {
            setInputPlaceHolder("Cette tâche existe deja");
            setInputPlaceHolder("");
            inputChangeState("");
            return;
          } else {
            if (inputState !== "") {
              taskToAdd({ task: inputState, id: inputState });
              fetch("http://localhost:3000/api/addTask", {
                method: "POST",
                body: JSON.stringify({ name: "mehdi", task: inputState }),
              });
            }
            setInputPlaceHolder("");
            inputChangeState("");
          }
        }}
      >
        submit
      </button>
    </div>
  );
}
