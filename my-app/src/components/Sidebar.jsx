import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <a className="sidebar-brand">
                    Noble<span>UI</span>
                </a>
                <div className="sidebar-toggler">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="sidebar-body">
                <ul className="nav" id="sidebarNav">
                    <li className="nav-item nav-category">Main</li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="link-icon" data-feather="box"></i>
                            <span className="link-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item nav-category">Tasks</li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">
                            <i className="link-icon" data-feather="mail"></i>
                            <span className="link-title">Assigned Task</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="emails">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <Link to="/add-task" className="nav-link">Create Task</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="pages/email/read.html" className="nav-link">Read</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/email/compose.html" className="nav-link">Compose</a>
                                </li> */}
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="pages/apps/chat.html" className="nav-link">
                            <i className="link-icon" data-feather="message-square"></i>
                            <span className="link-title">Chat</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="pages/apps/calendar.html" className="nav-link">
                            <i className="link-icon" data-feather="calendar"></i>
                            <span className="link-title">Calendar</span>
                        </a>
                    </li>
                    <li className="nav-item nav-category">Components</li>
                    {/* <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#uiComponents" role="button" aria-expanded="false" aria-controls="uiComponents">
                            <i className="link-icon" data-feather="feather"></i>
                            <span className="link-title">UI Kit</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="uiComponents">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <a href="pages/ui-components/accordion.html" className="nav-link">Accordion</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/alerts.html" className="nav-link">Alerts</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/badges.html" className="nav-link">Badges</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/breadcrumbs.html" className="nav-link">Breadcrumbs</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/buttons.html" className="nav-link">Buttons</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/button-group.html" className="nav-link">Button group</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/cards.html" className="nav-link">Cards</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/carousel.html" className="nav-link">Carousel</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/collapse.html" className="nav-link">Collapse</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/dropdowns.html" className="nav-link">Dropdowns</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/list-group.html" className="nav-link">List group</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/media-object.html" className="nav-link">Media object</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/modal.html" className="nav-link">Modal</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/navs.html" className="nav-link">Navs</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/navbar.html" className="nav-link">Navbar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/pagination.html" className="nav-link">Pagination</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/popover.html" className="nav-link">Popovers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/progress.html" className="nav-link">Progress</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/scrollbar.html" className="nav-link">Scrollbar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/scrollspy.html" className="nav-link">Scrollspy</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/spinners.html" className="nav-link">Spinners</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/tabs.html" className="nav-link">Tabs</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/ui-components/tooltips.html" className="nav-link">Tooltips</a>
                                </li>
                            </ul>
                        </div>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#advancedUI" role="button" aria-expanded="false" aria-controls="advancedUI">
                            <i className="link-icon" data-feather="anchor"></i>
                            <span className="link-title">Advanced UI</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="advancedUI">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <a href="pages/advanced-ui/cropper.html" className="nav-link">Cropper</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/advanced-ui/owl-carousel.html" className="nav-link">Owl carousel</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/advanced-ui/sortablejs.html" className="nav-link">SortableJs</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/advanced-ui/sweet-alert.html" className="nav-link">Sweet Alert</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#forms" role="button" aria-expanded="false" aria-controls="forms">
                            <i className="link-icon" data-feather="inbox"></i>
                            <span className="link-title">Forms</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="forms">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <a href="pages/forms/basic-elements.html" className="nav-link">Basic Elements</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/advanced-elements.html" className="nav-link">Advanced Elements</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/editors.html" className="nav-link">Editors</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/wizard.html" className="nav-link">Wizard</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#charts" role="button" aria-expanded="false" aria-controls="charts">
                            <i className="link-icon" data-feather="pie-chart"></i>
                            <span className="link-title">Charts</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="charts">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <a href="pages/charts/apex.html" className="nav-link">Apex</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/charts/chartjs.html" className="nav-link">ChartJs</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/charts/flot.html" className="nav-link">Flot</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/charts/peity.html" className="nav-link">Peity</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/charts/sparkline.html" className="nav-link">Sparkline</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#tables" role="button" aria-expanded="false" aria-controls="tables">
                            <i className="link-icon" data-feather="layout"></i>
                            <span className="link-title">Table</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="tables">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <a href="pages/tables/basic-table.html" className="nav-link">Basic Tables</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/data-table.html" className="nav-link">Data Table</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#icons" role="button" aria-expanded="false" aria-controls="icons">
                            <i className="link-icon" data-feather="smile"></i>
                            <span className="link-title">Icons</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="icons">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <a href="pages/icons/feather-icons.html" className="nav-link">Feather Icons</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/icons/flag-icons.html" className="nav-link">Flag Icons</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/icons/mdi-icons.html" className="nav-link">Mdi Icons</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category">Pages</li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#general-pages" role="button" aria-expanded="false" aria-controls="general-pages">
                            <i className="link-icon" data-feather="book"></i>
                            <span className="link-title">Special pages</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="general-pages">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <a href="pages/general/blank-page.html" className="nav-link">Blank page</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/general/faq.html" className="nav-link">Faq</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/general/invoice.html" className="nav-link">Invoice</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/general/profile.html" className="nav-link">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/general/pricing.html" className="nav-link">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/general/timeline.html" className="nav-link">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#authPages" role="button" aria-expanded="false" aria-controls="authPages">
                            <i className="link-icon" data-feather="unlock"></i>
                            <span className="link-title">Authentication</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="authPages">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <a href="pages/auth/login.html" className="nav-link">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/auth/register.html" className="nav-link">Register</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#errorPages" role="button" aria-expanded="false" aria-controls="errorPages">
                            <i className="link-icon" data-feather="cloud-off"></i>
                            <span className="link-title">Error</span>
                            <i className="link-arrow" data-feather="chevron-down"></i>
                        </a>
                        <div className="collapse" data-bs-parent="#sidebarNav" id="errorPages">
                            <ul className="nav sub-menu">
                                <li className="nav-item">
                                    <a href="pages/error/404.html" className="nav-link">404</a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/error/500.html" className="nav-link">500</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category">Docs</li>
                    <li className="nav-item">
                        <a href="https://www.nobleui.com/html/documentation/docs.html" className="nav-link">
                            <i className="link-icon" data-feather="hash"></i>
                            <span className="link-title">Documentation</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Sidebar;
