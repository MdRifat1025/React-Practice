import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    // console.log(props.todos);
    return (
        <div >
            <h1> Todos file</h1>
            {/* <Todo data={props.todos} /> */}

            {props.todos.map((todos, index) => (
                <Todo key={index} data={todos} />
            ))};
        </div>
    )
}
