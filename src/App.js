import React, { useState } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { Login } from './Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {
  const [state, setState] = useState({ loggedIn: false, username: '', isAuthenticated: false });
  const { loggedIn, isAuthenticated } = state;

  // Check if user is authenticated based on login token in localStorage
  const checkAuth = () => {
    const token = localStorage.getItem('token');
    return !!token;
  }

  // Handle user login
  const handleLogin = (username, password) => {
    // TODO: Implement actual login logic here
    // For this example, we'll just use a hardcoded username and password
    if (username === 'myusername' && password === 'mypassword') {
      localStorage.setItem('token', 'mytoken');
      setState({ ...state, loggedIn: true, isAuthenticated: true });
    }
  }

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setState({ ...state, loggedIn: false, isAuthenticated: false });
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{color: '#F5BA31', fontSize: '2.5rem'}}>Untitled Cloud Streaming AI Platform</h1>
          {isAuthenticated && <button onClick={handleLogout} style={{background: '#F5BA31', border: 'none', color: '#fff', padding: '0.75rem 1rem', borderRadius: '0.25rem', cursor: 'pointer'}}>Log Out</button>}
        </header>
        <main>
          {!loggedIn ? (
            <div>
              <p style={{color: '#9F9F9F', fontSize: '1.25rem'}}>Welcome to my platform! Please log in to access our collection of films and TV shows.</p>
              <Login onLogin={handleLogin} />
            </div>
          ) : (
            <div className="App">
              <Routes>
                // how to add a route path to a javascript file I have in this folder that isn't connected to other components
                <Route path="/cloudfare" element={<Cloudfare />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <PrivateRoute path="/" element={<h1 style={{color: '#F5BA31', fontSize: '2rem'}}>Home Page</h1>} isAuthenticated={() => checkAuth()} />
                <Route path="*">
                  <>
                    <Navigate to="/" />
                  </>
                </Route>
              </Routes>
            </div>
          )}
        </main>
        <footer style={{background: '#252525', color: '#fff', padding: '1rem'}}>
          <p style={{textAlign: 'center'}}>© 2023 My Film & TV Platform. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
