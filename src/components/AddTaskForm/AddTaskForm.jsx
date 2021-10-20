import React, { useState } from "react";
import './AddTaskForm.css'

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState()

  const handelChange = (event) => {
    if(event) event.preventDefault();
    setValue(event.target.value)
  }
  const handelSubmit = (event) => {
    if(event) event.preventDefault();
    if(!value || value === ""){
      return
    }
    addTask(value)
  }

  return (
    <div className="AddTastForm">
        <form onSubmit={handelSubmit}>
          <input onChange={handelChange} type="text" placeholder="what need to be done?" />
          <button type="submit">
            Add 
          </button>
        </form>
    </div>
)
}

export default AddTaskForm