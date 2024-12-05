import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import './App.css'
import Register from './components/Register'
import Login from "./components/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Users from "./pages/Users";


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;