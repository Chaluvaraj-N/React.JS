import React from "react";

function EmployeeCard({ name, age, city, role, isOnline, toggle }) {
  return (
    <div
      style={{
        width: "250px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px gray",
      }}
    >
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Role: {role}</p>

      <p>
        Status:
        <span
          style={{
            color: isOnline ? "green" : "red",
            marginLeft: "5px",
          }}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </p>

      <button onClick={toggle}>Change Status</button>
    </div>
  );
}

export default EmployeeCard;