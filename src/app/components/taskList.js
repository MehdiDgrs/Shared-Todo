export default function TaskList({ taskArray, updateArray }) {
  let handleClick = (task) => {
    let newArr = taskArray.filter((elem) => elem !== task);
    updateArray(newArr);
  };
  return (
    <div>
      <ul>
        {taskArray.map((task) => {
          return (
            <div key={task}>
              <li key={task}>{task}</li>
              <button onClick={() => handleClick(task)}></button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
