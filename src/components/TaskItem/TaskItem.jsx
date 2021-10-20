import React from 'react';
import { MdDelete } from 'react-icons/md'
import './TaskItem.css'

const TaskItem = ({ task, deleteTask, handelChangeStatus }) => (
    <li className="TaskItem">
        <input onChange={() => handelChangeStatus(task.id)} type="checkbox" checked={task.status} />
        <h2>{ task.title }</h2>
        <button onClick={() => {deleteTask(task.id)}} type="button"><MdDelete /></button>
    </li>
)

export default TaskItem