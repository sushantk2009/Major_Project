import React, { useEffect, useState } from "react";

export default function RequestHistory() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((err) => console.error("Error fetching requests:", err));
  }, []);

  return (
    <div className="history-container">
      <h1 className="history-title">Blood Request History</h1>

      {requests.length === 0 ? (
        <p className="no-data">No blood requests found.</p>
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
                <th>Hospital</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.name}</td>
                  <td>{req.age}</td>
                  <td>{req.gender}</td>
                  <td>{req.bloodGroup}</td>
                  <td>{req.mobile}</td>
                  <td>{req.email}</td>
                  <td>{req.state}</td>
                  <td>{req.district}</td>
                  <td>{req.hospital}</td>
                  <td>{req.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
