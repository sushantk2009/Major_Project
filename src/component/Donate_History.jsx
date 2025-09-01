import React, { useEffect, useState } from "react";

export default function DonateHistory() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/donors")
      .then((res) => res.json())
      .then((data) => setDonors(data))
      .catch((err) => console.error("Error fetching donors:", err));
  }, []);

  return (
    <div className="history-container">
      <h1 className="history-title">Donation History</h1>

      {donors.length === 0 ? (
        <p className="no-data">No donation records found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>State</th>
                <th>District</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor) => (
                <tr key={donor.id}>
                  <td>{donor.name}</td>
                  <td>{donor.age}</td>
                  <td>{donor.gender}</td>
                  <td>{donor.bloodGroup}</td>
                  <td>{donor.mobile}</td>
                  <td>{donor.email}</td>
                  <td>{donor.state}</td>
                  <td>{donor.district}</td>
                  <td>{donor.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
