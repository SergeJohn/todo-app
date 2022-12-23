import React from 'react'
import "./style.css"
import {BsTrash, BsList} from "react-icons/bs"

const Todos = (props) => {
  return (
    <div className='todo-container'>
        
        <button cursor='pointer' onClick={props.showModal}>edit</button>
        <h4 style={{ textDecoration: props.completed ? 'line-through' : 'none', color:  props.completed ? 'grey' : 'white' }}>{props.task}</h4>
        <div>
            <BsTrash cursor='pointer' onClick={props.deleteTodo}/>
        </div>
    </div>
  )
}

export default Todos