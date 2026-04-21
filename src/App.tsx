import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
