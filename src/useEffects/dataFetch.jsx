import React, { useEffect, useState } from 'react'

export default function dataFetch() {
    const [todos, setTodos] = useState(null)

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTodos(data)
                console.log(data);
            })


    }, []);
    return (
        <div>DataFetch

            {todos && todos.map((todo) => (
                <p key={todo.id}>{todo.title}</p>
            ))}
        </div>
    )
}
