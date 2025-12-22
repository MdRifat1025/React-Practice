import React from 'react'
import Todos from './Todos';
import Newtodo from './Newtodo';
import { useState } from 'react';

const dummyTodos = ["todo1", "todo2", "todo3"];

export default function Home() {
    const [todos, setTodos] = useState(dummyTodos);


    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        // setTodos([...todos, newTodo]);
        // console.log("New Todo from Home:", newTodo);
    }

    return (
        <div>Home
            {/* onTodo={handleNewTodo}  */}
            <Newtodo onTodo={handleNewTodo} />

            <Todos todos={todos} />

        </div>
    )
}
