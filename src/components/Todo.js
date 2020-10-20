import React, { useState } from 'react'
import Inputform from './Inputform'
import { CgAdd } from 'react-icons/cg';
import List from './List'
import './Todo.css'

function Todo() {
    const [todos, setTodos] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //adding todo

    const addTodo = (todo) => {
        const newTodos = [...todos,
        {
            title: todo,
            id: Math.random(),
            status: false
        }];
        setTodos(newTodos);
    }
    //status

    const changeStatus = (todoId) => {
        console.log(todoId)
        const newTodos = todos.map(item => {
            if (item.id == todoId) {
                return { ...item, status: !item.status }
            } else {
                return item;
            }
        })
        console.log(newTodos)
        setTodos(newTodos);
    }
    return (
        <div className='maindiv'>
            <div className='top'>
                <h1>Today</h1>
                <span className="btn"><CgAdd className="plus" size="25px"
                    onClick={handleShow} /></span>
            </div>

            <Inputform
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                addTodo={addTodo}

            />
            <div className="content">
                <div>
                    <ul>
                        {todos.map((todo, id) => {
                            return <List
                                key={id}
                                index={id}
                                todos={todo}
                                statusTodo={changeStatus}
                            />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo;