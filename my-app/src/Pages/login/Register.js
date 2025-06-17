import React from "react";

const Register = () => {
    return (
        <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">

                        <h6 className="card-title">Register Form</h6>

                        <form className="forms-sample">
                            <div className="mb-3">
                                <label for="exampleInputUsername1" className="form-label">Username</label>
                                <input type="text" className="form-control" id="exampleInputUsername1" autocomplete="off" placeholder="Username" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div class="mb-3 col-12">
                                <label class="form-label">Role</label>
                                <select name="role" class="form-control">
                                    <option value="admin">Admin</option>
                                    <option value="user">Hr</option>
                                    <option value="hr">Manager</option>
                                    <option value="business">Employee</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" autocomplete="off" placeholder="Password" />
                            </div>
                            <div class="mb-3 col-6">
                                <label class="form-label">Confirm Password</label>
                                <input type="password" name="password_confirmation" class="form-control" required />
                            </div>
                            <button type="submit" className="btn btn-primary me-2">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;