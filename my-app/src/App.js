import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import AddTask from "./Pages/Task/AddTask";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Login from "./Pages/login/Login";
import Register from "./Pages/login/Register";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Protected layout + routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-task" element={<AddTask />} />
        <Route index element={<Navigate to="/dashboard" />} />
      </Route>

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;
