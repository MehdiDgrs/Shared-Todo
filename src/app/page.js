"use client";

import TaskList from "./components/taskList";
import Input from "./components/input";
import { useState } from "react";
import { useEffect } from "react";
export default function App() {
  let [taskArray, setTask] = useState([].reverse());
  let [inputValue, setInputValue] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        let result = await fetch("http://localhost:3000/api/tasks", {
          method: "GET",
        });
        let tasksList = await result.json();
        return tasksList;
      } catch (error) {
        console.log("erreur lors de la recup de données :" + error);
      }
    }
    fetchData().then((data) => {
      if (data[0]) {
        let dataToArray = data.map((x) => {
          if (x.task) {
            return {
              task: x.task,
              id: x._id,
            };
          }
        });
        setTask((prev) => [...prev, ...dataToArray.reverse()]);
      }
    });
  }, []);

  let addTask = (value) => {
    setTask((previous) => [value, ...previous]);
  };

  return (
    <main>
      <h1 className="title">TodoList</h1>
      <Input
        taskToAdd={addTask}
        taskToCompareFromInput={taskArray}
        inputState={inputValue}
        inputChangeState={setInputValue}
      ></Input>
      <TaskList
        inputValue={inputValue}
        taskArray={taskArray}
        updateArray={setTask}
      ></TaskList>
    </main>
  );
}
