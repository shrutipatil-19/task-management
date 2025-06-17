import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const res = await axios.post("http://localhost/task-management/api/register", {
                name: form.name,
                email: form.email,
                password: form.password,
                role: form.role,
            });

            alert("User registered!");
            navigate("/login", { replace: true });
        } catch (err) {
            console.error(err);
            alert("Registration failed.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Register Form</h6>

                            <form className="forms-sample" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        placeholder="name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Role</label>
                                    <select
                                        name="role"
                                        className="form-control"
                                        value={form.role}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select role</option>
                                        <option value="admin">Admin</option>
                                        <option value="hr">Hr</option>
                                        <option value="manager">Manager</option>
                                        <option value="employee">Employee</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="mb-3 col-6">
                                    <label className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
