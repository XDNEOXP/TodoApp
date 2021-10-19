import React from 'react';
import {
    AddTaskForm,
    TaskList,
    FilterFooter
} from '../'

const TodoApp = () => (
    <div>
        <AddTaskForm />
        <TaskList />
        <FilterFooter />
    </div>    
)

export default TodoApp