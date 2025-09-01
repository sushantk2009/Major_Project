import React, { useEffect, useState } from "react";

export default function Camp() {
  const [donors, setDonors] = useState([]);
  const [search, setSearch] = useState("");
  const [bloodFilter, setBloodFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/donors") // 👈 fetching from donors
      .then((res) => res.json())
      .then((data) => setDonors(data))
      .catch((err) => console.error("Error fetching donors:", err));
  }, []);

  const handleRequest = (donor) => {
    alert(`Request for ${donor.bloodGroup} blood has been sent to ${donor.name}!`);
  };

  // Filtering donors based on search and blood group filter
  const filteredDonors = donors.filter((donor) => {
    const matchesSearch =
      donor.name.toLowerCase().includes(search.toLowerCase()) ||
      donor.district.toLowerCase().includes(search.toLowerCase()) ||
      donor.state.toLowerCase().includes(search.toLowerCase());

    const matchesBlood = bloodFilter ? donor.bloodGroup === bloodFilter : true;

    return matchesSearch && matchesBlood;
  });

  return (
    <div className="camp-container">
      <h1 className="camp-title">Available Blood Donors</h1>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name, district, or state"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={bloodFilter}
          onChange={(e) => setBloodFilter(e.target.value)}
          className="blood-filter"
        >
          <option value="">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>

      {/* Donors List */}
      {filteredDonors.length === 0 ? (
        <p className="no-data">No matching donors found.</p>
      ) : (
        <div className="card-grid">
          {filteredDonors.map((donor) => (
            <div key={donor.id} className="donor-card">
              <h2 className="blood-group">{donor.bloodGroup}</h2>
              <p><strong>Name:</strong> {donor.name}</p>
              <p><strong>Age:</strong> {donor.age}</p>
              <p><strong>Gender:</strong> {donor.gender}</p>
              <p><strong>Mobile:</strong> {donor.mobile}</p>
              <p><strong>Email:</strong> {donor.email}</p>
              <p><strong>State:</strong> {donor.state}</p>
              <p><strong>District:</strong> {donor.district}</p>
              <p><strong>Address:</strong> {donor.address}</p>

              <button className="request-btn" onClick={() => handleRequest(donor)}>
                Request This Blood
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
