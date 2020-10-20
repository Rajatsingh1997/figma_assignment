import React from 'react';
import './List.css';

function List(props) {
    return (
        <>
          
            <li>
                <div className="list">
                    <div><input type="checkbox" id={props.index} 
                    onChange={() => { props.statusTodo(props.todos.id) }} 
                    checked={props.todos.status} />
                </div>
                    <div className="text"><p>{props.todos.title}</p></div>
                    <span className={props.todos.status ? "dot" : "dotred"}></span>
                </div>
                
                <div className="horizontal"><hr/>
                </div>
            </li>
                
        </>
    )
}

export default List;