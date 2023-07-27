export default function TaskList({ taskArray, updateArray }) {
  let handleClick = (task) => {
    let newArr = taskArray.filter((elem) => elem !== task)
    updateArray(newArr)
  }
  return (
    <div>
      <ul>
        {taskArray.map((task) => {
          return (
            <div key={task.id}>
              <li key={task.id}>{task.task}</li>
              <button
                onClick={() => {
                  // handleClick(task)
                  fetch('http://localhost:3000/api/deleteTask', {
                    method: 'POST',
                    body: { task: task.task },
                  })
                }}
              ></button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
