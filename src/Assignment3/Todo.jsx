export default function Todo({ todos }) {
    return (
        <div>
            <h2>Todo List</h2>

            {todos.length === 0 && <p>No todos yet</p>}

            {todos.map((todo) => (
                <div key={todo.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h4>{todo.title}</h4>
                    <p>{todo.content}</p>
                </div>
            ))}
        </div>
    );
}
