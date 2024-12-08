import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import "./App.css";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Users from "./pages/Users";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
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
