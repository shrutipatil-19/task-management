import React from "react";

const AddTask = () => {
    return (
        <div className="page-content">

            <nav className="page-breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Task</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Task</li>
                </ol>
            </nav>

            <form className="row" >
                <div className="col-md-8 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Task Details</h6>

                            <div className="mb-3">
                                <label htmlFor="project_id" className="form-label">Project ID</label>
                                <input type="text" className="form-control" id="project_id" name="project_id" placeholder="Enter Project ID" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Task Title</label>
                                <input type="text" className="form-control" id="title" name="title" placeholder="Enter Task Title" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" name="description" rows="3" placeholder="Enter Task Description"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="assigned_by" className="form-label">Assigned By (User ID)</label>
                                <input type="text" className="form-control" id="assigned_by" name="assigned_by" placeholder="User ID who assigned" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="assigned_to" className="form-label">Assigned To (User ID)</label>
                                <input type="text" className="form-control" id="assigned_to" name="assigned_to" placeholder="User ID to assign task" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Additional Info</h6>

                            <div className="mb-3">
                                <label htmlFor="priority" className="form-label">Priority</label>
                                <select className="form-select" id="priority" name="priority">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                    <option value="urgent">Urgent</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">Status</label>
                                <select className="form-select" id="status" name="status">
                                    <option value="pending">Pending</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="start_date" className="form-label">Start Date</label>
                                <input type="date" className="form-control" id="start_date" name="start_date" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="due_date" className="form-label">Due Date</label>
                                <input type="date" className="form-control" id="due_date" name="due_date" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="completed_at" className="form-label">Completed At</label>
                                <input type="datetime-local" className="form-control" id="completed_at" name="completed_at" />
                            </div>

                            <button type="submit" className="btn btn-primary me-2">Submit</button>
                            <button type="button" className="btn btn-secondary">Cancel</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
