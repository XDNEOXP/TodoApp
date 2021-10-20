import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    AddTaskForm,
    TaskList,
    FilterFooter
} from '../'
import './TodoApp.css'

const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState('all')
    const [refresh, setRefresh] = useState(0)
    const [filteredTasks, setFilteredTasks] = useState([])

    useEffect(() => {
        let storedTasks = localStorage.getItem("tasks")
        if(storedTasks){
            storedTasks = JSON.parse(storedTasks)
        } else {
            storedTasks = []
        }
        setTasks(storedTasks)
    }, []);

    const addTask = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                status: false,
            },
        ]
        setTasks(newTasks)
        localStorage.setItem("tasks", JSON.stringify(newTasks))
    }

    useEffect(() => {
        switch (filter) {
            case 'all':
                setFilteredTasks(tasks)
                break;
            case 'active':
                const newActiveFilteredTasks = tasks.filter((task) => task.status === false) 
                setFilteredTasks(newActiveFilteredTasks)
                break;
            case 'completed': 
                const newCompletedFilteredTasks = tasks.filter((task) => task.status === true)
                setFilteredTasks(newCompletedFilteredTasks)
                break;
            default:
                break;
        }
    }, [filter, tasks, refresh])

    const deleteTask = (taskId) => {
        let newTasksList = tasks
        delete newTasksList[tasks.findIndex((task) => task.id === taskId)]
        newTasksList = newTasksList.filter((item) => item)
        setTasks(newTasksList)
        localStorage.setItem("tasks", JSON.stringify(newTasksList))
    }

    const handelChangeStatus = (taskId) => {
        let newTasksList = tasks
        const index = tasks.findIndex((task) => task.id === taskId)
        newTasksList[index].status = !newTasksList[index].status
        setTasks(newTasksList)
        localStorage.setItem("tasks", JSON.stringify(newTasksList))
        setRefresh(refresh+1)
    }

    return (
        <div className="TodoApp">
            <AddTaskForm addTask={addTask}  />
            <TaskList tasks={filteredTasks} deleteTask={deleteTask} handelChangeStatus={handelChangeStatus} />
            <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
        </div>    
    )
}

export default TodoApp