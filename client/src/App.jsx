import React, { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import 'react-toastify/ReactToastify.css';
import Register from "./pages/Register";
import Login from "./pages/login";
import Home from "./pages/home";
import RefrshHandler from "./utils/RefrshHandler";

// Private Route Component
const PrivateRoute = ({ children, authenticated }) => {
  return authenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    
      <>
        <RefrshHandler setAuthenticated={setAuthenticated} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* ✅ Corrected PrivateRoute usage */}
          <Route 
            path="/home" 
            element={
              <PrivateRoute authenticated={authenticated}>
                <Home />
              </PrivateRoute>
            } 
          />
        </Routes>
      </>
    
  );
};

export default App;
