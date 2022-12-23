import React from 'react'
import "./style.css"
import { BsPlusCircle} from "react-icons/bs";


const Forms = ({task, onSubmit, handleChange}) => {
  return (
    <div className='Forms'>
        <form className='todo-form' onSubmit={onSubmit}>
            <input type='text' name='task' className='input-tag' placeholder='Tasks' value={task.task} onChange={handleChange} required/>
            <button className='todo-btn'>add</button>
            <div className='label'>
            <label htmlFor="one">Completed:</label>
            <input type='checkbox' id='one' className='checkbox' name='completed' checked={task.completed} onChange={handleChange}/>
            </div>
        </form>
    </div>
  )
}

export default Forms