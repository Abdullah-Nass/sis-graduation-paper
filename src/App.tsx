import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
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

function ProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
