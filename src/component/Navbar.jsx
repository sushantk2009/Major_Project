import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Info, HeartHandshake, User, Menu, X, LogOut } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status + listen for changes
  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("loggedInUser");
      setLoggedIn(!!user);
    };

    checkLogin(); 
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.dispatchEvent(new Event("storage")); // update immediately
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-600">BloodSetu</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <Home size={20} /> Home
            </Link>
            <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <Info size={20} /> Dashboard
            </Link>
            <Link to="/donor" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <HeartHandshake size={20} /> Donor
            </Link>

            {!loggedIn ? (
              <>
                <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
                  <User size={20} /> Login
                </Link>
                <Link to="/register" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
                  📝 Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600"
              >
                <LogOut size={20} /> Logout
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-4">
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-red-600" onClick={() => setIsOpen(false)}>
            <Home size={20} /> Home
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-red-600" onClick={() => setIsOpen(false)}>
            <Info size={20} /> Dashboard
          </Link>
          <Link to="/donor" className="flex items-center gap-2 text-gray-700 hover:text-red-600" onClick={() => setIsOpen(false)}>
            <HeartHandshake size={20} /> Donor
          </Link>

          {!loggedIn ? (
            <>
              <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-red-600" onClick={() => setIsOpen(false)}>
                <User size={20} /> Login
              </Link>
              <Link to="/register" className="flex items-center gap-2 text-gray-700 hover:text-red-600" onClick={() => setIsOpen(false)}>
                📝 Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-gray-700 hover:text-red-600"
            >
              <LogOut size={20} /> Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
