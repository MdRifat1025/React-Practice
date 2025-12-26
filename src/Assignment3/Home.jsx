import { useState } from 'react';
import style from './form.module.css';
import Todo from './Todo';

export default function Home() {
    const [form, setForm] = useState({
        title: '',
        content: ''
    });

    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();


        setTodos([
            ...todos,
            {
                id: Date.now(),
                title: form.title,
                content: form.content
            }
        ]);

        setForm({ title: '', content: '' });
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Home</h1>

            <form className={style.forms} onSubmit={submitForm}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="content">Content</label>
                <input
                    type="text"
                    id="content"
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                />

                <br />
                <button type="submit">Add Todo</button>
            </form>

            <Todo todos={todos} />
        </div>
    );
}
