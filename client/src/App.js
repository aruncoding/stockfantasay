import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin from "./components/login/UserLogin.js";
import Registration from './components/login/Registration.js';
import Dashboard from './components/dashboard/Dashboard.js';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/"  element={<UserLogin/>} />
          <Route path="/register"  element={<Registration/>} />
          <Route path="/dashboard"  element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App;