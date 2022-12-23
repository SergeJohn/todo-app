import React, {useState, useEffect} from 'react'
import {Header, Forms, Todos} from "./components/index"
import axios from 'axios'

const App = () => {
    const [state, setState] = useState(false)
    const [data, setData] = useState([])
    const [task, setTask] = useState({
        task: '',
        completed: false,    
    })

    const [isShowModal, setIsShowModal] = useState(false)


    useEffect(() => {
        getData()
        
    }, [state])

    const getData = async () => {
        try {     
            const res = await axios.get("http://127.0.0.1:8000/api/todo_lists/")
            setData(res.data)
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://127.0.0.1:8000/api/add_todo/`, task)
            console.log(res.data)
            setState(!state)
            setTask(prev => ({...prev, task: ''}))
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        const {checked, value, type, name} = e.target
        setTask(prev => ({...prev, [name]: type === 'checkbox' ? checked: value }))
    }

    const deleteTodo = async (id) => {
        console.log(id)
        try {
            const res = await axios.delete(`http://127.0.0.1:8000/api/delete_todo/${id}`)
            console.log(res.data)
            setState(!state)
        }
        catch (error) {
            console.error(error)
        }
    }

    console.log(data)

    const updateTodo = async (id) => {
        try {
            const res = await axios.put(`http://127.0.0.1:8000/api/update_todo/${id}/`, task)
            const {data} = res
            const newTask = data.map(t => {
                if (t.id === id){
                    return data
                }
                return t
            })
            setTask(newTask)
        }
        catch (error) {
            console.log(error)
        }
    }

    const showModal = (t) => {
        setTask(prev => t)
        setIsShowModal(true)
    }

    const closeModal = () => {
        setIsShowModal(false)
        setTask(prev => ({
            completed: false,
            task: ''
        }))
    }

    const saveChanges = async () => {
        await updateTodo(task.id)
        setState(!state)
        closeModal()
    }

    const modal = <div className='modal'>
        <h1>Update Task</h1>
        <div className='input-group'>
        <input type='text' onChange={handleChange} name='task' value={task.task}/>
        <input type='checkbox' checked={task.checked} name='completed' onChange={handleChange}/>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={saveChanges}>Save Changes</button>
        </div>
    </div>

    let style;
    if (isShowModal){  
        style = {
            backgroundColor: 'grey',
            
        }
    }else {
        style = undefined
    }


    const Item = <div className='App-Container'>
    <Header/>
    <Forms task={task} onSubmit={handleSubmit} handleChange={handleChange}/>
    {data.map(item => {
        return <Todos key={item.id} {...item} 
        deleteTodo={() => deleteTodo(item.id)} 
        showModal={() => showModal(item)} />
    })} 
    </div>

    if (isShowModal) {   
        return modal
    }else {
        return Item
    }
}

export default App