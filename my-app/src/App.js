import React from 'react'; // ✅ Required for useState/useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import AddTask from './Pages/Task/AddTask';

function App() {

  return (
    <Router>
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
