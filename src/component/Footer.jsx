import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Blood-Setu</h2>
        <p className="footer-text">
          Bridging the gap between donors and those in need ❤️
        </p>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Blood-Setu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
