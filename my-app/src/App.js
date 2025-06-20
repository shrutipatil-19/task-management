import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import AddTask from './Pages/Task/AddTask';
import Register from './Pages/login/Register';
import Login from './Pages/login/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>

        {/* Routes WITHOUT layout */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Routes WITH layout */}
        <Route path="*" element={
          <>
            <Sidebar />
            <div className="page-wrapper">
              <Navbar />
              <Routes>
                {/* Protected Route Example */}
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                /> <Route path="/" element={<Dashboard />} />
                <Route path="/add-task" element={<AddTask />} />
                {/* Add other routes with layout here */}
              </Routes>
            </div>
          </>
        }
        />

      </Routes>
    </Router>
  );
}

export default App;
