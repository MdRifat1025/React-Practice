import React, { useState } from 'react'; export default function RegistrationForm() {
    // let [name, setName] = useState("");
    // let [email, setEmail] = useState("");
    // let [password, setPassword] = useState("");
    let [user, setUser] = useState({ name: "", email: "", password: "" });
    let { name, email, password } = user;

    // let nameHandle = (e) => setUser({ name: e.target.value, email, password });
    // let emailHandle = (e) => setUser({ name, email: e.target.value, password });
    // let passwordHandle = (e) => setUser({ name, email, password: e.target.value });

    let handleChange = (e) => {
        const fieldName = e.target.name;

        // if (fieldName === "name") {
        //     setUser({ name: e.target.value, email, password });
        // }
        // else if (fieldName === "email") {
        //     setUser({ name, email: e.target.value, password });
        // }
        // else if (fieldName === "password") {
        //     setUser({ name, email, password: e.target.value });
        // }
        setUser({ ...user, [fieldName]: e.target.value });
    };
    let submit = (e) => {
        e.preventDefault();
        console.log({ name, email, password });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h3>Registration Form</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                        value={name}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={email}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={password}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}