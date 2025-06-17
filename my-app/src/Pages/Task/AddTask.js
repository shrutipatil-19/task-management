import React from "react";

const AddTask = () => {
    return (
        <div className="page-content">

            <nav className="page-breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Forms</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Basic Elements</li>
                </ol>
            </nav>

            <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">

                            <h6 className="card-title">Basic Form</h6>

                            <form className="forms-sample">
                                <div className="mb-3">
                                    <label for="exampleInputUsername1" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInputUsername1" autocomplete="off" placeholder="Username"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" autocomplete="off" placeholder="Password"/>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">
                                            Remember me
                                        </label>
                                </div>
                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">

                            <h6 className="card-title">Horizontal Form</h6>

                            <form className="forms-sample">
                                <div className="row mb-3">
                                    <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Username</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="exampleInputUsername2" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="exampleInputEmail2" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="exampleInputEmail2" autocomplete="off" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                                    <div className="col-sm-9">
                                        <input type="number" className="form-control" id="exampleInputMobile" placeholder="Mobile number"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" className="form-control" id="exampleInputPassword2" autocomplete="off" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">
                                        Remember me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;