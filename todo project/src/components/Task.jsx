const Task = ({task, removeTask}) => {
    return <li>
        <div>
            {task.text}
        </div>
        <div>
            <button onClick={removeTask}>delete</button>
        </div>
    </li>
}

export default Task;