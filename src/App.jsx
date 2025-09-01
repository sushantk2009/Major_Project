import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Frontend from './component/Frontend.jsx';
import Footer from './component/Footer.jsx';
import Dashboard from './component/Dashboard.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import Navbar from './component/Navbar.jsx';
import Profile from "./component/Profile.jsx";
import Donate from "./component/Donate.jsx";
import DonateHistory from "./component/Donate_History.jsx";
import RequestHistory from "./component/RequestHistory.jsx";  
import Request from "./component/Request.jsx";
import Camp from "./component/Camp.jsx";
export default function App() {
  return (
      <>
      <Navbar />
      <div className="pt-16"> 
        <Routes>
          <Route path="/" element={<Frontend />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard with nested routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="profile" />} /> 
            <Route path="profile" element={<Profile />} />
            <Route path="donate" element={<Donate />} />
            <Route path="donation-history" element={<DonateHistory />} />
            <Route path="request" element={<Request />} />
            <Route path="request-history" element={<RequestHistory />} />
            <Route path="camps" element={<Camp />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}
