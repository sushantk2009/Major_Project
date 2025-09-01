import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch users from json-server
      const res = await fetch("http://localhost:5000/users"); // adjust port if different
      const users = await res.json();

      // Check if email + password match
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Save login state
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // Trigger navbar update
        window.dispatchEvent(new Event("storage"));

        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        alert("❌ Invalid credentials!");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("⚠️ Server not running! Start json-server with: npx json-server --watch db.json --port 5000");
    }
  };

  return (
    <div className="max-w-md mx-auto rounded-2xl shadow-lg mt-8 p-6 border">
      <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">🔑 Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
