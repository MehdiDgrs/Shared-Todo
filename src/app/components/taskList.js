import { ImBin } from "react-icons/Im";

export default function TaskList({ taskArray, updateArray, inputValue }) {
  let handleClick = (task) => {
    let newArr = taskArray.filter((elem) => elem !== task);
    updateArray(newArr);
  };
  console.log(inputValue);
  return (
    <div className="taskList">
      <ul className="listContainer">
        {inputValue[0] && <li>{inputValue}</li>}
        {taskArray.map((task) => {
          return (
            <li key={task.id}>
              {task.task}
              <button
                onClick={async () => {
                  // handleClick(task)
                  let response = await fetch(
                    "http://localhost:3000/api/deleteTask",
                    {
                      method: "POST",
                      body: JSON.stringify({ task: task.task }),
                    }
                  );
                  if (response.status === 200) {
                    handleClick(task);
                  }
                }}
              >
                <ImBin />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
