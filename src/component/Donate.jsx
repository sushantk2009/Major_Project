import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Donate() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    mobile: "",
    email: "",
    state: "",
    district: "",
    address: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      alert("Please login first!");
      navigate("/login");
    }
  }, [navigate]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/donors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Donor registered successfully!");
      setFormData({
        name: "",
        age: "",
        gender: "",
        bloodGroup: "",
        mobile: "",
        email: "",
        state: "",
        district: "",
        address: "",
      });
    } else {
      alert("Failed to register donor");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }


    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }
  }
  return (
    <div className="dashboard">
      <main className="main-content">
        <h1>Donate Blood</h1>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:*</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:*</label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:*</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group:*</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
            >
              <option value="" disabled>
                Blood Group
              </option>
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile:*</label>
            <input
              id="mobile"
              name="mobile"
              type="text"
              placeholder="Mobile No"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State:*</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select State
              </option>
              <option>Haryana</option>
              <option>Delhi</option>
              <option>Punjab</option>
              <option>UP</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="district">District:*</label>
            <input
              id="district"
              name="district"
              type="text"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate(-1)} // go back
            >
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
