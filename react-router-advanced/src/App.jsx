import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import ProfileRoutes from './components/Profile';
import UserProfile from './components/UserProfile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/profile/*" element={<ProtectedRoute element={<ProfileRoutes />} />}/>
            <Route path="/user/:userId" element={<UserProfile/>} />
            <Route path="/post/:postId" element={<BlogPost/>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const Navigation = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/user/1">User 1 Profile</Link>
        </li>
        <li>
          <Link to="/post/42">Blog Post 42</Link>
        </li>
      </ul>
      <button onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

// HomeContent is defined directly within App.jsx
const HomeContent = () => {
  return <h1>Welcome to the Home Page</h1>;
};

export default App;
