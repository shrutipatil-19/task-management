import axios from 'axios';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem("token");
            console.log("Token in localStorage:", token);

            if (!token) {
                console.warn("No token found. User probably not logged in.");
                return;
            }

            try {
                const res = await axios.get('http://localhost/task-management/api/user-info', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log("User Info API Response:", res.data);
                setUser(res.data.user);
            } catch (err) {
                console.error('Error fetching user info:', err.response?.data || err.message);
            }
        };

        fetchUserInfo();
    }, []);
    return (
        <nav className="navbar">
            <div className="navbar-content">

                <div className="logo-mini-wrapper">
                    <img src="/assets/images/logo-mini-light.png" className="logo-mini logo-mini-light" alt="logo" />
                    <img src="/assets/images/logo-mini-dark.png" className="logo-mini logo-mini-dark" alt="logo" />
                </div>

                <form className="search-form">
                    <div className="input-group">
                        <div className="input-group-text">
                            <i data-feather="search"></i>
                        </div>
                        <input type="text" className="form-control" id="navbarForm" placeholder="Search here..." />
                    </div>
                </form>

                <ul className="navbar-nav">
                    <li className="theme-switcher-wrapper nav-item">
                        <input type="checkbox" value="" id="theme-switcher" />
                        <label for="theme-switcher">
                            <div className="box">
                                <div className="ball"></div>
                                <div className="icons">
                                    <i className="feather icon-sun"></i>
                                    <i className="feather icon-moon"></i>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/assets/images/flags/us.svg" className="w-20px" title="us" alt="flag" />
                            <span className="ms-2 d-none d-md-inline-block">English</span>
                        </a>

                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="appsDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i data-feather="grid"></i>
                        </a>
                        <div className="dropdown-menu p-0" aria-labelledby="appsDropdown">
                            <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                                <p className="mb-0 fw-bold">Web Apps</p>
                                <a href="javascript:;" className="text-secondary">Edit</a>
                            </div>
                            <div className="row g-0 p-1">
                                <div className="col-3 text-center">
                                    <a href="pages/apps/chat.html" className="dropdown-item d-flex flex-column align-items-center justify-content-center w-70px h-70px"><i data-feather="message-square" className="icon-lg mb-1"></i><p className="fs-12px">Chat</p></a>
                                </div>
                                <div className="col-3 text-center">
                                    <a href="pages/apps/calendar.html" className="dropdown-item d-flex flex-column align-items-center justify-content-center w-70px h-70px"><i data-feather="calendar" className="icon-lg mb-1"></i><p className="fs-12px">Calendar</p></a>
                                </div>
                                <div className="col-3 text-center">
                                    <a href="pages/email/inbox.html" className="dropdown-item d-flex flex-column align-items-center justify-content-center w-70px h-70px"><i data-feather="mail" className="icon-lg mb-1"></i><p className="fs-12px">Email</p></a>
                                </div>
                                <div className="col-3 text-center">
                                    <a href="pages/general/profile.html" className="dropdown-item d-flex flex-column align-items-center justify-content-center w-70px h-70px"><i data-feather="instagram" className="icon-lg mb-1"></i><p className="fs-12px">Profile</p></a>
                                </div>
                            </div>
                            <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                                <a href="javascript:;">View all</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i data-feather="mail"></i>
                        </a>
                        <div className="dropdown-menu p-0" aria-labelledby="messageDropdown">
                            <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                                <p>9 New Messages</p>
                                <a href="javascript:;" className="text-secondary">Clear all</a>
                            </div>
                            <div className="p-1">
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="me-3">
                                        <img className="w-30px h-30px rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                    </div>
                                    <div className="d-flex justify-content-between flex-grow-1">
                                        <div className="me-4">
                                            <p>Leonardo Payne</p>
                                            <p className="fs-12px text-secondary">Project status</p>
                                        </div>
                                        <p className="fs-12px text-secondary">2 min ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="me-3">
                                        <img className="w-30px h-30px rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                    </div>
                                    <div className="d-flex justify-content-between flex-grow-1">
                                        <div className="me-4">
                                            <p>Carl Henson</p>
                                            <p className="fs-12px text-secondary">Client meeting</p>
                                        </div>
                                        <p className="fs-12px text-secondary">30 min ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="me-3">
                                        <img className="w-30px h-30px rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                    </div>
                                    <div className="d-flex justify-content-between flex-grow-1">
                                        <div className="me-4">
                                            <p>Jensen Combs</p>
                                            <p className="fs-12px text-secondary">Project updates</p>
                                        </div>
                                        <p className="fs-12px text-secondary">1 hrs ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="me-3">
                                        <img className="w-30px h-30px rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                    </div>
                                    <div className="d-flex justify-content-between flex-grow-1">
                                        <div className="me-4">
                                            <>
                                                {!user ? (
                                                    <p>Loading user info...</p>
                                                ) : (
                                                    <>
                                                        <p className="fs-16px fw-bolder">{user.name}</p>
                                                        <p className="fs-12px text-secondary">{user.email}</p>
                                                    </>
                                                )}
                                            </>
                                        </div>
                                        <p className="fs-12px text-secondary">2 hrs ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="me-3">
                                        <img className="w-30px h-30px rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                    </div>
                                    <div className="d-flex justify-content-between flex-grow-1">
                                        <div className="me-4">
                                            <p>Yaretzi Mayo</p>
                                            <p className="fs-12px text-secondary">New record</p>
                                        </div>
                                        <p className="fs-12px text-secondary">5 hrs ago</p>
                                    </div>
                                </a>
                            </div>
                            <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                                <a href="javascript:;">View all</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i data-feather="bell"></i>
                            <div className="indicator">
                                <div className="circle"></div>
                            </div>
                        </a>
                        <div className="dropdown-menu p-0" aria-labelledby="notificationDropdown">
                            <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                                <p>6 New Notifications</p>
                                <a href="javascript:;" className="text-secondary">Clear all</a>
                            </div>
                            <div className="p-1">
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                                        <i className="icon-sm text-white" data-feather="gift"></i>
                                    </div>
                                    <div className="flex-grow-1 me-2">
                                        <p>New Order Recieved</p>
                                        <p className="fs-12px text-secondary">30 min ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                                        <i className="icon-sm text-white" data-feather="alert-circle"></i>
                                    </div>
                                    <div className="flex-grow-1 me-2">
                                        <p>Server Limit Reached!</p>
                                        <p className="fs-12px text-secondary">1 hrs ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                                        <img className="w-30px h-30px rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                    </div>
                                    <div className="flex-grow-1 me-2">
                                        <p>New customer registered</p>
                                        <p className="fs-12px text-secondary">2 sec ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                                        <i className="icon-sm text-white" data-feather="layers"></i>
                                    </div>
                                    <div className="flex-grow-1 me-2">
                                        <p>Apps are ready for update</p>
                                        <p className="fs-12px text-secondary">5 hrs ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                    <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                                        <i className="icon-sm text-white" data-feather="download"></i>
                                    </div>
                                    <div className="flex-grow-1 me-2">
                                        <p>Download completed</p>
                                        <p className="fs-12px text-secondary">6 hrs ago</p>
                                    </div>
                                </a>
                            </div>
                            <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                                <a href="javascript:;">View all</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="w-30px h-30px ms-1 rounded-circle" src="https://via.placeholder.com/30x30" alt="profile" />
                        </a>
                        <div className="dropdown-menu p-0" aria-labelledby="profileDropdown">
                            <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                                <div className="mb-3">
                                    <img className="w-80px h-80px rounded-circle" src="https://via.placeholder.com/80x80" alt="" />
                                </div>
                                <div className="text-center">
                                    <>
                                        {!user ? (
                                            <p>Loading user info...</p>
                                        ) : (
                                            <>
                                                <p className="fs-16px fw-bolder">{user.name}</p>
                                                <p className="fs-12px text-secondary">{user.email}</p>
                                            </>
                                        )}
                                    </>
                                </div>
                            </div>
                            <ul className="list-unstyled p-1">
                                <li className="dropdown-item py-2">
                                    <a href="pages/general/profile.html" className="text-body ms-0">
                                        <i className="me-2 icon-md" data-feather="user"></i>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li className="dropdown-item py-2">
                                    <a href="javascript:;" className="text-body ms-0">
                                        <i className="me-2 icon-md" data-feather="edit"></i>
                                        <span>Edit Profile</span>
                                    </a>
                                </li>
                                <li className="dropdown-item py-2">
                                    <a href="javascript:;" className="text-body ms-0">
                                        <i className="me-2 icon-md" data-feather="repeat"></i>
                                        <span>Switch User</span>
                                    </a>
                                </li>
                                <li className="dropdown-item py-2">
                                    <a href="javascript:;" className="text-body ms-0">
                                        <i className="me-2 icon-md" data-feather="log-out"></i>
                                        <span>Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <a href="#" className="sidebar-toggler">
                    <i data-feather="menu"></i>
                </a>

            </div>
        </nav>
    );
};

export default Navbar;