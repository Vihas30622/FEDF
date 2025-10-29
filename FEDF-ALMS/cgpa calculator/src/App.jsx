import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddCGPA from "./components/AddCGPA";
import ViewCGPA from "./components/ViewCGPA";

const App = () => {
  const [studentData, setStudentData] = useState(null); // State for storing student details

  return (
    <Router>
      <div className="app-root">
        <div className="app-card">
          <nav className="app-nav">
            <ul className="nav-list">
              <li>
                <Link to="/">Add CGPA</Link>
              </li>
              <li>
                <Link to="/view-cgpa">View CGPA</Link>
              </li>
            </ul>
          </nav>

          <div className="divider" />

          <div className="content">
            <Routes>
              <Route path="/" element={<AddCGPA setStudentData={setStudentData} />} />
              <Route path="/view-cgpa" element={<ViewCGPA studentData={studentData} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
