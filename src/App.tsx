import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";
import Login from "./components/LoginPage";
import Header from "./components/Header";
import SideNavItem from "./components/SideNavItem";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Home = () => (
  <>
    <Header />
    <SideNavItem />
    <Body />
    <Footer />
  </>
);

const ProtectedRoute = ({ children }: { children: ReactNode }) =>
  isAuthenticated() ? children : <Navigate to="/login" replace />;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
