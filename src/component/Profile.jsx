import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const loggedUser = localStorage.getItem("loggedInUser");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    } else {
      navigate("/login"); // redirect if not logged in
    }
  }, [navigate]);

  if (!user) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 rounded-2xl shadow-lg border bg-white">
      <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
        👤 My Profile
      </h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold">ID:</p>
          <p className="text-gray-700">{user.id}</p>
        </div>
        <div>
          <p className="font-semibold">Name:</p>
          <p className="text-gray-700">{user.name}</p>
        </div>
        <div>
          <p className="font-semibold">Age:</p>
          <p className="text-gray-700">{user.age}</p>
        </div>
        <div>
          <p className="font-semibold">Gender:</p>
          <p className="text-gray-700">{user.gender}</p>
        </div>
        <div>
          <p className="font-semibold">Email:</p>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <div>
          <p className="font-semibold">Mobile:</p>
          <p className="text-gray-700">{user.mobile}</p>
        </div>
      </div>
    </div>
  );
}
