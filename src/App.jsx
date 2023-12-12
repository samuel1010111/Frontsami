import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile"; // Correct the import path
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./index.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = ({ children }) => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>{children}</div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ element: Element }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return <Element />;
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={(
              <Layout>
                <Outlet />
              </Layout>
            )}
          >
            <Route index element={<Home />} />
            <Route path="profile/:id" element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
