import React from "react";
import { TaskItem } from "../";
import './TaskList.css'

const TaskList = ({ tasks, deleteTask, handelChangeStatus }) => (
    <div className="TaskList">
        <ul>
          { tasks.map((task) => (<TaskItem key={`task-${task.id}`} task={task} deleteTask={deleteTask} handelChangeStatus={handelChangeStatus} />)) }
        </ul>
    </div>
)

export default TaskList 