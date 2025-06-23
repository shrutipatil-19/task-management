import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    // ✅ Define handleChange
    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost/task-management/api/login", {
            email: form.email,
            password: form.password,
        });

        const token = res.data.token;
        localStorage.setItem("token", token); // ✅ Save token

        navigate("/dashboard", { replace: true }); // ✅ Redirect after login
    } catch (err) {
        console.error(err.response?.data);
        alert("Login failed: " + (err.response?.data?.message || "Unknown error"));
    }
};

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Login</h6>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
