import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Requests } from "./components/Requests";
import { Branch } from "./components/BranchManager";
import { Reject } from "./components/Rejected";
import { Accept } from "./components/Accepted";


function App() {
  

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/requests" element={<Requests />} />
          <Route exact path="/branch" element={<Branch />} />
          <Route exact path="/reject" element={<Reject />} />
          <Route exact path="/approved" element={<Accept />} />
        </Routes>
      </Router>
  );
}

export default App;
