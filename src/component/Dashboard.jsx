import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // check login on page load
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      alert("Please login first!");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 shadow-lg">
        <nav className="flex flex-col space-y-3">
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            👤 My Profile
          </NavLink>

          <NavLink
            to="donate"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            💉 Donate Blood
          </NavLink>

          <NavLink
            to="donation-history"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            📜 Donation History
          </NavLink>

          <NavLink
            to="camps"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            📍 Blood Donation Camps
          </NavLink>

          <NavLink
            to="request"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            🔄 Blood Request
          </NavLink>

          <NavLink
            to="request-history"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            📜 Request History
          </NavLink>
        </nav>
      </aside>

      {/* Main Content (changes when clicking links) */}
      <main className="flex-1 p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
}
