import React, { useState } from 'react'

export default function Newtodo(props) {

    let [todo, setTodo] = useState("");

    let handleInputChange = (e) => {

        setTodo(e.target.value);
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) return;
        props.onTodo(todo);

    };

    return (


        <div>Newtodo

            <form onSubmit={handleSubmit} >
                <label htmlFor="todo">New Todo: </label>
                <input
                    type="text"
                    id="todo"
                    name="todo"
                    value={todo}
                    onChange={handleInputChange}
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}
