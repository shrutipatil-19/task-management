import React from "react";

const Dashboard = () => {
    return (
        <div className="page-content">

            <div className="d-flex justify-content-between align-items-center flex-wrap grid-margin">
                <div>
                    <h4 className="mb-3 mb-md-0">Welcome to Dashboard</h4>
                </div>
                <div className="d-flex align-items-center flex-wrap text-nowrap">
                    <div className="input-group flatpickr w-200px me-2 mb-2 mb-md-0" id="dashboardDate">
                        <span className="input-group-text input-group-addon bg-transparent border-primary" data-toggle><i data-feather="calendar" className="text-primary"></i></span>
                        <input type="text" className="form-control bg-transparent border-primary" placeholder="Select date" data-input />
                    </div>
                    <button type="button" className="btn btn-outline-primary btn-icon-text me-2 mb-2 mb-md-0">
                        <i className="btn-icon-prepend" data-feather="printer"></i>
                        Print
                    </button>
                    <button type="button" className="btn btn-primary btn-icon-text mb-2 mb-md-0">
                        <i className="btn-icon-prepend" data-feather="download-cloud"></i>
                        Download Report
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-12 stretch-card">
                    <div className="row flex-grow-1">
                        <div className="col-md-4 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-baseline">
                                        <h6 className="card-title mb-0">New Customers</h6>
                                        <div className="dropdown mb-2">
                                            <a type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="icon-lg text-secondary pb-3px" data-feather="more-horizontal"></i>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 col-md-12 col-xl-5">
                                            <h3 className="mb-2">3,897</h3>
                                            <div className="d-flex align-items-baseline">
                                                <p className="text-success">
                                                    <span>+3.3%</span>
                                                    <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-12 col-xl-7">
                                            <div id="customersChart" className="mt-md-3 mt-xl-0"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-baseline">
                                        <h6 className="card-title mb-0">New Orders</h6>
                                        <div className="dropdown mb-2">
                                            <a type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="icon-lg text-secondary pb-3px" data-feather="more-horizontal"></i>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 col-md-12 col-xl-5">
                                            <h3 className="mb-2">35,084</h3>
                                            <div className="d-flex align-items-baseline">
                                                <p className="text-danger">
                                                    <span>-2.8%</span>
                                                    <i data-feather="arrow-down" className="icon-sm mb-1"></i>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-12 col-xl-7">
                                            <div id="ordersChart" className="mt-md-3 mt-xl-0"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-baseline">
                                        <h6 className="card-title mb-0">Growth</h6>
                                        <div className="dropdown mb-2">
                                            <a type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="icon-lg text-secondary pb-3px" data-feather="more-horizontal"></i>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></a>
                                                <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 col-md-12 col-xl-5">
                                            <h3 className="mb-2">89.87%</h3>
                                            <div className="d-flex align-items-baseline">
                                                <p className="text-success">
                                                    <span>+2.8%</span>
                                                    <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-12 col-xl-7">
                                            <div id="growthChart" className="mt-md-3 mt-xl-0"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-12 grid-margin stretch-card">
                    <div className="card overflow-hidden">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
                                <h6 className="card-title mb-0">Revenue</h6>
                                <div className="dropdown">
                                    <a type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="icon-lg text-secondary pb-3px" data-feather="more-horizontal"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col-md-7">
                                    <p className="text-secondary fs-13px mb-3 mb-md-0">Revenue is the income that a business has from its normal business activities, usually from the sale of goods and services to customers.</p>
                                </div>
                                <div className="col-md-5 d-flex justify-content-md-end">
                                    <div className="btn-group mb-3 mb-md-0" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-outline-primary">Today</button>
                                        <button type="button" className="btn btn-outline-primary d-none d-md-block">Week</button>
                                        <button type="button" className="btn btn-primary">Month</button>
                                        <button type="button" className="btn btn-outline-primary">Year</button>
                                    </div>
                                </div>
                            </div>
                            <div id="revenueChart"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7 col-xl-8 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-baseline mb-2">
                                <h6 className="card-title mb-0">Monthly sales</h6>
                                <div className="dropdown mb-2">
                                    <a type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="icon-lg text-secondary pb-3px" data-feather="more-horizontal"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></a>
                                    </div>
                                </div>
                            </div>
                            <p className="text-secondary">Sales are activities related to selling or the number of goods or services sold in a given time period.</p>
                            <div id="monthlySalesChart"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-xl-4 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <h6 className="card-title mb-0">Cloud storage</h6>
                                <div className="dropdown mb-2">
                                    <a type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="icon-lg text-secondary pb-3px" data-feather="more-horizontal"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></a>
                                    </div>
                                </div>
                            </div>
                            <div id="storageChart"></div>
                            <div className="row mb-3">
                                <div className="col-6 d-flex justify-content-end">
                                    <div>
                                        <label className="d-flex align-items-center justify-content-end fs-10px text-uppercase fw-bolder">Total storage <span className="p-1 ms-1 rounded-circle bg-secondary"></span></label>
                                        <h5 className="fw-bolder mb-0 text-end">8TB</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <label className="d-flex align-items-center fs-10px text-uppercase fw-bolder"><span className="p-1 me-1 rounded-circle bg-primary"></span> Used storage</label>
                                        <h5 className="fw-bolder mb-0">~5TB</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary">Upgrade storage</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-5 col-xl-4 grid-margin grid-margin-xl-0 stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-baseline mb-2">
                                <h6 className="card-title mb-0">Inbox</h6>
                                <div className="dropdown mb-2">
                                    <a type="button" id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="icon-lg text-secondary pb-3px" data-feather="more-horizontal"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton6">
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <a href="javascript:;" className="d-flex align-items-center border-bottom pb-3">
                                    <div className="me-3">
                                        <img src="https://via.placeholder.com/35x35" className="rounded-circle w-35px" alt="user" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="text-body mb-2">Leonardo Payne</h6>
                                            <p className="text-secondary fs-12px">12.30 PM</p>
                                        </div>
                                        <p className="text-secondary fs-13px">Hey! there I'm available...</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="d-flex align-items-center border-bottom py-3">
                                    <div className="me-3">
                                        <img src="https://via.placeholder.com/35x35" className="rounded-circle w-35px" alt="user" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="text-body mb-2">Carl Henson</h6>
                                            <p className="text-secondary fs-12px">02.14 AM</p>
                                        </div>
                                        <p className="text-secondary fs-13px">I've finished it! See you so..</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="d-flex align-items-center border-bottom py-3">
                                    <div className="me-3">
                                        <img src="https://via.placeholder.com/35x35" className="rounded-circle w-35px" alt="user" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="text-body mb-2">Jensen Combs</h6>
                                            <p className="text-secondary fs-12px">08.22 PM</p>
                                        </div>
                                        <p className="text-secondary fs-13px">This template is awesome!</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="d-flex align-items-center border-bottom py-3">
                                    <div className="me-3">
                                        <img src="https://via.placeholder.com/35x35" className="rounded-circle w-35px" alt="user" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="text-body mb-2">Amiah Burton</h6>
                                            <p className="text-secondary fs-12px">05.49 AM</p>
                                        </div>
                                        <p className="text-secondary fs-13px">Nice to meet you</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="d-flex align-items-center border-bottom py-3">
                                    <div className="me-3">
                                        <img src="https://via.placeholder.com/35x35" className="rounded-circle w-35px" alt="user" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="text-body mb-2">Yaretzi Mayo</h6>
                                            <p className="text-secondary fs-12px">01.19 AM</p>
                                        </div>
                                        <p className="text-secondary fs-13px">Hey! there I'm available...</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-xl-8 stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-baseline mb-2">
                                <h6 className="card-title mb-0">Projects</h6>
                                <div className="dropdown mb-2">
                                    <a type="button" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="icon-lg text-secondary pb-3px" data-feather="more-horizontal"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton7">
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th className="pt-0">#</th>
                                            <th className="pt-0">Project Name</th>
                                            <th className="pt-0">Start Date</th>
                                            <th className="pt-0">Due Date</th>
                                            <th className="pt-0">Status</th>
                                            <th className="pt-0">Assign</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>NobleUI jQuery</td>
                                            <td>01/01/2024</td>
                                            <td>26/04/2024</td>
                                            <td><span className="badge bg-danger">Released</span></td>
                                            <td>Leonardo Payne</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>NobleUI Angular</td>
                                            <td>01/01/2024</td>
                                            <td>26/04/2024</td>
                                            <td><span className="badge bg-success">Review</span></td>
                                            <td>Carl Henson</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>NobleUI ReactJs</td>
                                            <td>01/05/2024</td>
                                            <td>10/09/2024</td>
                                            <td><span className="badge bg-info">Pending</span></td>
                                            <td>Jensen Combs</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>NobleUI VueJs</td>
                                            <td>01/01/2024</td>
                                            <td>31/11/2024</td>
                                            <td><span className="badge bg-warning">Work in Progress</span>
                                            </td>
                                            <td>Amiah Burton</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>NobleUI Laravel</td>
                                            <td>01/01/2024</td>
                                            <td>31/12/2024</td>
                                            <td><span className="badge bg-danger">Coming soon</span></td>
                                            <td>Yaretzi Mayo</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>NobleUI NodeJs</td>
                                            <td>01/01/2024</td>
                                            <td>31/12/2024</td>
                                            <td><span className="badge bg-primary">Coming soon</span></td>
                                            <td>Carl Henson</td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom">3</td>
                                            <td className="border-bottom">NobleUI EmberJs</td>
                                            <td className="border-bottom">01/05/2024</td>
                                            <td className="border-bottom">10/11/2024</td>
                                            <td className="border-bottom"><span className="badge bg-info">Pending</span></td>
                                            <td className="border-bottom">Jensen Combs</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;