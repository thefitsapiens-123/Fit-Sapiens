import React from "react";
import { Link } from "react-router";

function Unauthorized() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "3rem", color: "#b91c1c" }}>Unauthorized</h1>
      <p style={{ fontSize: "1.5rem" }}>
        You do not have permission to view this page.
      </p>
      <Link to="/profile" style={{ fontSize: "1.2rem", color: "#1d4ed8" }}>
        Go to Home
      </Link>
    </div>
  );
}

export default Unauthorized;
